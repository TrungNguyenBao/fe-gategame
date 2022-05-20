// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import Panel from '../../components/shared/panel'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import { FaCaretDown } from 'react-icons/fa'
import { MdOutlineSwapVert } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import SlippageModal from '../../components/SlippageModal'
import SelectTokenModal from '../../components/SelectTokenModal'
import {
  CASH_TOKEN,
  BNB_ADDRESS,
  CASH_ADDRESS,
  COW_ADDRESS,
} from '../../constants'
import { useMoralis, useMoralisWeb3Api, useOneInchTokens } from 'react-moralis'
import { convertFromWeiToDec } from '../../lib/helpers/utils'
import Moralis from 'moralis'
import { fetchQuote } from '../../requests'
import BigNumber from 'bignumber.js'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const enum TABS {
  SWAP = 'SWAP',
  LIQUIDITY = 'LIQUIDITY',
}
const NATIVE_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

const Swap = () => {
  const [activeTab, setActiveTab] = useState(TABS.SWAP)
  const [openSlippage, setOpenSlippage] = useState(false)
  const [openSelectTokenIn, setOpenSelectTokenIn] = useState(false)
  const [openSelectTokenOut, setOpenSelectTokenOut] = useState(false)
  const [slippage, setSlippage] = useState(1)
  const [ignoreTokens, setIgnoreTokens] = useState([])
  const [tokenIn, setTokenIn] = useState<any>()
  const [tokenOut, setTokenOut] = useState<any>()
  const [valueTokenIn, setValueTokenIn] = useState('')
  const [valueTokenOut, setValueTokenOut] = useState('')
  const [balances, setBalances] = useState<any>({})
  const Web3Api = useMoralisWeb3Api()
  const { data }: { data: any } = useOneInchTokens({ chain: 'bsc' })
  const { user, isInitialized, isWeb3EnableLoading, isWeb3Enabled } =
    useMoralis()
  const [swapError, setSwapError] = useState('')
  const [isFromAmountInput, setIsFromAmountInput] = useState(true)
  const [dex, setDex] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [isNotEnoughBalance, setIsNotEnoughBalance] = useState(false)
  const router = useRouter()

  const init = async () => {
    await Moralis.initPlugins()
    if (isWeb3EnableLoading && !isWeb3Enabled) {
      await Moralis.enableWeb3()
    }
    const dex = Moralis.Plugins.oneInch
    setDex(dex)
  }
  const onSwap = async () => {
    if (
      swapError.length > 0 ||
      isLoading ||
      isNotEnoughBalance ||
      !valueTokenIn ||
      new BigNumber(valueTokenIn).lt(0)
    ) {
      return
    }
    setIsLoading(true)
    try {
      const res = await dex.hasAllowance({
        chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: tokenIn.address, // The token you want to swap
        fromAddress: user && user?.attributes?.accounts?.[0], // Your wallet address
        amount: Moralis.Units.Token(valueTokenIn, tokenIn.decimals).toString(),
      })
      console.log('allowance', res)
      if (!res) {
        await dex.approve({
          chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
          tokenAddress: tokenIn.address, // The token you want to swap
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
        setIsLoading(false)
      }
      setIsLoading(true)
      let receipt = await dex.swap({
        chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: tokenIn.address, // The token you want to swap
        toTokenAddress: tokenOut.address, // The token you want to receive
        amount: Moralis.Units.Token(valueTokenIn, tokenIn.decimals).toString(),
        fromAddress: user && user?.attributes?.accounts?.[0], // Your wallet address
        slippage: slippage,
      })
      console.log('receipt', receipt)
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
        if (
          slippage < 20 &&
          (tokenIn.address == CASH_ADDRESS || tokenOut.address == CASH_ADDRESS)
        )
          toast.error('Error: Slippage too low.')
        else
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
      await getBalances()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      if (
        slippage < 20 &&
        (tokenIn.address == CASH_ADDRESS || tokenOut.address == CASH_ADDRESS)
      )
        toast.error('Error: Slippage too low.')
      else toast.error(error?.message)
    } finally {
      setIsLoading(false)
    }
  }

  const exchangeToken = async () => {
    let tempTokenIn = tokenIn
    let tempTokenOut = tokenOut
    let tempValueTokenIn = valueTokenIn
    let tempValueTokenOut = valueTokenOut
    setTokenIn(tempTokenOut)
    setTokenOut(tempTokenIn)

    if (isFromAmountInput) {
      setValueTokenOut(tempValueTokenIn)
    } else {
      setValueTokenIn(tempValueTokenOut)
    }
    if (isFromAmountInput) {
      handleValueTokenOutChange(
        tempTokenOut.address,
        tempTokenIn.address,
        tempValueTokenIn
      )
    } else {
      handleValueTokenInChange(
        tempTokenOut.address,
        tempTokenIn.address,
        tempValueTokenOut
      )
    }
    setIsFromAmountInput(!isFromAmountInput)
  }

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

  const setMaxValue = async () => {
    if (balances && tokenIn && balances[tokenIn.address]) {
      handleValueTokenInChange(
        tokenIn.address,
        tokenOut.address,
        new BigNumber(
          Moralis.Units.FromWei(
            balances[tokenIn.address].balance,
            tokenIn.decimals
          )
        ).toFixed(5)
      )
    } else {
      setValueTokenIn('')
      setValueTokenOut('')
    }
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
    setValueTokenOut(value)
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
  }
  const handleValueTokenInChange = async (
    tokenInAddress: string,
    tokenOutAddress: string,
    value: any
  ) => {
    if (!tokenInAddress || !tokenOutAddress) {
      setValueTokenIn('')
      setValueTokenOut('')
      return
    }
    setValueTokenIn(value)
    if (value == 0) {
      setValueTokenOut('')
      return
    }
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
  }
  const handleSelectTokenIn = (token: any) => {
    setTokenIn(token)
    handleValueTokenInChange(token.address, tokenOut.address, valueTokenIn)
  }
  const handleSelectTokenOut = (token: any) => {
    setTokenOut(token)
    handleValueTokenInChange(tokenIn.address, token.address, valueTokenIn)
  }
  useEffect(() => {
    if (data && data.tokens) {
      setTokenIn(data.tokens[NATIVE_ADDRESS])
    }
    setTokenOut(CASH_TOKEN)
  }, [data])

  useEffect(() => {
    if (tokenIn && balances && valueTokenIn) {
      if (!balances[tokenIn.address]) {
        setIsNotEnoughBalance(true)
        setSwapError('Not Enough Balance')
        return
      } else if (
        balances[tokenIn.address] &&
        new BigNumber(balances[tokenIn.address].balance)
          .div(1e18)
          .lt(valueTokenIn)
      ) {
        setIsNotEnoughBalance(true)
        setSwapError('Not Enough Balance')
      } else {
        setIsNotEnoughBalance(false)
        setSwapError('')
      }
    } else {
      setIsNotEnoughBalance(false)
      setSwapError('')
    }
  }, [tokenIn, balances, valueTokenIn, tokenOut, valueTokenOut])

  useEffect(() => {
    if (isInitialized) {
      init()
    }
  }, [isInitialized])
  useEffect(() => {
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

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px]">
      <Panel className="w-full sm:w-[700px] mx-0 sm:mx-4 mb-[20px]">
        <div className="flex justify-between items-center w-full sm:w-[640px] mx-auto">
          <div className="w-max flex justify-between items-center bg-[#eff4f5] dark:bg-[#000] rounded-[16px] font-[600] text-[14px] dark:text-white">
            <div
              className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${
                activeTab === TABS.SWAP && 'secondary-btn text-white'
              }`}
            >
              {TABS.SWAP}
            </div>
            <div
              className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${
                activeTab === TABS.LIQUIDITY && 'secondary-btn text-white'
              }`}
              onClick={() => router.push('/liquidity')}
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
        <div className="flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] h-[283px] sm:h-[175px] w-full sm:w-[640px] mx-auto justify-between">
          <div className="text-black dark:text-white font-[400] ml-[10px] leading-[1.5]">
            From:{' '}
          </div>
          <div className="flex justify-between flex-wrap sm:flex-nowrap">
            <div
              onClick={() => setOpenSelectTokenIn(true)}
              className="flex justify-between items-center w-full sm:w-[244px] h-[75px] hover:bg-[#f5f5f5] dark:hover:bg-black bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0] cursor-pointer"
            >
              <div className="flex justify-start items-center ">
                <div>
                  <img
                    src={tokenIn && tokenIn.logoURI}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="text-[21px] font-bold leading-[1.5] ml-[10px] tracking-[0.03rem]">
                  {tokenIn && tokenIn.symbol}
                </div>
              </div>
              <FaCaretDown className="text-[#f037a5] text-[25px]" />
            </div>
            <div className="flex justify-between items-center w-full sm:w-[340px] h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]">
              <div
                className="flex items-center secondary-btn text-white text-[15px] font-bold px-[10px] h-[36px] w-max tracking-[0.03rem] rounded-[10px] cursor-pointer hover:bg-blue-500"
                onClick={() => setMaxValue()}
              >
                MAX
              </div>
              <div className="w-full">
                <input
                  onChange={(event) => {
                    setIsFromAmountInput(true)
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
                />
              </div>
            </div>
          </div>
          <div className="text-black dark:text-white font-[400] ml-[10px] leading-[1.5]">
            Balance:{' '}
            {(tokenIn &&
              balances[tokenIn.address] &&
              new BigNumber(
                convertFromWeiToDec(balances[tokenIn.address].balance)
              ).toFixed(5)) ||
              0}
          </div>
        </div>
        <div>
          <MdOutlineSwapVert
            onClick={() => exchangeToken()}
            className="text-white primary-btn w-[50px] h-[50px] mx-auto p-[10px] relative my-[-30px] rounded-[99999px] cursor-pointer hover:bg-pink-400"
          />
        </div>

        <div className="flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] h-[283px] sm:h-[175px] w-full sm:w-[640px] mx-auto justify-between">
          <div className="text-black dark:text-white font-[400] ml-[10px] leading-[1.5]">
            To:{' '}
          </div>
          <div className="flex justify-between flex-wrap sm:flex-nowrap">
            <div
              onClick={() => setOpenSelectTokenOut(true)}
              className="flex justify-between items-center w-full sm:w-[244px] h-[75px] hover:bg-[#f5f5f5] dark:hover:bg-black bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0] cursor-pointer"
            >
              <div className="flex justify-start items-center ">
                <div>
                  <img
                    src={tokenOut && tokenOut.logoURI}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="text-[21px] font-bold leading-[1.5] ml-[10px] tracking-[0.03rem]">
                  {tokenOut && tokenOut.symbol}
                </div>
              </div>
              <FaCaretDown className="text-[#f037a5] text-[25px]" />
            </div>
            <div className="flex justify-between items-center w-full sm:w-[340px] h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]">
              <div className="w-full">
                <input
                  onChange={(event) => {
                    setIsFromAmountInput(false)
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
                />
              </div>
            </div>
          </div>
          <div className="text-black dark:text-white font-[400] ml-[10px] leading-[1.5]">
            Balance:{' '}
            {(tokenOut &&
              balances[tokenOut.address] &&
              new BigNumber(
                convertFromWeiToDec(balances[tokenOut.address].balance)
              ).toFixed(5)) ||
              0}
          </div>
        </div>
        <div className="flex justify-between items-center font-bold text-[12px] leading-[1.5] px-[16px]">
          <div>Slippage Tolerance</div>
          <div>{slippage}% </div>
        </div>
        <div
          onClick={() => onSwap()}
          className={`flex items-center justify-center tracking-[0.03rem] font-bold h-[60px] text-[20px] w-full sm:w-[640px] mx-auto secondary-btn rounded-[20px] text-white mt-[10px]  ${
            isLoading ||
            swapError ||
            isNotEnoughBalance ||
            !valueTokenIn ||
            new BigNumber(valueTokenIn).lt(0)
              ? 'cursor-not-allowed opacity-75'
              : 'cursor-pointer  hover:bg-blue-500'
          } `}
        >
          {swapError ? (
            swapError
          ) : isLoading ? (
            <Loading color={'white'} width={40} height={40} />
          ) : (
            'SWAP'
          )}
        </div>
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
    </div>
  )
}
Swap.Layout = DefaultLayout
Swap.LayoutProps = {
  title: 'Swap',
}

export default Swap
