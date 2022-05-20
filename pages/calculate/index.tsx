import CustomInput from '../../components/shared/custom-input'
import Panel from '../../components/shared/panel'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import {
  BITCOIN_ADDRESS,
  DECIMALS,
  DECIMALS_BITCOIN_PRICE,
} from '../../constants'
import { useEffect, useRef, useState } from 'react'
import Web3 from 'web3'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import moment from 'moment'
import { CASH_ADDRESS } from '../../constants/index'
import NumberFormat from '../../components/NumberFormat'

const Calculate = () => {
  var ref = useRef(undefined)
  const [cashPrice, setCashPrice] = useState<any>(0)
  const [caashBalance, setCaashBalance] = useState<any>(10000)
  const [volume, setVolume] = useState<any>(10000000)
  const [caashV2Contract, setCaashV2Contract] = useState<any>()
  const [circulatingSupply, setCirculatingSupply] = useState<any>(0)
  const [marrketCap, setMarrketCap] = useState<any>(0)
  const [tokenRewardsFee, setTokenRewardsFee] = useState<any>(0)
  const [rewardsDaily, setRewardsDaily] = useState<any>(0)
  const [rewardsWeekly, setRewardsWeekly] = useState<any>(0)
  const [rewardsMonthly, setRewardsMonthly] = useState<any>(0)
  const [rewardsYearly, setRewardsYearly] = useState<any>(0)
  const [pancakeSwapFee, setPancakeSwapFee] = useState<any>(0.01)
  const [bitcoinPrice, setBitcoinPrice] = useState<any>(0.01)
  const { Moralis, isInitialized } = useMoralis()
  async function loadCashPrice() {
    const cashPrice = await Moralis.Web3API.token.getTokenPrice({
      address: CASH_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setCashPrice(cashPrice.usdPrice)
  }
  const initContract = async () => {
    const caashV2ContractInfo = await Moralis.Cloud.run('getAbi', {
      name: 'caash_v2',
    })
    let web3 = new Web3(Web3.givenProvider)
    const caashV2Cont = new web3.eth.Contract(
      JSON.parse(caashV2ContractInfo.abi),
      caashV2ContractInfo.address
    )
    setCaashV2Contract({
      contract: caashV2Cont,
      info: caashV2ContractInfo,
    })
  }

  const getTotalSupply = async () => {
    if (caashV2Contract) {
      let totalSupply = await caashV2Contract.contract.methods
        .totalSupply()
        .call()
      setCirculatingSupply(Number(Moralis.Units.FromWei(totalSupply, 18)))
    }
  }
  const getTokenRewardsFee = async () => {
    if (caashV2Contract) {
      let tokenFee = await caashV2Contract.contract.methods
        .tokenRewardsFee()
        .call()
      setTokenRewardsFee(tokenFee)
    }
  }
  useEffect(() => {
    if (caashV2Contract) {
      getTotalSupply()
      getTokenRewardsFee()
    }
  }, [caashV2Contract])
  useEffect(() => {
    if (isInitialized) {
      initContract()
      loadCashPrice()
      loadBitcoinPrice()
    }
  }, [isInitialized])
  async function loadBitcoinPrice() {
    const bitcoinPrice = await Moralis.Web3API.token.getTokenPrice({
      address: BITCOIN_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setBitcoinPrice(Number(bitcoinPrice.usdPrice).toFixed(DECIMALS))
  }
  const token = {
    id: 2,
    name: 'Bitcoin',
    symbol: 'BTC',
    imageUrl: '/assets/btc-token.png',
    price: '54242',
    reward: 0,
    rewardUsd: 0,
  }
  useEffect(() => {
    let reward =
      ((volume * tokenRewardsFee) / 100) *
      (caashBalance / circulatingSupply) *
      (cashPrice / bitcoinPrice) *
      (1 - pancakeSwapFee)
    setMarrketCap(cashPrice * circulatingSupply)
    setRewardsDaily(reward)
    setRewardsWeekly(reward * 7)
    setRewardsMonthly(reward * moment().daysInMonth())
    setRewardsYearly(reward * moment().dayOfYear())
  }, [
    volume,
    cashPrice,
    bitcoinPrice,
    tokenRewardsFee,
    caashBalance,
    circulatingSupply,
    pancakeSwapFee,
  ])

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px]">
      <div className="w-full sm:w-[50%] mx-0 sm:mx-4 mb-[20px] max-w-[800px]">
        <Panel>
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Caash Balance:
          </div>
          <CustomInput
            placeholder="Enter Caash amount.."
            className="mb-[10px]"
            value={caashBalance}
            onChange={async (e) => {
              console.log('object :>> ', typeof e)
              console.log('e :>> ', e)
              setCaashBalance(e)
            }}
          />
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Volume (24 Hours):
          </div>
          <CustomInput
            placeholder="Enter volume amount.."
            className="mb-[10px]"
            value={volume}
            onChange={async (e) => {
              console.log('object :>> ', typeof e)
              console.log('e :>> ', e)
              setVolume(e)
            }}
          />
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Caash Price (USD):
          </div>
          <CustomInput
            placeholder="$0.32"
            className="mb-[10px]"
            value={cashPrice}
            onChange={async (e) => {
              console.log('object :>> ', typeof e)
              console.log('e :>> ', e)
              setCashPrice(e)
            }}
          />
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Market Cap (USD):
          </div>
          <CustomInput
            value={marrketCap}
            placeholder="$2,670,054"
            className="mb-[10px]"
            onChange={async (e) => {
              console.log('object :>> ', typeof e)
              console.log('e :>> ', e)
              setMarrketCap(e)
            }}
          />
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Circulating Supply:
          </div>
          <CustomInput
            placeholder="20,000,000"
            className="mb-[10px]"
            value={circulatingSupply}
            onChange={async (e) => {
              console.log('object :>> ', typeof e)
              console.log('e :>> ', e)
              setCirculatingSupply(e)
            }}
          />
        </Panel>
      </div>

      <div className="w-full sm:w-[50%] mx-0 sm:mx-4 flex flex-col max-w-[800px]">
        <Panel className="mb-[20px]">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Daily Rewards
          </div>

          <div className="flex items-center justify-between" key={token.id}>
            <div className="flex items-center justity-start">
              <img
                className="w-[28px] h-[28px] mr-[10px] object-contain "
                src={token.imageUrl}
              />
              <div className="flex flex-col items-start justify-between">
                <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                  {token.name}
                </div>
                <div className="font-[12px]">
                  $
                  {
                    <NumberFormat
                      thousandSeparator
                      value={bitcoinPrice}
                      displayType="text"
                      decimalScale={DECIMALS_BITCOIN_PRICE}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                <NumberFormat
                  thousandSeparator
                  value={rewardsDaily}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />{' '}
                {token.symbol}
              </div>
              <div className="font-[12px]">
                {' '}
                $
                <NumberFormat
                  thousandSeparator
                  value={rewardsDaily * bitcoinPrice}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />
              </div>
            </div>
          </div>
        </Panel>
        <Panel className="mb-[20px]">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Weekly Rewards
          </div>

          <div className="flex items-center justify-between" key={token.id}>
            <div className="flex items-center justity-start">
              <img
                className="w-[28px] h-[28px] mr-[10px] object-contain "
                src={token.imageUrl}
              />
              <div className="flex flex-col items-start justify-between">
                <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                  {token.name}
                </div>
                <div className="font-[12px]">
                  $
                  {
                    <NumberFormat
                      thousandSeparator
                      value={bitcoinPrice}
                      displayType="text"
                      decimalScale={DECIMALS_BITCOIN_PRICE}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                <NumberFormat
                  thousandSeparator
                  value={rewardsWeekly}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />{' '}
                {token.symbol}
              </div>
              <div className="font-[12px]">
                {' '}
                $
                <NumberFormat
                  thousandSeparator
                  value={rewardsWeekly * bitcoinPrice}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />
              </div>
            </div>
          </div>
        </Panel>
        <Panel className="mb-[20px]">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Monthly Rewards
          </div>

          <div className="flex items-center justify-between" key={token.id}>
            <div className="flex items-center justity-start">
              <img
                className="w-[28px] h-[28px] mr-[10px] object-contain "
                src={token.imageUrl}
              />
              <div className="flex flex-col items-start justify-between">
                <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                  {token.name}
                </div>
                <div className="font-[12px]">
                  $
                  {
                    <NumberFormat
                      thousandSeparator
                      value={bitcoinPrice}
                      displayType="text"
                      decimalScale={DECIMALS_BITCOIN_PRICE}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                <NumberFormat
                  thousandSeparator
                  value={rewardsMonthly}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />{' '}
                {token.symbol}
              </div>
              <div className="font-[12px]">
                $
                <NumberFormat
                  thousandSeparator
                  value={rewardsMonthly * bitcoinPrice}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />
              </div>
            </div>
          </div>
        </Panel>
        <Panel className="mb-[20px]">
          <div className="font-[18px] leading-[30px] font-bold mb-[10px]">
            Yearly Rewards
          </div>

          <div className="flex items-center justify-between" key={token.id}>
            <div className="flex items-center justity-start">
              <img
                className="w-[28px] h-[28px] mr-[10px] object-contain "
                src={token.imageUrl}
              />
              <div className="flex flex-col items-start justify-between">
                <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                  {token.name}
                </div>
                <div className="font-[12px]">
                  $
                  {
                    <NumberFormat
                      thousandSeparator
                      value={bitcoinPrice}
                      displayType="text"
                      decimalScale={DECIMALS_BITCOIN_PRICE}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-[1rem] mb-[3px] leading-[1] font-bold">
                <NumberFormat
                  thousandSeparator
                  value={rewardsYearly}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />{' '}
                {token.symbol}
              </div>
              <div className="font-[12px]">
                $
                <NumberFormat
                  thousandSeparator
                  value={rewardsYearly * bitcoinPrice}
                  displayType="text"
                  decimalScale={DECIMALS_BITCOIN_PRICE}
                />
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  )
}
Calculate.Layout = DefaultLayout
Calculate.LayoutProps = {
  title: 'Rewards',
}

export default Calculate
