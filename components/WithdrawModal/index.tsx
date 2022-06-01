import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useState } from 'react'
import { ButtonPrimary } from '../Common/Button'
import CustomInput from '../shared/custom-input'

interface WithdrawModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
}
const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
}: WithdrawModalProps) => {
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')

  const handleConfirm = () => {
    console.log(amount, address)
    onClose()
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      slideFromBottom="none"
      wrapperClass="fixed w-full h-screen top-0 left-0 z-100 flex flex-col items-center overflow-y-scroll py-20 no-scrollbar backdrop-blur"
    >
      <Panel className="w-[498px] sm:w-[400px] xxs:w-[320px] dark:bg-[#121212]">
        <div className="flex justify-between items-center p-[16px] text-white ">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white">
            <h5>Deposit BUSD</h5>
          </div>
          <AiOutlineClose
            className="text-white cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr />
        <div className="p-[20px] flex flex-col text-white">
          <span>Withdraw Options</span>
          <span className="my-[16px] text-[#ffffff78]">Balance: 0 BUSD</span>
          <div className="flex flex-row items-center">
            <span>Amount:</span>
            <CustomInput
              className="mx-[10px] w-[100px] p-[5px] rounded-[4px] text-right"
              value={amount}
              onChange={(e) => {
                setAmount(e)
              }}
            />
            <span>BUSD</span>
          </div>
          <div className="flex flex-row items-center mt-[15px]">
            <span>Wallet Address:</span>
            <CustomInput
              type="input"
              className="mx-[10px] w-[200px] p-[5px] rounded-[4px]"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />
          </div>
        </div>
        <hr />
        <ButtonPrimary
          className="mt-[10px] w-[100%] bg-[#006dff] hover:bg-[#0a85ed] text-white text-[16px] leading-[24px] px-[40px] py-[11px]"
          onClick={handleConfirm}
        >
          CONFIRM
        </ButtonPrimary>
      </Panel>
    </Dialog>
  )
}
export default WithdrawModal
