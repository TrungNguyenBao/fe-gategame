import { useEffect, useRef, useState } from 'react'
import { FaOutdent, FaBitcoin } from 'react-icons/fa'
import ConnectWalletModal from '../../../components/ConnectWalletModal'
import { Button } from '../../../components/shared/form/button'
import { useMoralis } from 'react-moralis'
import { shortenAddress } from '../../../lib/helpers/utils'
import AccountModal from '../../../components/AccountModal'
import { CASH_ADDRESS, COW_ADDRESS } from '../../../constants'
import Moralis from 'moralis'

const DECIMALS = 5

export function Header({ ...props }) {
  const [theme, setTheme] = useState(null)
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false)
  const [openAccountModal, setOpenAccountModal] = useState(false)
  const [cowPrice, setCowPrice] = useState('0')
  const [cashPrice, setCashPrice] = useState('0')
  const { logout, isAuthenticated, user } = useMoralis()
  var ref = useRef(undefined)

  const options = {
    delay: 10000,
  }

  async function loadCashPrice() {
    const cashPrice = await Moralis.Web3API.token.getTokenPrice({
      address: CASH_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setCashPrice(cashPrice.usdPrice.toFixed(DECIMALS))
  }

  async function loadCowPrice() {
    const cowPrice = await Moralis.Web3API.token.getTokenPrice({
      address: COW_ADDRESS,
      chain: 'bsc',
      exchange: 'PancakeSwapv2',
    })
    setCowPrice(cowPrice.usdPrice.toFixed(DECIMALS))
  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      loadCashPrice()
      loadCowPrice()
    }, 500)
    let interval = setInterval(() => {
      loadCashPrice()
      loadCowPrice()
    }, 20000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeOut)
    }
  }, [])

  useEffect(() => {
    setTheme(
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    )
  }, [typeof window !== 'undefined'])

  return (
    <>
      <div className="fixed backdrop-blur-lg top-0 z-10 border-b dark:border-[#292929] bg-opacity-60 dark:bg-opacity-50 w-full h-18 dark:bg-[#1a1a1a] bg-white px-2 md:px-[15px] flex items-center justify-between shadow">
        <div className="flex items-center justify-start">
          <i
            className={`text-[24px] cursor-pointer text-gray-700 dark:text-white transition-all duration-300 transform ${
              props.isOpenMenu ? 'rotate-90' : 'rotate-0'
            }`}
            onClick={() => props?.openMenu()}
            style={{ transform: props.isOpenMenu ? 'rotate(180deg)' : '' }}
          >
            <FaOutdent />
          </i>
          <img
            src={
              theme == 'light'
                ? '/assets/logo-black.png'
                : '/assets/logo-white.png'
            }
            alt=""
            className="ml-6 w-28"
          />
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="items-center justify-center hidden font-sans gap-x-2 md:flex">
            <img src="/assets/cow.png" alt="cow" className="w-8 rounded-full" />
            <span className="font-semibold text-[18px] dark:text-white">
              ${cowPrice}
            </span>
          </div>
          <div className="items-center justify-center hidden font-sans gap-x-2 md:flex">
            <img
              src="/assets/caash.png"
              alt="caash"
              className="w-8 rounded-full"
            />
            <span className="font-semibold text-[18px] dark:text-white">
              ${cashPrice}
            </span>
          </div>
          {isAuthenticated && user?.attributes?.accounts?.[0] ? (
            <Button
              primary
              outline={true}
              className="flex p-[1.5px] font-bold border-0 bg-gradient-to-tr from-pink to-indigo-600 hover:to-pink-600 hover:from-indigo-900 rounded-[12px] transition-all w-36 h-10 duration-300 text-xs"
              onClick={() => setOpenAccountModal(true)}
            >
              <div className="dark:bg-black bg-white w-full h-full rounded-[12px] flex dark:text-white text-gray-700 text-center justify-center items-center">
                {shortenAddress(user?.attributes?.accounts?.[0])}
              </div>
            </Button>
          ) : (
            <Button
              primary
              outline={true}
              className="flex p-[1.5px] font-bold border-0 bg-gradient-to-tr from-pink to-indigo-600 hover:to-pink-600 hover:from-indigo-900 rounded-[12px] transition-all w-36 h-10 duration-300 text-xs"
              onClick={() => setOpenConnectWalletModal(true)}
            >
              <div className="dark:bg-black bg-white w-full h-full rounded-[12px] flex dark:text-white text-gray-700 text-center justify-center items-center">
                CONNECT WALLET
              </div>
            </Button>
          )}
        </div>
      </div>
      <ConnectWalletModal
        isOpen={openConnectWalletModal}
        onClose={() => setOpenConnectWalletModal(false)}
      />
      <AccountModal
        isOpen={openAccountModal}
        onClose={() => setOpenAccountModal(false)}
        address={isAuthenticated && user?.attributes?.accounts?.[0]}
        logout={() => {
          logout()
          setOpenAccountModal(false)
        }}
      />
    </>
  )
}
