import CustomInput from '../../components/shared/custom-input'
import Panel from '../../components/shared/panel'
import PrimaryButton from '../../components/shared/PrimaryButton'
import SecondaryButton from '../../components/shared/SecondaryButton'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis'
import {
  BITCOIN_ADDRESS,
  BTCB_ADDRESS,
  CASHv2_ADDRESS,
  CASH_ADDRESS,
  DECIMALS,
} from '../../constants'
import Web3 from 'web3'
import NumberFormat from '../../components/NumberFormat'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import { ethers } from 'ethers'
import { abi } from '../../constants/abi'
import { fetchQuote } from '../../requests'

declare global {
  interface Window {
    ethereum: any
  }
}

const Rewards = () => {
  const { user, isInitialized } = useMoralis()
  const [caashContract, setCaashContract] = useState<any>()
  const [devidentContract, setDevidentContract] = useState<any>()
  const [dex, setDex] = useState<any>()

  const [dataWallet, setDataWallet] = useState<any>()
  const [caashPrice, setCaashPrice] = useState(0)
  const [bitcoinPrice, setBitcoinPrice] = useState(0)

  const [receiveBalance, setReceiveBalance] = useState(0)
  const [pendingBalance, setPendingBalance] = useState(0)
  const [rewardTracker, setRewardTracker] = useState(0)

  const [address, setAddress] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')
  const [loadingClaim, setLoadingClaim] = useState(false)
  const [loadingCompound, setLoadingCompound] = useState(false)

  const initContract = async () => {
    const caashcontractContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'caash_v2',
    })

    let web3 = new Web3(Web3.givenProvider)

    const caashContract = new web3.eth.Contract(
      JSON.parse(caashcontractContractInfo.abi),
      caashcontractContractInfo.address
    )

    setCaashContract(caashContract)

    const rewardContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'dividend_tracker',
    })

    const rewardContract = new web3.eth.Contract(
      JSON.parse(rewardContractInfo.abi),
      rewardContractInfo.address
    )

    setDevidentContract(rewardContract)
  }

  async function loadCashPrice() {
    const cashPrice = await Moralis.Web3API.token.getTokenPrice({
      address: CASH_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setCaashPrice(cashPrice.usdPrice as number)
  }

  async function loadBitcoinPrice() {
    const bitcoinPrice = await Moralis.Web3API.token.getTokenPrice({
      address: BITCOIN_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setBitcoinPrice(bitcoinPrice.usdPrice as number)
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
    }[]
  ) => {
    var dataWal: any = {}
    for (let item of arr) {
      dataWal[item.token_address] = {
        balance: item.balance,
        decimals: parseInt(item.decimals),
      }
    }
    setDataWallet({ ...dataWallet, ...dataWal })
  }

  async function loadDataWalletInfo() {
    try {
      const tokenBalance = await Moralis.Web3API.account.getTokenBalances({
        chain: 'bsc',
        address: selectedAddress,
      })
      await transferDataWallet(tokenBalance)
    } catch (err) {
      console.log(err)
    }
  }

  async function loadReceivedInfo() {
    try {
      const data = await devidentContract.methods
        .withdrawnDividendOf(selectedAddress)
        .call()
      setReceiveBalance(Number(Moralis.Units.FromWei(data)))
    } catch (err) {
      console.log(err)
    }
  }

  async function loadPendingInfo() {
    try {
      const data = await caashContract.methods
        .withdrawableDividendOf(selectedAddress)
        .call()
      console.log('data pending :>> ', data)
      setPendingBalance(Number(Moralis.Units.FromWei(data)))
    } catch (err) {
      console.log(err)
    }
  }

  async function loadRewardTracker() {
    try {
      const data = await devidentContract.methods
        .totalDividendsDistributed()
        .call()
      console.log('reward tracker', data)
      setRewardTracker(Number(Moralis.Units.FromWei(data)))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const idInterval = setInterval(() => {
      loadCashPrice()
      loadBitcoinPrice()
    }, 30000)
    return clearInterval(idInterval)
  }, [])

  useEffect(() => {
    if (user) {
      setAddress(user?.attributes?.accounts?.[0])
      setSelectedAddress(user?.attributes?.accounts?.[0])
    }
  }, [user])

  useEffect(() => {
    if (selectedAddress && caashContract && devidentContract) {
      loadDataWalletInfo()
      loadReceivedInfo()
      loadPendingInfo()
    }
  }, [selectedAddress, caashContract, devidentContract])

  useEffect(() => {
    if (devidentContract) {
      loadRewardTracker()
    }
  }, [devidentContract])

  const addTokenToWallet = async () => {
    if (typeof window !== 'undefined' && window?.ethereum) {
      const tokenAddress = '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
      const tokenSymbol = 'BTCB'
      const tokenDecimals = 18
      const tokenImage = 'https://bscscan.com/token/images/btcb_32.png'

      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        })

        if (wasAdded) {
          console.log('Thanks for your interest!')
        } else {
          console.log('Added failed!')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.which == 13 || event.keyCode == 13) {
      if (Web3.utils.isAddress(address)) {
        setSelectedAddress(event?.target?.value?.trim())
      } else if (!address) {
        setSelectedAddress('')
        setDataWallet({})
        setReceiveBalance(0)
        setPendingBalance(0)
      } else {
        toast.error('Invalid address!')
      }
    }
  }

  const handleChange = (e: any) => setAddress(e.target.value)

  const handleClaim = async () => {
    setLoadingClaim(true)
    try {
      const data = await caashContract.methods.claim().send({
        from: selectedAddress?.trim(),
      })
      if (data?.status) {
        toast.success('Succesful Claimed', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        loadPendingInfo()
        loadReceivedInfo()
        loadRewardTracker()
        loadDataWalletInfo()
      }
    } catch (err) {
      toast.error('Claim failed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('calim', err)
    } finally {
      setLoadingClaim(false)
    }
  }

  const handleCompound = async () => {
    setLoadingCompound(true)
    try {
      const res = await dex.hasAllowance({
        chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: BTCB_ADDRESS, // The token you want to swap
        fromAddress: selectedAddress?.trim(), // Your wallet address
        amount: Moralis.Units.Token(
          dataWallet?.[BTCB_ADDRESS]?.balance ?? 0,
          parseInt(dataWallet?.[BTCB_ADDRESS]?.decimals ?? 0)
        ).toString(),
      })
      if (!res) {
        await dex.approve({
          chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
          tokenAddress: BTCB_ADDRESS, // The token you want to swap
          fromAddress: user && user?.attributes?.accounts?.[0], // Your wallet address
        })
        toast.success("You've approved successfully!", {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setLoadingCompound(false)
      }
      setLoadingCompound(true)

      const receipt = await dex.swap({
        chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: BTCB_ADDRESS, // The token you want to swap
        toTokenAddress: CASH_ADDRESS, // The token you want to receive
        amount: dataWallet?.[BTCB_ADDRESS]?.balance,
        fromAddress: selectedAddress, // Your wallet address
        slippage: 20,
      })
      console.log(receipt)
      if (receipt && receipt.status) {
        toast.success("You've swapped successfully!", {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.error(receipt.description, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
    } finally {
      setLoadingCompound(false)
    }
  }

  const init = async () => {
    await Moralis.initPlugins()
    const dex = Moralis.Plugins.oneInch
    setDex(dex)
  }

  useEffect(() => {
    if (isInitialized) {
      init()
      initContract()
      loadCashPrice()
      loadBitcoinPrice()
    }
  }, [isInitialized])

  const tokens = [
    {
      id: 1,
      name: 'Caash',
      symbol: 'CASH',
      imageUrl: '/assets/favicon.png',
      price: caashPrice,
      balance: Number(
        Moralis.Units.FromWei(
          dataWallet?.[CASHv2_ADDRESS]?.balance ?? 0,
          dataWallet?.[CASHv2_ADDRESS]?.decimals ?? 0
        )
      ),
      decimals: DECIMALS,
    },
    {
      id: 2,
      name: 'Bitcoin',
      symbol: 'BTC',
      imageUrl: '/assets/btc-token.png',
      price: bitcoinPrice,
      balance: Number(
        Moralis.Units.FromWei(
          dataWallet?.[BTCB_ADDRESS]?.balance ?? 0,
          dataWallet?.[BTCB_ADDRESS]?.decimals ?? 0
        )
      ),
      decimals: 7,
    },
  ]

  const receiveToken = {
    id: 3,
    name: 'Bitcoin',
    symbol: 'BTC',
    imageUrl: '/assets/btc-token.png',
    price: bitcoinPrice,
    balance: receiveBalance,
    decimals: 7,
  }

  const pendingToken = {
    id: 4,
    name: 'Bitcoin',
    symbol: 'BTC',
    imageUrl: '/assets/btc-token.png',
    price: bitcoinPrice,
    balance: pendingBalance,
    decimals: 7,
  }

  const tokenRows = (tokens: any) => {
    return tokens.map((token: any) => (
      <div
        className="flex flex-row justify-between items-center mb-[20px]"
        key={token?.id}
      >
        <div className="flex items-center justity-start">
          <img
            className="w-[28px] h-[28px] mr-[10px] object-contain "
            src={token?.imageUrl}
          />
          <div className="flex flex-col items-start justify-center">
            <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
              {token?.name}
            </div>
            <div className="font-[12px]">
              $
              <NumberFormat
                thousandSeparator
                value={token?.price ?? 0}
                displayType="text"
                decimalScale={DECIMALS}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 xl:mt-0 items-end">
          <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
            <NumberFormat
              thousandSeparator
              value={token?.balance ?? 0}
              displayType="text"
              decimalScale={token?.decimals}
            />{' '}
            {token?.symbol}
          </div>
          <div className="font-[12px]">
            $
            <NumberFormat
              thousandSeparator
              value={token?.balance * token?.price ?? 0}
              displayType="text"
              decimalScale={token?.decimals}
            />
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px] items-start">
      <Panel className="w-full max-w-[900px] sm:w-[50%] mx-0 sm:mx-4 mb-[20px]">
        <CustomInput
          placeholder="Paste your wallet address (0x..)"
          className="mb-[10px]"
          value={address}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          type="input"
        />
        <div className="mb-4">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px] text-left mt-3">
            Tokens
          </div>
          {tokenRows(tokens)}
        </div>
        <div className="mb-4">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px] text-left mt-3">
            Rewards Received
          </div>
          {tokenRows([receiveToken])}
        </div>
        <div className="mb-4">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px] text-left mt-3">
            Pending Rewards
          </div>
          {tokenRows([pendingToken])}
        </div>

        <div className="flex flex-wrap items-start justify-center sm:flex-nowrap">
          <PrimaryButton
            className="mb-[20px] w-full mx-0 sm:mx-2 h-[60px]"
            onClick={handleClaim}
            disabled={
              selectedAddress?.trim() !== user?.attributes?.accounts?.[0] ||
              loadingClaim ||
              loadingCompound
            }
          >
            <p className="flex items-center justify-center gap-[10px]">
              {loadingClaim && (
                <Loading color={'white'} width={30} height={30} />
              )}
              <span>Claim</span>
            </p>
          </PrimaryButton>
          <SecondaryButton
            className="mb-[30px] w-full mx-0 sm:mx-2 h-[60px]"
            onClick={handleCompound}
            disabled={
              selectedAddress?.trim() !== user?.attributes?.accounts?.[0] ||
              loadingClaim ||
              loadingCompound
            }
          >
            <p className="flex items-center justify-center gap-[10px]">
              {loadingCompound && (
                <Loading color={'white'} width={30} height={30} />
              )}
              <span>Compound</span>
            </p>
          </SecondaryButton>
        </div>
      </Panel>
      <div className="w-full sm:w-[50%] mx-0 sm:mx-4 flex flex-col  max-w-[900px]">
        <Panel className="mb-[20px]">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            How To Get Rewards
          </div>
          <div className="text-[14px] mb-[10px] ">
            Rewards are airdropped to all holders of Caash token. The time it
            takes for the rewards to be sent to holder wallets varies by volume.
            Expect to see rewards every 1-6 hours. You may claim pending rewards
            or compound them.
          </div>
        </Panel>
        <div className="flex flex-col sm:flex-row justify-between mb-[20px]">
          <Panel className="w-full sm:w-[50%]">
            <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
              All-Time Rewards Tracker
            </div>
            <div className="flex items-center justity-center">
              <img
                className="w-[28px] h-[28px] mr-[10px] object-contain "
                src={tokens[1].imageUrl}
              />
              <div className="flex flex-col items-start justify-center">
                <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                  <NumberFormat
                    thousandSeparator
                    value={rewardTracker ?? 0}
                    displayType="text"
                    decimalScale={7}
                  />{' '}
                  {tokens[1].name}
                </div>
                <div className="font-[12px]">
                  $
                  <NumberFormat
                    thousandSeparator
                    value={rewardTracker * pendingToken?.price ?? 0}
                    displayType="text"
                    decimalScale={DECIMALS}
                  />
                </div>
              </div>
            </div>
          </Panel>
          <div
            className="w-full sm:w-[50%] flex flex-col items-center justify-center text-center cursor-pointer p-[20px]"
            onClick={addTokenToWallet}
          >
            <img
              className="w-[60px] mb-[20px] object-contain"
              src="/assets/metamask-icon.png"
            />
            <div className="font-bold">Add BTC to Wallet</div>
          </div>
        </div>
        <div>
          *Manually claiming rewards incurs a gas fee determined by BSC.
        </div>
      </div>
    </div>
  )
}
Rewards.Layout = DefaultLayout
Rewards.LayoutProps = {
  title: 'Rewards',
}

export default Rewards
