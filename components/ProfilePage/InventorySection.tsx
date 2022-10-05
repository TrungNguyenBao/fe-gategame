import React from 'react'
import { ButtonPrimary } from '../Common/Button'

const InventorySection: React.FC = () => {
  return (
    <section className="bg-[#121212] rounded-lg xxs:mb-8 lg:mb-14">
      <header className='p-5 border-b-[1px] border-[#202020]'>
        <h2 className='text-18 font-semibold leading-tight'>Inventory</h2>
      </header>
      <div className="p-5 text-center">
        <figure className='mb-4 text-center'>
          <img className='inline-block' src="/images/icon/nft-now.svg" alt="title" />
        </figure>
        <p className="mb-4">You haven’t own any NFTs yet</p>
        <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-14 leading-[40px] px-5">
          Explore and Buy NFTs now
        </ButtonPrimary>
      </div>
    </section>
  )
}

export default InventorySection
