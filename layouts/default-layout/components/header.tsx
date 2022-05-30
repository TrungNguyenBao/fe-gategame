import { useEffect, useRef, useState } from 'react'
import { FaOutdent, FaBitcoin } from 'react-icons/fa'
import ConnectWalletModal from '../../../components/ConnectWalletModal'
import { Button } from '../../../components/shared/form/button'
// import { useMoralis } from 'react-moralis'
import { shortenAddress } from '../../../lib/helpers/utils'
import AccountModal from '../../../components/AccountModal'
import { CASH_ADDRESS, COW_ADDRESS } from '../../../constants'
import Moralis from 'moralis'
import Select from 'react-select'

const DECIMALS = 5

export function Header({ ...props }) {
  const [theme, setTheme] = useState(null)
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false)
  const [openAccountModal, setOpenAccountModal] = useState(false)
  const [cowPrice, setCowPrice] = useState('0')
  const [cashPrice, setCashPrice] = useState('0')
  // const { logout, isAuthenticated, user } = useMoralis()
  var ref = useRef(undefined)

  const options = {
    delay: 10000,
  }

  useEffect(() => {
    setTheme(
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    )
  }, [typeof window !== 'undefined'])

  return (
    <>
      <div className="fixed backdrop-blur-lg top-0 z-10 border-b dark:border-[#292929] bg-opacity-100 w-full h-18 dark:bg-[#101111] bg-white px-2 md:px-[15px] flex items-center justify-between shadow">
        <div className="flex items-center justify-start">
          <i
            className={`text-[24px] cursor-pointer text-gray-700 dark:text-white transition-all duration-300 transform ${props.isOpenMenu ? 'rotate-90' : 'rotate-0'
              }`}
            onClick={() => props?.openMenu()}
            style={{ transform: props.isOpenMenu ? 'rotate(180deg)' : '' }}
          >
            <FaOutdent />
          </i>
          <img
            src={
              theme == 'light'
                ? '/images/icon/logo.svg'
                : '/images/icon/logo.svg'
            }
            alt=""
            className="ml-6 w-28"
          />
        </div>
        <div className="flex">
          <form action="https://gategame.io/search.html" id="form-search">
            <div className="flex items-center gap-4 p-2 px-4 bg-grayBg rounded focus:border-2 focus:border-blue-500">
              <img src='/images/icon/search.png' className='w-4 h-4 cursor-pointer opacity-80 transition-opacity hover:opacity-100'/>
              <input type="text" className="w-96 h-auto bg-transparent text-white" name="q" placeholder="Search games..." />
              <a href="#"><i className="far fa-search"></i></a>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          {/* {isAuthenticated && user?.attributes?.accounts?.[0] ? (
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
          ) : ( */}
          <div className=" xl:w-30">
            {/* <Select
              className="my-react-select-container flex-1 bg-transparent"
              classNamePrefix="my-react-select"
              defaultValue={{ value: 0, label: "English" }}
              options={[{ value: 0, label: "English" }, { value: 1, label: "Vietnamese" }]} /> */}
            {/* <select
              className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-white
                bg-black bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="2">English</option>
              <option value="3">VietNamese</option>
            </select> */}
          </div>
          <Button
            primary
            outline={true}
            className="flex p-[1.5px] font-bold border-0 bg-gradient-to-tr bg-[#0a94f2] hover:border-[#fff] rounded-[12px] transition-all w-36 h-10 duration-300 text-xs"
            onClick={() => setOpenConnectWalletModal(true)}
          >
            <div className=" bg-[#0a94f2] w-full h-full rounded-[12px] flex dark:text-white text-gray-700 text-center justify-center items-center">
              CONNECT WALLET
            </div>
          </Button>
          {/* )} */}
        </div>
      </div>
      <ConnectWalletModal
        isOpen={openConnectWalletModal}
        onClose={() => setOpenConnectWalletModal(false)}
      />
      <AccountModal
        isOpen={openAccountModal}
        onClose={() => setOpenAccountModal(false)}
        address={''}
        logout={() => { }}
      />
    </>
  )
}
