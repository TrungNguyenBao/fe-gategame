import React from 'react'
import { ButtonPrimary } from '../Common/Button'

const InventorySection: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] mt-[60px]">
      <div className="flex items-center justify-between px-[30px] py-[16px]">
        <div className="text-[16px] leading-[26px] font-semibold">
          Inventory
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t-[1px] border-solid border-[#202020] pt-[32px] pb-[58px]">
        <img src="/images/icon/nft-now.svg" alt="" />
        <span className="my-[20px] text-[16px] leading-[26px] font-normal">
          You haven’t own any NFTs yet
        </span>
        <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[24px] px-[40px] py-[11px]">
          Explore and Buy NFTs now
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default InventorySection
