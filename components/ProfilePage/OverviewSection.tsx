import React, { useState } from 'react'
import {HiDatabase} from 'react-icons/hi'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

const OverviewSection: React.FC = () => {
  const [isOpenDepositModal, setIsOpenDepositModal] = useState(false)
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false)

  return (
    <>
      <div className="flex flex-wrap xxs:mb-0 lg:mb-14 mx-[-16px]">
        <section className="xxs:w-full lg:w-6/12 px-4 xxs:mb-8 lg:mb-0">
          <div className="bg-[#121212] h-full rounded-lg">
            <header className='p-5'>
              <h2 className='text-18 font-semibold leading-tight'>Wallet Overview</h2>
            </header>
            <ul className="text-14">
              <li className='flex flex-wrap items-center border-t-[1px] border-[#202020] p-5'>
                <div className='xxs:mb-3 md:mb-0 xxs:w-full md:w-8/12'>
                  <label className='block opacity-[0.47] mb-2'>Total GGWP Token</label>
                  <div className='text-28 font-semibold mb-2'>48,999<span className='ml-2 opacity-[0.47] text-14 font-normal'>GGWP</span></div>
                  <div className='opacity-[0.47]'>~0.34998BTC</div>
                </div>
                <div className="xxs:w-full md:w-4/12">
                  <button className="leading-[40px] px-4 border rounded-[5px] border-white mb-3 mr-3" onClick={() => setIsOpenDepositModal(true)}>
                    Deposit
                  </button>
                  <button className="leading-[40px] px-4 border rounded-[5px] border-white mb-3" onClick={() => setIsOpenWithdrawModal(true)}>
                    Withdraw
                  </button>
                </div>
              </li>
              <li className='flex flex-wrap items-center border-t-[1px] border-[#202020] p-5'>
                <div className='xxs:mb-3 md:mb-0 xxs:w-full md:w-8/12'>
                  <label className='block opacity-[0.47] mb-2'>Total GGWP Token</label>
                  <div className='text-28 font-semibold mb-2'>48,999<span className='ml-2 opacity-[0.47] text-14 font-normal'>GGWP</span></div>
                  <div className='opacity-[0.47]'>~0.34998BTC</div>
                </div>
                <div className="xxs:w-full md:w-4/12">
                  <button className="leading-[40px] px-4 border rounded-[5px] border-white mb-3 mr-3" onClick={() => setIsOpenDepositModal(true)}>
                    Deposit
                  </button>
                  <button className="leading-[40px] px-4 border rounded-[5px] border-white mb-3" onClick={() => setIsOpenWithdrawModal(true)}>
                    Withdraw
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="xxs:w-full lg:w-6/12 px-4 xxs:mb-8 lg:mb-0">
          <div className="bg-[#121212] h-full rounded-lg">
            <header className='flex items-center justify-between p-5'>
              <h2 className='text-18 font-semibold leading-tight'>Recent Activities</h2>
              <a href='#' title='title' className="text-[#006dff] font-semibold">View All</a>
            </header>
            <div className="border-t-[1px] border-[#202020]">
              <div className="flex flex-1 flex-col items-center justify-center hidden">
                <img src="/images/icon/ico_no_result.svg" alt="" className="align-middle"/>
                <div>NO ACTIVITY</div>
              </div>
              <ul className='p-5'>
                <li className='relative pl-8 py-3'>
                  <span className='w-6 h-6 flex bg-blue rounded-full justify-center items-center absolute left-0 top-4'>
                    <HiDatabase/>
                  </span>
                  <h3 className='leading-normal text-14'>
                    <a className='inline-block hover:text-blue duration-200' href='#' title='title'>
                      You have earned 1,000 GG from GateGame Launchpad have earned 1,000 GG from GateGame Launchpad
                    </a>
                  </h3>
                  <div className='text-12 opacity-[0.47] leading-tight mt-1'>10:30 Nov 17, 2021</div>
                </li>
                <li className='relative pl-8 py-3'>
                  <span className='w-6 h-6 flex bg-blue rounded-full justify-center items-center absolute left-0 top-4'>
                    <HiDatabase/>
                  </span>
                  <h3 className='leading-normal text-14'>
                    <a className='inline-block hover:text-blue duration-200' href='#' title='title'>
                      You have earned 1,000 GG from GateGame Launchpad have earned 1,000 GG from GateGame Launchpad
                    </a>
                  </h3>
                  <div className='text-12 opacity-[0.47] leading-tight mt-1'>10:30 Nov 17, 2021</div>
                </li>
                <li className='relative pl-8 py-3'>
                  <span className='w-6 h-6 flex bg-blue rounded-full justify-center items-center absolute left-0 top-4'>
                    <HiDatabase/>
                  </span>
                  <h3 className='leading-normal text-14'>
                    <a className='inline-block hover:text-blue duration-200' href='#' title='title'>
                      You have earned 1,000 GG from GateGame Launchpad have earned 1,000 GG from GateGame Launchpad
                    </a>
                  </h3>
                  <div className='text-12 opacity-[0.47] leading-tight mt-1'>10:30 Nov 17, 2021</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
