import React from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'

const Stake = () => {
  return (
    <div className="text-center mt-52">
      <p className="pb-4">Coming Soon</p>
      <a
        href="https://staking.caash.io"
        target="_blank"
        className="text-[#f037a5]"
      >
        V1 Staking
      </a>
    </div>
  )
}

Stake.Layout = DefaultLayout
Stake.LayoutProps = {
  title: 'Stake',
}

export default Stake
