import React, { useEffect, useRef, useState } from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import SacrificeModal from '../../components/SacrificeModal'
import { Spinner } from '../../components/shared/spinner'
import Moralis from 'moralis'
import Web3Utils from 'web3-utils'
import Web3 from 'web3'
import {
  CASH_TOKEN,
  BNB_ADDRESS,
  CASH_ADDRESS,
  CASHv1_ADDRESS,
  CASHv2_ADDRESS,
  COW_ADDRESS,
  BUSD_ADDRESS,
} from '../../constants'
import { toast, useToast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useMoralis } from 'react-moralis'
export const MaxUint =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935'
const Sacrifice = () => {
  const [BNBPrice, setBNBPrice] = useState('0')
  const [cashPrice, setCashPrice] = useState('0')
  const [migrationContract, setMigrationContract] = useState<any>()
  const [caashv1Contract, setCaashv1Contract] = useState<any>()
  const [stableContract, setStableContract] = useState<any>()
  const [sacrificed, setSacrificed] = useState<any>({
    caashv1: 0,
    BNB: 0,
    BUSD: 0,
  })
  const [isClaimable, setIsClaimable] = useState<any>({
    isClaimable: false,
    isClaimableByNativeToken: false,
    isClaimableByStableCoin: false,
  })
  const [dataSacrifice, setDataSacrifice] = useState<{
    title: string
    balance: string
    onSacrifice: (amount: string) => void
    address: string
  }>(null)
  const [dataWallet, setDataWallet] = useState<any>()
  const DECIMALS = 5
  var ref = useRef(undefined)
  const { Moralis, isAuthenticated, user, enableWeb3, isWeb3Enabled } =
    useMoralis()
  async function loadCashPrice() {
    const cashPrice = await Moralis.Web3API.token.getTokenPrice({
      address: CASH_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setCashPrice(cashPrice.usdPrice.toFixed(DECIMALS))
  }
  async function loadBNBPrice() {
    const BNBPrice = await Moralis.Web3API.token.getTokenPrice({
      address: BNB_ADDRESS,
      chain: 'bsc',
    })
    setBNBPrice(BNBPrice.usdPrice.toFixed(DECIMALS))
  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      loadCashPrice()
      loadBNBPrice()
    }, 500)
    ref.current = setInterval(() => {
      loadCashPrice()
      loadBNBPrice()
    }, 30000)
    return () => {
      clearInterval(ref.current)
      clearTimeout(timeOut)
    }
  }, [])

  const initContract = async () => {
    const migrationContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'migration',
    })
    const tokenCaashv1ContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'caashv1',
    })
    const tokenStableContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'busd',
    })

    let web3 = new Web3(Web3.givenProvider)

    const migrationCont = new web3.eth.Contract(
      JSON.parse(migrationContractInfo.abi),
      migrationContractInfo.address
    )

    const caashV1Cont = new web3.eth.Contract(
      JSON.parse(tokenCaashv1ContractInfo.abi),
      tokenCaashv1ContractInfo.address
    )

    const StableCont = new web3.eth.Contract(
      JSON.parse(tokenStableContractInfo.abi),
      tokenStableContractInfo.address
    )
    console.log(migrationCont)

    setStableContract({
      contract: StableCont,
      info: tokenStableContractInfo,
    })

    setMigrationContract({
      contract: migrationCont,
      info: migrationContractInfo,
    })

    setCaashv1Contract({
      contract: caashV1Cont,
      info: tokenCaashv1ContractInfo,
    })
  }

  const getIsClaimable = async () => {
    if (migrationContract) {
      const isClaimable = await migrationContract.contract.methods
        .isClaimable()
        .call()
      const isClaimableByNativeToken = await migrationContract.contract.methods
        .isClaimableByNativeToken()
        .call()
      const isClaimableByStableCoin = await migrationContract.contract.methods
        .isClaimableByStableCoin()
        .call()
      setIsClaimable({
        isClaimable: isClaimable,
        isClaimableByNativeToken: isClaimableByNativeToken,
        isClaimableByStableCoin: isClaimableByStableCoin,
      })
    }
  }

  const getSacrificed = async () => {
    if (migrationContract) {
      const tokenV1Sacrificed = await migrationContract.contract.methods
        .tokenV1Sacrificers(user && user?.attributes?.accounts?.[0])
        .call()
      const nativeTokenSacrificers = await migrationContract.contract.methods
        .nativeTokenSacrificers(user && user?.attributes?.accounts?.[0])
        .call()
      const stableCoinSacrificers = await migrationContract.contract.methods
        .stableCoinSacrificers(user && user?.attributes?.accounts?.[0])
        .call()
      sacrificed.caashv1 = Web3Utils.fromWei(tokenV1Sacrificed)
      sacrificed.BNB = Web3Utils.fromWei(nativeTokenSacrificers)
      sacrificed.BUSD = Web3Utils.fromWei(stableCoinSacrificers)
    }
  }

  const getBalanceWal = async () => {
    let tokenBalance = await Moralis.Web3API.account.getTokenBalances({
      chain: 'bsc',
      address: user && user?.attributes?.accounts?.[0],
    })

    let BNBBalance = await Moralis.Web3API.account.getNativeBalance({
      chain: 'bsc',
      address: user && user?.attributes?.accounts?.[0],
    })

    await transferDataWallet(tokenBalance, BNBBalance)
  }

  const transferDataWallet = async (
    arr: {
      token_address: string
      name: string
      symbol: string
      logo?: string
      thumbnail?: string
      decimals: string
      balance: string
    }[],
    BNBBalance: { balance: string }
  ) => {
    var dataWal: any = {}
    for (let item of arr) {
      dataWal[item.token_address] = parseFloat(
        Web3Utils.fromWei(item.balance)
      ).toFixed(5)
    }
    dataWal[BNB_ADDRESS] = parseFloat(
      Web3Utils.fromWei(BNBBalance.balance)
    ).toFixed(5)
    setDataWallet({ ...dataWallet, ...dataWal })
  }

  const onSacrificeCaashv1 = async (value: string) => {
    try {
      const amount = Web3Utils.toWei('' + value)
      const approveWallet = await caashv1Contract.contract.methods
        .allowance(
          user && user?.attributes?.accounts?.[0],
          migrationContract.info.address
        )
        .call()
      if (approveWallet == 0) {
        // approve market
        const approveData = caashv1Contract.contract.methods
          .approve(migrationContract.info.address, MaxUint)
          .encodeABI()
        const dataReturn = {
          data: approveData,
          from: user?.attributes?.accounts?.[0],
          to: caashv1Contract.info.address,
        }

        await web3SendTransaction(dataReturn)
      }
      const data = await migrationContract.contract.methods
        .sacrificeTokenV1(amount)
        .encodeABI()

      const res = await web3SendTransaction({
        from: user?.attributes?.accounts?.[0],
        to: migrationContract.info.address,
        data,
        message: 'Sacrifice successfully!',
      })
      toast.success("You've sacrificed successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setDataSacrifice(null)
      setSacrificed({
        ...sacrificed,
        caashv1: Number(sacrificed.caashv1) + Number(value),
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've sacrificed failed!")
    }
  }

  const claimTokenV2ByV1Token = async () => {
    if (!isClaimable.isClaimable) {
      toast.error('Caash V2 is not claimable now')
      return
    }
    if (sacrificed.caashv1 == 0) {
      toast.error("You didn't sacrifice any Caash V1")
      return
    }
    try {
      const data = await migrationContract.contract.methods
        .claimTokenV2ByV1Token()
        .encodeABI()

      const res = await web3SendTransaction({
        from: user?.attributes?.accounts?.[0],
        to: migrationContract.info.address,
        data,
        message: 'Claim successfully!',
      })
      toast.success("You've claim Caashv2 successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setSacrificed({
        ...sacrificed,
        caashv1: 0,
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've claim failed!")
    }
  }

  const onSacrificeNative = async (value: string) => {
    try {
      const amount = Web3Utils.toWei('' + value)
      const data = await migrationContract.contract.methods
        .sacrificeNativeToken()
        .send({
          from: user?.attributes?.accounts?.[0],
          value: amount,
        })

      // const res = await web3SendTransaction({
      //   from: user?.attributes?.accounts?.[0],
      //   to: migrationContract.info.address,
      //   data,
      //   message: 'Sacrifice successfully!',
      // })
      toast.success("You've sacrificed successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setDataSacrifice(null)
      setSacrificed({
        ...sacrificed,
        BNB: Number(sacrificed.BNB) + Number(value),
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've sacrificed failed!")
    }
  }

  const claimTokenV2ByNativeTokenSacrificers = async () => {
    if (!isClaimable.isClaimableByNativeToken) {
      toast.error('Caash V2 is not claimable now')
      return
    }
    if (sacrificed.BNB == 0) {
      toast.error("You didn't sacrifice any BNB")
      return
    }
    try {
      const data = await migrationContract.contract.methods
        .claimTokenV2ByNativeTokenSacrificers()
        .encodeABI()

      const res = await web3SendTransaction({
        from: user?.attributes?.accounts?.[0],
        to: migrationContract.info.address,
        data,
        message: 'Claim successfully!',
      })
      toast.success("You've claim Caashv2 successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setSacrificed({
        ...sacrificed,
        BNB: 0,
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've claim failed!")
    }
  }

  const onSacrificeStableCoin = async (value: string) => {
    try {
      const amount = Web3Utils.toWei('' + value)
      const approveWallet = await stableContract.contract.methods
        .allowance(
          user && user?.attributes?.accounts?.[0],
          migrationContract.info.address
        )
        .call()
      if (approveWallet == 0) {
        // approve market
        const approveData = stableContract.contract.methods
          .approve(migrationContract.info.address, MaxUint)
          .encodeABI()
        const dataReturn = {
          data: approveData,
          from: user?.attributes?.accounts?.[0],
          to: stableContract.info.address,
        }

        await web3SendTransaction(dataReturn)
      }
      const data = await migrationContract.contract.methods
        .sacrificeStableCoin(amount)
        .encodeABI()

      const res = await web3SendTransaction({
        from: user?.attributes?.accounts?.[0],
        to: migrationContract.info.address,
        data,
        message: 'Sacrifice successfully!',
      })
      toast.success("You've sacrificed successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setDataSacrifice(null)
      setSacrificed({
        ...sacrificed,
        BUSD: Number(sacrificed.BUSD) + Number(value),
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've sacrificed failed!")
    }
  }

  const claimTokenV2ByStableCoinSacrificers = async () => {
    if (!isClaimable.isClaimableByStableCoin) {
      toast.error('Caash V2 is not claimable now')
      return
    }
    if (sacrificed.BUSD == 0) {
      toast.error("You didn't sacrifice any BUSD")
      return
    }
    try {
      const data = await migrationContract.contract.methods
        .claimTokenV2ByStableCoinSacrificers()
        .encodeABI()

      const res = await web3SendTransaction({
        from: user?.attributes?.accounts?.[0],
        to: migrationContract.info.address,
        data,
        message: 'Claim successfully!',
      })
      toast.success("You've claim Caashv2 successfully!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setSacrificed({
        ...sacrificed,
        BUSD: 0,
      })
    } catch (err) {
      setDataSacrifice(null)
      toast.error("You've claim failed!")
    }
  }

  const web3SendTransaction = async (dataSend: any) => {
    const { from, to, value, data, message } = dataSend
    let web3 = new Web3(Web3.givenProvider)

    try {
      await web3.eth
        .sendTransaction(
          {
            from,
            to,
            value,
            data,
          },
          async (err, res) => {
            if (res) {
              console.log(res)
            }
            if (err) {
              throw err
            }
          }
        )
        .on('receipt', async (rs) => {
          getBalanceWal()
          return rs
        })
    } catch (err) {
      throw err
    }
  }

  useEffect(() => {
    if (migrationContract || caashv1Contract || stableContract) {
      getSacrificed()
      getIsClaimable()
    }
  }, [migrationContract || caashv1Contract || stableContract || dataWallet])

  useEffect(() => {
    if (isAuthenticated) {
      initContract()
      getBalanceWal()
    }
  }, [isAuthenticated, isWeb3Enabled])

  const isLoading = dataWallet && sacrificed && user

  return (
    <>
      <div className="flex flex-col items-center my-20">
        <div className="w-full min-h-[134px] sm:w-[600px] mx-0 sm:mx-4 mb-[20px] p-[20px] rounded-[12px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <h1 className="w-full text-[20px] mb-[20px] text-white">
            Instructions
          </h1>
          <div className="w-full text-white">
            Sacrifice V1 CASH for V2 CASH at a 1:2 ratio. Sacrifice BNB or BUSD
            to join our strategic sale and increase your V2 CASH holdings at the
            earliest point.
          </div>
        </div>
        <div className="w-full sm:w-[600px] mx-0 sm:mx-4 mb-[20px] p-[20px] rounded-[12px] bg-white dark:bg-[#252525]">
          <div className="w-100">
            <h1 className="text-[20px] mb-[20px] font-bold">Sacrifice</h1>
            <div className="w-full overflow-auto rounded-lg sm:block hidden ">
              {isLoading ? (
                <table className="w-full text-left font-bold">
                  <thead className="">
                    <tr>
                      <th>Type</th>
                      <th>Available(V2)</th>
                      <th>Sacrificed</th>
                      <th className="invisible">none</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="flex">
                          <div className="mr-2">
                            <img
                              loading="lazy"
                              className="w-[28px] h-[28px]"
                              alt=""
                              src="https://assets.website-files.com/61492a98083d88218f816f8f/61ffac5fcbaf175820b44196_CaashIcon256.png"
                            ></img>
                          </div>
                          <div>
                            <div>Caash(V1)</div>
                            <div>${cashPrice}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">20,000,000</div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">{sacrificed.caashv1}</div>
                      </td>
                      <td>
                        <div className="flex flex-col h-100 mb-5 items-center">
                          <div
                            onClick={() => {
                              if (dataWallet)
                                setDataSacrifice({
                                  title: 'Caash(V1)',
                                  balance: dataWallet[CASHv1_ADDRESS],
                                  address: CASHv1_ADDRESS,
                                  onSacrifice: (amount: string) =>
                                    onSacrificeCaashv1(amount),
                                })
                            }}
                            className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium mb-3 text-sm"
                          >
                            Sacrifice
                          </div>
                          <div
                            onClick={() => claimTokenV2ByV1Token()}
                            className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                          >
                            Claim V2
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="flex">
                          <div className="mr-2">
                            <img
                              loading="lazy"
                              className="w-[28px] h-[28px]"
                              alt=""
                              src="https://assets.website-files.com/61492a98083d88218f816f8f/6213671dd799297e80cf0eab_Binance-Coin-BNB-icon.png"
                            ></img>
                          </div>
                          <div>
                            <div>Binance Coin</div>
                            <div>${BNBPrice}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">2,500,000</div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">{sacrificed.BNB}</div>
                      </td>
                      <td>
                        <div className="flex flex-col h-100 mb-5 items-center">
                          <div
                            onClick={() => {
                              if (dataWallet)
                                setDataSacrifice({
                                  title: 'BNB',
                                  balance: dataWallet[BNB_ADDRESS],
                                  address: BNB_ADDRESS,
                                  onSacrifice: (amount: string) =>
                                    onSacrificeNative(amount),
                                })
                            }}
                            className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium mb-3 text-sm"
                          >
                            Sacrifice
                          </div>
                          <button
                            onClick={() =>
                              claimTokenV2ByNativeTokenSacrificers()
                            }
                            className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                          >
                            Claim V2
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="flex">
                          <div className="mr-2">
                            <img
                              loading="lazy"
                              className="w-[28px] h-[28px]"
                              alt=""
                              src="https://assets.website-files.com/61492a98083d88218f816f8f/62136727112f0cc60784a05d_binance-usd-busd-logo-freelogovectors.net_.png"
                            ></img>
                          </div>
                          <div>
                            <div>Binance USD</div>
                            <div>$1.00</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">2,500,000</div>
                      </td>
                      <td>
                        <div className="h-100 mb-5">{sacrificed.BUSD}</div>
                      </td>
                      <td>
                        <div className="flex flex-col h-100 mb-5 items-center">
                          <div
                            onClick={() => {
                              if (dataWallet)
                                setDataSacrifice({
                                  title: 'BUSD',
                                  balance: dataWallet[BUSD_ADDRESS],
                                  address: BUSD_ADDRESS,
                                  onSacrifice: (amount: string) =>
                                    onSacrificeStableCoin(amount),
                                })
                            }}
                            className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium mb-3 text-sm"
                          >
                            Sacrifice
                          </div>
                          <div
                            onClick={() =>
                              claimTokenV2ByStableCoinSacrificers()
                            }
                            className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                          >
                            Claim V2
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : user !== null ? (
                <Spinner />
              ) : (
                <div className="w-full flex items-center justify-center">
                  Please connect wallet to sacrifice !
                </div>
              )}
            </div>
            {isLoading ? (
              <div className="grid grid-cols-1 gap-4 sm:hidden">
                <div className="mb-3">
                  <div className="mb-2">
                    <div className="font-bold mb-2">Type</div>
                    <div className="flex">
                      <div className="mr-2">
                        <img
                          loading="lazy"
                          className="w-[28px] h-[28px]"
                          alt=""
                          src="https://assets.website-files.com/61492a98083d88218f816f8f/61ffac5fcbaf175820b44196_CaashIcon256.png"
                        ></img>
                      </div>
                      <div>
                        <div className="mb-2">Caash(V1)</div>
                        <div>${cashPrice}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Available(V2)</div>
                    <div className="h-100">20,000,000</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Sacrificed</div>
                    <div>{sacrificed.caashv1}</div>
                  </div>
                  <div>
                    <div className="flex h-100 items-center">
                      <div
                        onClick={() => {
                          if (dataWallet)
                            setDataSacrifice({
                              title: 'Caash(V1)',
                              balance: dataWallet[CASHv1_ADDRESS],
                              address: CASHv1_ADDRESS,
                              onSacrifice: (amount: string) =>
                                onSacrificeCaashv1(amount),
                            })
                        }}
                        className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium text-sm mr-3"
                      >
                        Sacrifice
                      </div>
                      <button
                        onClick={() => claimTokenV2ByV1Token()}
                        className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                      >
                        Claim V2
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="mb-2">
                    <div className="font-bold mb-2">Type</div>
                    <div className="flex">
                      <div className="mr-2">
                        <img
                          loading="lazy"
                          className="w-[28px] h-[28px]"
                          alt=""
                          src="https://assets.website-files.com/61492a98083d88218f816f8f/6213671dd799297e80cf0eab_Binance-Coin-BNB-icon.png"
                        ></img>
                      </div>
                      <div>
                        <div className="mb-2">Binance Coin</div>
                        <div>{BNBPrice}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Available(V2)</div>
                    <div className="h-100">2,500,000</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Sacrificed</div>
                    <div>{sacrificed.BNB}</div>
                  </div>
                  <div>
                    <div className="flex h-100 items-center">
                      <div
                        onClick={() => {
                          if (dataWallet)
                            setDataSacrifice({
                              title: 'BNB',
                              balance: dataWallet[BNB_ADDRESS],
                              address: BNB_ADDRESS,
                              onSacrifice: (amount: string) =>
                                onSacrificeNative(amount),
                            })
                        }}
                        className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium text-sm mr-3"
                      >
                        Sacrifice
                      </div>
                      <button
                        onClick={() => claimTokenV2ByNativeTokenSacrificers()}
                        className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                      >
                        Claim V2
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="mb-2">
                    <div className="font-bold mb-2">Type</div>
                    <div className="flex">
                      <div className="mr-2">
                        <img
                          loading="lazy"
                          className="w-[28px] h-[28px]"
                          alt=""
                          src="https://assets.website-files.com/61492a98083d88218f816f8f/62136727112f0cc60784a05d_binance-usd-busd-logo-freelogovectors.net_.png"
                        ></img>
                      </div>
                      <div>
                        <div className="mb-2">Binance USD</div>
                        <div>$1.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Available(V2)</div>
                    <div className="h-100">2,500,000</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-bold mb-2">Sacrificed</div>
                    <div>{sacrificed.BUSD}</div>
                  </div>
                  <div>
                    <div className="flex h-100 items-center">
                      <div
                        onClick={() => {
                          if (dataWallet)
                            setDataSacrifice({
                              title: 'BUSD',
                              balance: dataWallet[BUSD_ADDRESS],
                              address: BUSD_ADDRESS,
                              onSacrifice: (amount: string) =>
                                onSacrificeStableCoin(amount),
                            })
                        }}
                        className="w-[84px] h-[40px] flex items-center justify-center secondary-btn cursor-pointer text-center text-white text-[16px] rounded-[12px] font-medium text-sm mr-3"
                      >
                        Sacrifice
                      </div>
                      <button
                        onClick={() => claimTokenV2ByStableCoinSacrificers()}
                        className="w-[84px] h-[40px] flex items-center justify-center cursor-pointer text-center text-[#f037a5] text-[16px]  rounded-[12px] font-medium border-[1px] border-[#f037a5] text-sm"
                      >
                        Claim V2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : user !== null ? (
              <div className="w-full sm:hidden">
                <Spinner />
              </div>
            ) : (
              <div className="w-full flex items-center justify-center sm:hidden">
                Please connect wallet to sacrifice !
              </div>
            )}
          </div>
        </div>
      </div>
      <SacrificeModal
        {...dataSacrifice}
        isOpen={dataSacrifice !== null}
        onClose={() => setDataSacrifice(null)}
      />
    </>
  )
}

Sacrifice.Layout = DefaultLayout
Sacrifice.LayoutProps = {
  title: 'Sacrifice',
}

export default Sacrifice
