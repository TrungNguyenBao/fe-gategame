import { useEffect, useRef, useState } from 'react'

export function Footer() {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    )
  }, [typeof window !== 'undefined'])

  return (
    <div className="p-[30px]">
      <div className="flex flex-wrap">
            <div className="xxs:w-full lg:w-3/12 py-4">
              <h2 className='xxs:text-center lg:text-left'>
                <a href="/" title='title' className="inline-block">
                  <img src={
                      theme == 'light'
                        ? '/images/icon/logo.svg'
                        : '/images/icon/logo.svg'
                    }
                    alt="logo"
                    className="w-28"
                  />
                </a>
              </h2>
            </div>
            <div className="xxs:w-full lg:w-9/12 flex flex-wrap">
              <div className="xxs:w-6/12 sm:w-4/12 lg:w-3/12 py-4">
                <h4 className="font-bold light:text-black text-[14px]">Help</h4>
                <ul className='mt-3 text-12'>
                  <li className='mb-1'>
                    <a href="https://caash.me/login" className="dark:text-[#8a8f98] hover:opacity-70">What is Caash?</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Ask on Telegram</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Ask on Telegram</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Ask on Discord</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Ask on Twitter</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Ask on Reddit</a>
                  </li>
                </ul>
              </div>
              
              <div className="xxs:w-6/12 sm:w-4/12 lg:w-3/12 py-4">
                <h4 className="font-bold light:text-black text-[14px]">Resources</h4>
                <ul className='mt-3 text-12'>
                  <li className='mb-1'>
                    <a href="https://caash.me/login" className="dark:text-[#8a8f98] hover:opacity-70">Docs</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Charts</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Tutorials</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Roadmap</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Tokenomics</a>
                  </li>
                </ul>
              </div>

              <div className="xxs:w-6/12 sm:w-4/12 lg:w-3/12 py-4">
                <h4 className="font-bold light:text-black text-[14px]">Community</h4>
                <ul className='mt-3 text-12'>
                  <li className='mb-1'>
                    <a href="https://caash.me/login" className="dark:text-[#8a8f98] hover:opacity-70">Vote</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Partner</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">BscScan</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Request</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Legal</a>
                  </li>
                </ul>
              </div>
              
              <div className="xxs:w-6/12 sm:w-4/12 lg:w-3/12 py-4">
                <h4 className="font-bold light:text-black text-[14px]">Solutions</h4>
                <ul className='mt-3 text-12'>
                  <li className='mb-1'>
                    <a href="https://caash.me/login" className="dark:text-[#8a8f98] hover:opacity-70">Shop</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">Nomics</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">DexTools</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">CoinGecko</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">CoinGecko</a>
                  </li>
                  <li className='mb-1'>
                    <a href="/swap" className="dark:text-[#8a8f98] hover:opacity-70">CoinMarketCap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}
