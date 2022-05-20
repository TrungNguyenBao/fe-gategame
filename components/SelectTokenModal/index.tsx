import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { AiOutlineClose } from 'react-icons/ai'
import { useOneInchTokens } from 'react-moralis'
import { useEffect, useState } from 'react'
import {
  CASH_ADDRESS,
  CASH_TOKEN,
  COW_ADDRESS,
  COW_TOKEN,
} from '../../constants'
import { convertFromWeiToDec } from '../../lib/helpers/utils'
import BigNumber from 'bignumber.js'
interface SelectTokenModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
  ignoreTokens?: Array<any>
  balances: any
  onSelectToken: (token: any) => void
}
const SelectTokenModal: React.FC<SelectTokenModalProps> = ({
  isOpen,
  onClose,
  ignoreTokens,
  balances,
  onSelectToken,
}: SelectTokenModalProps) => {
  const { data }: { data: any } = useOneInchTokens({ chain: 'bsc' })
  const [tokens, setTokens] = useState()
  const [keyword, setKeyword] = useState('')
  const selectToken = (token: any) => {
    onSelectToken(token)
    onCloseDialog()
  }
  const onCloseDialog = () => {
    setKeyword('')
    onClose()
  }
  const initData = () => {
    if (data && data.tokens) {
      let tokens = data.tokens
      // Add CASH token and COW token below WBNB towards top of Token List
      const tokenArray = Object.keys(tokens).map((address) => tokens[address])
      tokenArray.splice(2, 0, CASH_TOKEN)
      tokenArray.splice(3, 0, COW_TOKEN)
      tokens = tokenArray.reduce((obj: any, token) => {
        obj[token.address] = token
        return obj
      }, {})

      return Object.keys(tokens)
        .filter((key) => !ignoreTokens?.includes(key.toLowerCase()))
        .reduce((obj: any, key) => {
          obj[key] = tokens[key]
          return obj
        }, {})
    }
  }

  useEffect(() => {
    setTokens(initData())
  }, [data])

  useEffect(() => {
    let tokens = initData()
    if (tokens) {
      const filteredTokens: any = Object.keys(tokens)
        .filter(
          (key) =>
            key === keyword ||
            tokens[key]?.symbol?.toLowerCase()?.includes(keyword.toLowerCase())
        )
        .reduce((obj: any, key) => {
          obj[key] = tokens[key]
          return obj
        }, {})
      setTokens(filteredTokens)
    }
  }, [keyword, ignoreTokens])

  const renderTokenList = (tokens: any) => {
    const tokenDOM = []
    for (const address in tokens) {
      let token = tokens[address]
      tokenDOM.push(
        <div
          onClick={() => selectToken(token)}
          key={address}
          className="flex justify-between items-center py-[5px] cursor-pointer text-black dark:text-white hover:bg-pink-200 dark:hover:bg-black"
        >
          <div className="flex justify-start items-center px-[20px]">
            <div>
              <img
                src={token.logoURI}
                className="w-[24px] h-[24px] object-contain"
              />
            </div>
            <div className="flex flex-col justify-start items-start ml-[10px]">
              <div className="text-[16px] font-medium leading-[1.5] tracking-[0.03rem] ">
                {token.symbol}
              </div>
              <div className="text-[13px] font-[400] leading-[1.5]">
                {token.name}
              </div>
            </div>
          </div>
          <div className="text-[16px] font-medium ] leading-[1.5] px-[20px]">
            {(balances[address] &&
              new BigNumber(
                convertFromWeiToDec(balances[address].balance, 18)
              ).toFixed(5)) ||
              0}
          </div>
        </div>
      )
    }
    return tokenDOM
  }
  return (
    <Dialog isOpen={isOpen} onClose={onCloseDialog} slideFromBottom="none">
      <Panel className="w-[90vw] sm:w-[400px]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white pb-[12px]">
            Select Token
          </div>
          <AiOutlineClose
            className="text-pink-400 cursor-pointer"
            onClick={onCloseDialog}
          />
        </div>
        <hr />
        <div className="mt-[24px]">
          <div className="">
            <input
              onChange={(event) => setKeyword(event.target.value.trim())}
              placeholder="Search name or paste address"
              className="px-[24px] w-full focus:text-black dark:focus:text-white paragraph-text-light dark:paragraph-text-dark flex items-center h-[48px] rounded-[20px] cursor-pointer bg-[#f5f5f5] dark:bg-[#101111] focus:border-[#f037a5] focus:border-[1px] focus:border-solid"
            />
          </div>
          <div className="flex flex-col mt-[24px] h-[380px] overflow-y-auto w-full scrollbar-custom">
            {renderTokenList(tokens)}
          </div>
          <div className="text-center mx-auto mt-[24px] text-[16px] font-[400] px-[24px] tracking-[0.03em] leadig-[1] cursor-pointer dark:text-white hover:text-[#f037a5] dark:hover:text-[#f037a5]">
            Manage Tokens
          </div>
        </div>
      </Panel>
    </Dialog>
  )
}
export default SelectTokenModal
