import React from 'react'
import { Button } from '../shared/form/button'

const ApiSection: React.FC = () => {
  return (
    <section className="flex flex-col bg-[#121212] rounded-lg xxs:mb-8 lg:mb-14">
        <header className='flex items-center justify-between p-5'>
          <h2 className='text-18 font-semibold leading-tight'>API</h2>
          <a href='#' title='title' className="text-[#006dff] font-semibold">Add API KEY</a>
        </header>
        <ul className="relative">
          <li className="flex items-center justify-between border-t-[1px] border-[#202020] px-5 py-2.5">
            <div className='pr-3'>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
            <button className="text-[14px] px-4 border-[1px] rounded border-white leading-[38px]">
              Delete
            </button>
          </li>
          <li className="flex items-center justify-between border-t-[1px] border-[#202020] px-5 py-2.5">
            <div className='pr-3'>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
            <button className="text-[14px] px-4 border-[1px] rounded border-white leading-[38px]">
              Delete
            </button>
          </li>
      </ul>
    </section>
  )
}
export default ApiSection
