import { useState, useEffect } from 'react'
import Panel from '../../components/shared/panel'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import { AiFillSetting } from 'react-icons/ai'
import SlippageModal from '../../components/SlippageModal'
import { useRouter } from 'next/router'
import Web3 from 'web3'
import { FaCaretDown } from 'react-icons/fa'
import SelectTokenModal from '../../components/SelectTokenModal'
import { useMoralis, useMoralisWeb3Api, useOneInchTokens } from 'react-moralis'
import { fetchQuote } from '../../requests'
import BigNumber from 'bignumber.js'
import Moralis from 'moralis'
import { CASH_TOKEN, LIQUIDITY_DECIMALS } from '../../constants'

import exchangeABI from './add/abi.json'
import NumberFormat from '../../components/NumberFormat'
import ConnectWalletModal from '../../components/ConnectWalletModal'
import { Button } from '../../components/shared/form/button'

const enum TABS {
  SWAP = 'SWAP',
  LIQUIDITY = 'LIQUIDITY',
}

const contractAddress = '0xB0322Aa5c546f46754107Ea724716b3544a954FE'
const NATIVE_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

const Liquidity = () => {
  let web3 = new Web3(Web3.givenProvider) as any

  const [activeTab, setActiveTab] = useState(TABS.LIQUIDITY)
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false)

  const [openSlippage, setOpenSlippage] = useState(false)
  const [slippage, setSlippage] = useState(1)
  const [isAdd, setIsAdd] = useState(false)
  const [openSelectTokenIn, setOpenSelectTokenIn] = useState(false)
  const [openSelectTokenOut, setOpenSelectTokenOut] = useState(false)
  const [tokenIn, setTokenIn] = useState<any>()
  const [tokenOut, setTokenOut] = useState<any>()
  const [balances, setBalances] = useState<any>({})

  console.log('balances :>> ', balances)

  const [valueTokenIn, setValueTokenIn] = useState('')
  const [valueTokenOut, setValueTokenOut] = useState('')

  const [ignoreTokens, setIgnoreTokens] = useState([])
  const [swapError, setSwapError] = useState('')

  const [reserve0, setreserve0] = useState() as any
  const [reserve1, setreserve1] = useState() as any

  const [shareOfPool, setShareOfPool] = useState<Number>(0)

  const Web3Api = useMoralisWeb3Api()
  const { data }: { data: any } = useOneInchTokens({ chain: 'bsc' })
  const {
    Moralis,
    isAuthenticated,
    enableWeb3,
    user,
    isInitialized,
    isWeb3EnableLoading,
    isWeb3Enabled,
  } = useMoralis()
  console.log(user)

  const router = useRouter()

  useEffect(() => {
    // console.log('DAAT:', data)

    if (data && data.tokens) {
      setTokenIn(data.tokens[NATIVE_ADDRESS])
    }
    setTokenOut(CASH_TOKEN)
  }, [data])

  useEffect(() => {
    async function getBalances() {
      const options: any = {
        chain: 'bsc',
        address: user && user?.attributes?.accounts?.[0],
      }
      const nativeBalance = await Web3Api.account.getNativeBalance(options)
      const balances: any = {}
      balances[NATIVE_ADDRESS] = Object.assign({}, data.tokens[NATIVE_ADDRESS])
      balances[NATIVE_ADDRESS].balance = nativeBalance.balance

      const tokenBalances = await Web3Api.account.getTokenBalances(options)

      for (let tokenBalance of tokenBalances) {
        balances[tokenBalance.token_address] = Object.assign(
          {},
          data.tokens[tokenBalance.token_address]
        )
        balances[tokenBalance.token_address].balance = tokenBalance.balance
      }
      setBalances(balances)
    }
    if (isInitialized && data && data.tokens && user) {
      getBalances()
    }
  }, [isInitialized, data && data.tokens, user])

  useEffect(() => {
    setIgnoreTokens([
      tokenIn && tokenIn.address?.toLowerCase(),
      tokenOut && tokenOut.address?.toLowerCase(),
    ])
  }, [tokenIn, tokenOut])

  useEffect(() => {
    const getReserves = async () => {
      let contract = new web3.eth.Contract(exchangeABI.abi, contractAddress)
      const { _reserve0, _reserve1 } = (await contract.methods
        .getReserves()
        .call()) as any
      setreserve0(new BigNumber(_reserve0))
      setreserve1(new BigNumber(_reserve1))
    }

    getReserves()
  }, [])

  const handleValueTokenInChange = async (
    tokenInAddress: string,
    tokenOutAddress: string,
    value: string
  ) => {
    if (!tokenInAddress || !tokenOutAddress) {
      setValueTokenIn('')
      setValueTokenOut('')
      return
    }

    const valueBN = new BigNumber(value)
    if (valueBN.toString(10) === 'NaN') {
      setValueTokenIn(value)
      return
    }

    // convert reserve0 from wei to eth
    let _reserve0 = web3.utils.fromWei(reserve0?.toString(10), 'ether')
    let poolShare = Number(
      Number(value) / (Number(value) + Number(_reserve0))
    ).toFixed(5)

    setShareOfPool(Number(poolShare))
    setValueTokenIn(value)

    if (valueBN.eq(new BigNumber(0))) {
      setValueTokenOut('0')
    } else {
      const valueBNInWei = valueBN.times(new BigNumber('1000000000000000000'))
      const valueTokenOutInWei = valueBNInWei.times(reserve0).div(reserve1)
      const valueTokenOut = valueTokenOutInWei.div(
        new BigNumber('1000000000000000000')
      )
      setValueTokenOut(Number(valueTokenOut.toString(10)).toFixed(3))
    }
    /*
    const params = {
      fromTokenAddress: tokenInAddress,
      toTokenAddress: tokenOutAddress,
      amount: Moralis.Units.Token(value, tokenIn.decimals),
      protocols: 'PANCAKESWAP_V2',
    }
    const res = await fetchQuote(params)
    if (res && !res.error) {
      setValueTokenOut(
        new BigNumber(
          Moralis.Units.FromWei(res.toTokenAmount, tokenOut.decimals)
        ).toFixed(5)
      )
    } else {
      setSwapError(res.description)
    }
    */
  }

  const handleValueTokenOutChange = async (
    tokenInAddress: string,
    tokenOutAddress: string,
    value: any
  ) => {
    if (!tokenInAddress || !tokenOutAddress) {
      setValueTokenIn('')
      setValueTokenOut('')
      return
    }

    const valueBN = new BigNumber(value)
    if (valueBN.toString(10) === 'NaN') {
      setValueTokenOut(value)
      return
    }

    //convert reserve1 from wei to eth
    let _reserve1 = web3.utils.fromWei(reserve1?.toString(10), 'ether')
    let poolShare = Number(
      Number(value) / (Number(value) + Number(_reserve1))
    ).toFixed(5)

    setShareOfPool(Number(poolShare))
    setValueTokenOut(value)

    if (valueBN.eq(new BigNumber(0))) {
      setValueTokenIn('0')
    } else {
      const valueBNOutWei = valueBN.times(new BigNumber('1000000000000000000'))
      const valueTokenInOutWei = valueBNOutWei.times(reserve1).div(reserve0)
      const valueTokenIn = valueTokenInOutWei.div(
        new BigNumber('1000000000000000000')
      )
      setValueTokenIn(Number(valueTokenIn.toString(10)).toFixed(13))
    }
    /*
    if (value == 0) return
    const params = {
      fromTokenAddress: tokenInAddress,
      toTokenAddress: tokenOutAddress,
      amount: Moralis.Units.Token(1, tokenIn.decimals),
      protocols: 'PANCAKESWAP_V2',
    }
    const res = await fetchQuote(params)
    if (res && !res.error) {
      const valueTokenIn = new BigNumber(value)
        .div(Moralis.Units.FromWei(res.toTokenAmount, tokenIn.decimals))
        .toNumber()
        .toFixed(5)
      setValueTokenIn(valueTokenIn)
    } else {
      setSwapError(res.description)
    }
    let numR1 = Number(
      Number(value) / (Number(value) + Number(reserve1))
    ).toFixed(5)
    setShareOfPool(Number(numR1) * 100)
    */
  }

  const handleSelectTokenIn = (token: any) => {
    setTokenIn(token)
    handleValueTokenInChange(token.address, tokenOut.address, valueTokenIn)
  }
  const handleSelectTokenOut = (token: any) => {
    setTokenOut(token)
    handleValueTokenInChange(tokenIn.address, token.address, valueTokenIn)
  }

  const [pancakeRouter, setPancakeRouter] = useState() as any
  const [caashV2, setCaashV2] = useState() as any

  const initContract = async () => {
    const _pancakeRouter = await Moralis.Cloud.run('getAbi', {
      name: 'pancake_router',
    })
    setPancakeRouter(_pancakeRouter)

    const _caashV2 = await Moralis.Cloud.run('getAbi', {
      name: 'caash_v2',
    })
    setCaashV2(_caashV2)
  }

  useEffect(() => {
    if (isAuthenticated) {
      initContract()
    }
  }, [isAuthenticated, isWeb3Enabled])

  const addLiquidity = async (
    cashAmount: any,
    cashAmountMin: any,
    bnbAmount: any,
    bnbAmountMin: any,
    deadline: any
  ) => {
    // step 1
    const userAddress = user?.attributes?.accounts?.[0]
    // const d = new Date();
    // const deadline = (d.getTime()/1000 >> 0) + 200;

    let web3 = new Web3(Web3.givenProvider)
    let pancakeRouterContract = new web3.eth.Contract(
      JSON.parse(pancakeRouter.abi),
      pancakeRouter.address
    )
    const caashContract = new web3.eth.Contract(
      JSON.parse(caashV2.abi),
      caashV2.address
    )
    console.log('user add')
    await caashContract.methods
      .approve(pancakeRouter.address, cashAmount)
      .send({ from: userAddress })
    console.log('caashV2.address:', caashV2.address)
    console.log('cashAmount:', cashAmount)
    console.log('cashAmountMin:', cashAmountMin)
    console.log('bnbAmountMin:', bnbAmountMin)
    console.log('useAddress:', userAddress)
    console.log('deadline:', deadline)
    await pancakeRouterContract.methods
      .addLiquidityETH(
        caashV2.address,
        cashAmount,
        cashAmountMin,
        bnbAmountMin,
        userAddress,
        deadline
      )
      .send({
        from: userAddress,
        value: bnbAmount,
      })
  }

  console.log('tokenOut :>> ', tokenOut)
  console.log('tokenIn :>> ', tokenIn)

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px]">
      <Panel className="w-full sm:w-[700px] mx-0 sm:mx-4 mb-[20px]">
        <div className="flex justify-between items-center w-full sm:w-[640px] mx-auto">
          <div className="w-max flex justify-between items-center bg-[#eff4f5] dark:bg-[#000] rounded-[16px] font-[600] text-[14px] dark:text-white">
            <div
              className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${
                activeTab === TABS.SWAP && 'secondary-btn text-white'
              }`}
              onClick={() => router.push('/swap')}
            >
              {TABS.SWAP}
            </div>
            <div
              className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${
                activeTab === TABS.LIQUIDITY && 'secondary-btn text-white'
              }`}
            >
              {TABS.LIQUIDITY}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[15px] mx-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white h-[36px] px-[10px] hover:bg-blue-500">
              BRIDGE
            </div>
            <div
              className="text-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white  h-[36px] px-[10px] hover:bg-blue-500"
              onClick={() => setOpenSlippage(true)}
            >
              <AiFillSetting className="text-[24px]" />
            </div>
          </div>
        </div>

        {!isAdd ? (
          <div className="flex flex-col my-[16px] py-[25px] px-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] w-full sm:w-[640px] mx-auto justify-between text-center">
            <div className="text-[16px] sm:text-[25px] font-bold leading-[1.5]">
              Add liquidity to receive LP tokens
            </div>
            <div
              onClick={() => setIsAdd(!isAdd)}
              className={`flex items-center justify-center tracking-[0.03rem] font-bold h-[36px] px-[20px] text-[16px] mx-auto secondary-btn rounded-[10px] text-white mt-[20px] mb-[20px] cursor-pointer  hover:bg-blue-500`}
            >
              + ADD LIQUIDITY
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px]  w-full sm:w-[640px] mx-auto justify-between">
              <div
                // onClick={() => setOpenSelectTokenIn(true)}
                className="flex cursor-pointer mb-4"
              >
                {tokenIn ? tokenIn.symbol : 'Select a currency'}:{' '}
                <NumberFormat
                  thousandSeparator
                  value={
                    Moralis.Units.FromWei(
                      balances?.[tokenIn?.address]?.balance
                    ) ?? 0
                  }
                  displayType="text"
                  decimalScale={LIQUIDITY_DECIMALS}
                />
                {/* <FaCaretDown className="text-[#f037a5] text-[25px]" /> */}
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <div className="flex justify-between items-center w-full  h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]">
                  <div className="w-full">
                    <NumberFormat
                      onChange={(event: any) => {
                        handleValueTokenInChange(
                          tokenIn.address,
                          tokenOut.address,
                          event.target.value
                        )
                      }}
                      thousandSeparator
                      value={valueTokenIn}
                      className="w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white"
                      placeholder="0.0"
                      step={0.1}
                      decimalScale={LIQUIDITY_DECIMALS}
                      allowNegative={false}
                    />

                    {/* <input
                      onChange={(event) => {
                        handleValueTokenInChange(
                          tokenIn.address,
                          tokenOut.address,
                          event.target.value
                        )
                      }}
                      value={valueTokenIn}
                      className="w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white"
                      placeholder="0.0"
                      step={0.1}
                      type="number"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px]  w-full sm:w-[640px] mx-auto justify-between">
              <div
                // onClick={() => setOpenSelectTokenOut(true)}
                className="flex cursor-pointer mb-4"
              >
                {tokenOut ? tokenOut.symbol : 'Select a currency'}:{' '}
                <NumberFormat
                  thousandSeparator
                  value={
                    Moralis.Units.FromWei(
                      balances?.[tokenOut?.address]?.balance
                    ) ?? 0
                  }
                  displayType="text"
                  decimalScale={LIQUIDITY_DECIMALS}
                />
                {/* <FaCaretDown className="text-[#f037a5] text-[25px]" /> */}
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <div className="flex justify-between items-center w-full  h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]">
                  <div className="w-full">
                    <NumberFormat
                      onChange={(event: any) => {
                        handleValueTokenOutChange(
                          tokenIn.address,
                          tokenOut.address,
                          event.target.value
                        )
                      }}
                      thousandSeparator
                      value={valueTokenOut}
                      className="w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white"
                      placeholder="0.0"
                      step={0.1}
                      decimalScale={LIQUIDITY_DECIMALS}
                      allowNegative={false}
                    />
                    {/* <input
                      onChange={(event) => {
                        handleValueTokenOutChange(
                          tokenIn.address,
                          tokenOut.address,
                          event.target.value
                        )
                      }}
                      value={valueTokenOut}
                      className="w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white"
                      placeholder="0.0"
                      step={0.1}
                      type="number"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px]  w-full sm:w-[640px] mx-auto justify-between">
              <h1 className="border-b-0.5 mb-5">Prices and pool share</h1>
              <div className="flex justify-between">
                <div>
                  <div>{(Number(reserve0) / Number(reserve1)).toFixed(5)}</div>
                  <div>
                    {tokenIn?.symbol} per {tokenOut?.symbol}
                  </div>
                </div>
                <div>
                  <div>{(Number(reserve1) / Number(reserve0)).toFixed(15)}</div>
                  <div>
                    {tokenOut.symbol} per {tokenIn?.symbol}
                  </div>
                </div>
                <div>
                  <div>
                    {shareOfPool <= 0.001
                      ? '< 0.001'
                      : Number(shareOfPool).toFixed(3)}{' '}
                    %
                  </div>
                  <div>Share of Pool</div>
                </div>
              </div>
            </div>
            {user?.attributes?.accounts?.[0] ? (
              <div
                onClick={() => {
                  console.log('SLIP:', slippage)
                  const valueTokenInBN = new BigNumber(valueTokenIn).times(
                    '1000000000000000000'
                  )
                  const valueTokenOutBN = valueTokenInBN
                    .times(reserve0)
                    .dividedToIntegerBy(reserve1)

                  const valueTokenOutMinBN = valueTokenOutBN
                    .times(new BigNumber(1 - slippage / 100.0))
                    .dividedToIntegerBy(1)

                  const d = new Date()
                  const deadline = ((d.getTime() / 1000) >> 0) + 200
                  const slippedValueTokenInBN = valueTokenInBN
                    .times(new BigNumber(1 - slippage / 100.0))
                    .dividedToIntegerBy(1)

                  addLiquidity(
                    valueTokenOutBN.toString(10),
                    valueTokenOutMinBN.toString(10),
                    valueTokenInBN.toString(10),
                    slippedValueTokenInBN.toString(10),
                    deadline
                  )
                }}
                className={`flex items-center justify-center tracking-[0.03rem] font-bold h-[60px] text-[20px] w-full sm:w-[640px] mx-auto secondary-btn rounded-[20px] text-white mt-[10px]`}
              >
                Add Liquidity
              </div>
            ) : (
              <Button
                primary
                outline={true}
                className="m-auto flex p-[1.5px] font-bold border-0 bg-gradient-to-tr from-pink to-indigo-600 hover:to-pink-600 hover:from-indigo-900 rounded-[12px] transition-all w-36 h-10 duration-300 text-xs"
                onClick={() => setOpenConnectWalletModal(true)}
              >
                <div className="dark:bg-black bg-white w-full h-full rounded-[12px] flex dark:text-white text-gray-700 text-center justify-center items-center">
                  CONNECT WALLET
                </div>
              </Button>
            )}
          </div>
        )}
      </Panel>
      <SlippageModal
        slippage={slippage}
        onSetSlippage={setSlippage}
        isOpen={openSlippage}
        onClose={() => setOpenSlippage(false)}
      />
      <SelectTokenModal
        isOpen={openSelectTokenIn}
        onClose={() => setOpenSelectTokenIn(false)}
        ignoreTokens={ignoreTokens}
        onSelectToken={handleSelectTokenIn}
        balances={balances}
      />
      <SelectTokenModal
        isOpen={openSelectTokenOut}
        onClose={() => setOpenSelectTokenOut(false)}
        ignoreTokens={ignoreTokens}
        onSelectToken={handleSelectTokenOut}
        balances={balances}
      />

      <ConnectWalletModal
        isOpen={openConnectWalletModal}
        onClose={() => setOpenConnectWalletModal(false)}
      />
    </div>
  )
}
Liquidity.Layout = DefaultLayout
Liquidity.LayoutProps = {
  title: 'Liquidity',
}

// export default Liquidity
export default () => <></>
