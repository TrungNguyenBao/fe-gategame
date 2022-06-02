import React, { useState } from 'react'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

const OverviewSection: React.FC = () => {
  const [isOpenDepositModal, setIsOpenDepositModal] = useState(false)
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false)

  return (
    <>
      <div className="flex mt-[60px] xxs:flex-col lg:flex-row">
        <div className="flex-1 sm:pr-[15px] xxs:pr-[unset]">
          <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] ">
            <div className="flex items-center justify-between px-[30px] py-[16px]">
              <div className="text-[16px] leading-[26px] font-semibold">
                Wallet Overview
              </div>
            </div>
            <div className="flex xxs:flex-col sm:flex-row items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
              <div className="flex flex-row flex-1 xxs:w-full text-[28px] leading-[40px] font-semibold items-center">
                <span>0</span> &nbsp;
                <img
                  src="/images/icon/binance-usd-busd-logo.png"
                  alt=""
                  className="w-[14px] h-[14px]"
                />
                &nbsp;
                <span className="text-[14px] leading-[20px] font-normal text-[#ffffff78]">
                  BUSD
                </span>
              </div>
              <div className="flex flex-1 xxs:w-full xxs:justify-start xxs:mt-[5px] sm:mt-[unset] sm:justify-end">
                <button
                  className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white mr-[20px]"
                  onClick={() => setIsOpenDepositModal(true)}
                >
                  Deposit
                </button>
                <button
                  className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white"
                  onClick={() => setIsOpenWithdrawModal(true)}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:pl-[15px] xxs:pl-[unset]">
          <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] ">
            <div className="flex items-center justify-between px-[30px] py-[16px]">
              <div className="text-[16px] leading-[26px] font-semibold">
                ACTIVITY
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
              <div className="flex flex-1 flex-col items-center justify-center">
                <img
                  src="/images/icon/ico_no_result.svg"
                  alt=""
                  className="align-middle"
                />
                <div>NO ACTIVITY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DepositModal
        isOpen={isOpenDepositModal}
        onClose={() => setIsOpenDepositModal(false)}
      />

      <WithdrawModal
        isOpen={isOpenWithdrawModal}
        onClose={() => setIsOpenWithdrawModal(false)}
      />
    </>
  )
}

export default OverviewSection
