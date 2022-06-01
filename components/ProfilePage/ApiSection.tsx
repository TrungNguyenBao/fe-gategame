import React from 'react'
import { Button } from '../shared/form/button'

const ApiSection: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] mt-[60px]">
      <div className="flex items-center justify-between px-[30px] py-[16px]">
        <div className="text-[16px] leading-[26px] font-semibold">API</div>
        <Button className="text-[#006dff] text-[18px] leading-[28px] font-semibold">
          Add API KEY
        </Button>
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
        <div>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
        <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white ">
          Delete
        </button>
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
        <div>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
        <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white ">
          Delete
        </button>
      </div>
    </div>
  )
}
export default ApiSection
