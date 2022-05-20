import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '../shared/form/button'
import { BiLinkExternal, BiCopy } from 'react-icons/bi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react'
import Toast from '../shared/toast'

interface LoginModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
  logout: () => void
}
const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  logout,
}: LoginModalProps) => {
  const [openToast, setOpenToast] = useState(false)
  const handleCopy = () => {
    setOpenToast(true)
    setTimeout(() => setOpenToast(false), 2000)
  }
  return (
    <Dialog isOpen={isOpen} onClose={onClose} slideFromBottom="none">
      <Panel className="w-[190vw] sm:w-[700px]">
        <div className="flex justify-between items-center pb-[12px] px-[6px]">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white">
            Your Wallet
          </div>
          <AiOutlineClose
            className="text-pink-400 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr />
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
        </ul>
        <div className="mt-[24px] ">
          <div className="w-1/2">
            <img src="/images/icon/bg_login.png" />
          </div>
          <div className="w-1/2"></div>
        </div>
      </Panel>
    </Dialog>
  )
}
export default LoginModal
