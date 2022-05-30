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
    <div className="px-6">
      <div className="px-5 w-100 md:px-12">
        <div className="w-100 h-100 self-center border-t light:bg-[#f3f4f6] dark:bg-[#101111] dark:border-[#292929] text-sm text-gray-400 dark:text-white items-center flex justify-center py-[28px]">
          <div className="grid sm:grid-cols-12 bottom-0 w-full h-100 light:bg-[#f3f4f6] dark:bg-[#101111] items-left justify-left text-sm text-gray-400 dark:text-white">
            <div className="col-span-6 mb-auto md:col-span-3 lg:col-span-2">
              <div>
                <a href="/" className="light:text-black">
                  <img
                    src={
                      theme == 'light'
                        ? '/images/icon/logo.svg'
                        : '/images/icon/logo.svg'
                    }
                    alt="logo"
                    className="w-28"
                  />
                </a>
                <div className="dark:text-[#8a8f98] hover:opacity-70 mt-[20px] text-[14px] w-[100%] mb-4">
                  {/* Building a comprehensive DeFi platform. */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-6 md:col-span-9 lg:col-span-10 md:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col text-left md:text-right">
                <div className="font-bold light:text-black mb-[20px] text-[14px]">
                  Solutions
                </div>
                <a
                  href="https://caash.me/login"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Me
                </a>
                <a
                  href="/swap"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Swap
                </a>
                <a
                  href="/stake"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Stake
                </a>
                <a
                  href="/collection"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  NFTs
                </a>
                <a
                  href="/play"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Play
                </a>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <div className="font-bold mb-[20px] text-[14px]">Help</div>
                <a
                  href="https://docs.caash.io/caash-token"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  What is Caash?
                </a>
                <a
                  href="https://t.me/caash_io"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Ask on Telegram
                </a>
                <a
                  href="https://discord.gg/caash"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Ask on Discord
                </a>
                <a
                  href="https://twitter.com/CaashDAO"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Ask on Twitter
                </a>
                <a
                  href="https://www.reddit.com/r/caash"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Ask on Reddit
                </a>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <div className="font-bold mb-[20px] text-[14px]">Resources</div>
                <a
                  href="https://docs.caash.io/"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Docs
                </a>
                <a
                  href="https://www.dextools.io/app/bsc/pair-explorer/0x15a4051b425720cb0595647854f784e095e6f68e"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Charts
                </a>
                <a
                  href="https://www.youtube.com/channel/UCEpRseOyM-d5W6yy5_5Gcig/videos"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Tutorials
                </a>
                <a
                  href="https://docs.caash.io/roadmap"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Roadmap
                </a>
                <a
                  href="https://docs.caash.io/caash-token"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Tokenomics
                </a>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <div className="font-bold mb-[20px] text-[14px]">Community</div>
                <a
                  href="https://bit.ly/caashvoting"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Vote
                </a>
                <a
                  href="https://bit.ly/caashpartner"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Partner
                </a>
                <a
                  href="https://bscscan.com/token/0xaa25a39d7aa8318e3ebc19d3678917b8bd98a135"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  BscScan
                </a>
                <a
                  href="https://bit.ly/caashrequest"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Request
                </a>
                <a
                  href="#"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Legal
                </a>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <div className="font-bold mb-[20px] text-[14px]">Solutions</div>
                <a
                  href="https://shop.caash.io/"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Shop
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  Nomics
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  DexTools
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  CoinGecko
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="dark:text-[#8a8f98] hover:opacity-70 text-[12px] mb-[5px]"
                >
                  CoinMarketCap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
