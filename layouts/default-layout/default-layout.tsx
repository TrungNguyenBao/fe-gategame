import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Slideout } from '../../components/shared/dialog/slideout'
import useScreen from '../../lib/hooks/useScreen'
import { DefaultHead } from '../default-head'
import { Footer } from './components/footer'
import { Header } from './components/header'
import Sidebar from './components/sidebar'
import { useMoralis } from 'react-moralis'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setupNetwork } from '../../requests'
import { CHAIN_ID_HEX } from '../../constants'

declare global {
  interface Window {
    ethereum: any
  }
}

export function DefaultLayout({ ...props }) {
  const screen = useScreen('md')
  const { logout, user, chainId, isAuthenticated, enableWeb3 } = useMoralis()
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    if (chainId && chainId !== CHAIN_ID_HEX && user) {
      // 0x61 testnet
      toast.error('Please switch to Binance Smart Chain Wallet!')
      if (user) logout()

      const switchNetwork = async () => {
        if (chainId) {
          await setupNetwork(chainId)
        }
      }

      switchNetwork()
    }
  }, [user, chainId])

  useEffect(() => {
    if (isAuthenticated && user) {
      enableWeb3()
    }
  }, [isAuthenticated, user])
  return (
    <div className="w-full dark:bg-[#101111]">
      <DefaultHead />
      <NextSeo defaultTitle={'Caash'} title={props.title ? props.title : ''} />
      <Header
        openMenu={() => {
          setOpenMenu(!openMenu)
        }}
        isOpenMenu={openMenu}
      />
      <div className="flex pt-14 w-full relative min-h-screen">
        {screen ? (
          <Sidebar
            openMenu={() => {
              setOpenMenu(false)
            }}
            isOpenMenu={openMenu}
          />
        ) : (
          <Slideout
            isOpen={openMenu}
            onClose={() => setOpenMenu(false)}
            placement="left"
            maxWidth="193px"
            style={{ marginTop: '72px' }}
          >
            <Sidebar
              openMenu={() => {
                setOpenMenu(true)
              }}
              isOpenMenu={openMenu}
            />
          </Slideout>
        )}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 dark:bg-[#101111] dark:text-white ${
            !openMenu ? 'md:pl-48' : 'md:pl-14'
          } `}
        >
          <div className="p-6 min-h-screen">{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
