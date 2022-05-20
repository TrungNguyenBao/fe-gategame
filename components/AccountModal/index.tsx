import { Dialog } from '../shared/dialog/dialog';
import Panel from '../shared/panel';
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '../shared/form/button';
import { BiLinkExternal, BiCopy } from 'react-icons/bi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react';
import Toast from '../shared/toast';

interface AccountModalModalProps extends ReactProps {
  isOpen: boolean;
  onClose: () => any;
  address: string;
  logout: () => void;
}
const AccountModal: React.FC<AccountModalModalProps> = ({
  isOpen,
  address,
  onClose,
  logout,
}: AccountModalModalProps) => {
  const [openToast, setOpenToast] = useState(false);
  const handleCopy = () => {
    setOpenToast(true);
    setTimeout(() => setOpenToast(false), 2000);
  }
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      slideFromBottom="none"
    >
      <Panel className="w-[90vw] sm:w-[500px]">
        <div className="flex justify-between items-center pb-[12px] px-[6px]">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white">Your Wallet</div>
          <AiOutlineClose className="text-pink-400 cursor-pointer" onClick={onClose} />
        </div>
        <hr />
        <div className="mt-[24px] ">
          <div className="text-black text-[20px] dark:text-white mb-[8px] break-all">{address}</div>
          <div className="flex justify-start items-center paragraph-text-light dark:paragraph-text-dark mb-[30px]">
            <a href={`https://bscscan.com/address/${address}`} target="_blank" className="mr-[20px] flex items-center cursor-pointer hover:underline">View on BscScan <BiLinkExternal className="ml-[4px]" /></a>
            <CopyToClipboard text={address} onCopy={() => handleCopy()}><div className="mr-[20px] flex items-center cursor-pointer">Copy Address <BiCopy className="ml-[4px]" /></div></CopyToClipboard>
          </div>
          <div>
            <Button
              primary
              outline={true}
              className="flex p-[1.5px] font-bold border-0 bg-gradient-to-tr from-pink to-indigo-600 hover:to-pink-600 hover:from-indigo-900 rounded-[20px] transition-all w-36 h-10 duration-300 text-xs m-auto"
              onClick={logout}
            >
              <div className="dark:bg-black bg-white w-full h-full rounded-[20px] flex dark:text-white text-gray-700 text-center justify-center items-center">
                Logout
              </div>
            </Button>
          </div>
        </div>
      </Panel>
      <Toast isOpen={openToast} content="Copied" onClose={() => setOpenToast(false)} />
    </Dialog>
  )
}
export default AccountModal;
