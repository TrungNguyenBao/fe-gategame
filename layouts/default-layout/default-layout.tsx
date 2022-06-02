import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { Slideout } from '../../components/shared/dialog/slideout'
import useScreen from '../../lib/hooks/useScreen'
import { DefaultHead } from '../default-head'
import { Footer } from './components/footer'
import { Header } from './components/header'
import Sidebar from './components/sidebar'
import 'react-toastify/dist/ReactToastify.css'
import LoginModal from '../../components/Login'
import { useAuth } from '../../lib/providers/auth-provider'

declare global {
  interface Window {
    ethereum: any
  }
}

export function DefaultLayout({ ...props }) {
  const screen = useScreen('md')
  // const { logout, user, chainId, isAuthenticated, enableWeb3 } = useMoralis()
  const [openMenu, setOpenMenu] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  const auth = useAuth()

  useEffect(() => {
    setOpenLogin(false)
  }, [auth.me])

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
            onCloseLogin={() => setOpenLogin(true)}
            onCloseMenu={() => setOpenMenu(false)}
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
              onCloseLogin={() => setOpenLogin(true)}
              onCloseMenu={() => setOpenMenu(false)}
            />
          </Slideout>
        )}
        <LoginModal
          isOpen={openLogin}
          logout={() => {}}
          onClose={() => setOpenLogin(false)}
        />
        <div
          className={`flex-1 flex flex-col transition-all duration-300 dark:bg-[#101111] dark:text-white ${
            !openMenu ? 'md:pl-48' : 'md:pl-14'
          } `}
        >
          <div className="px-32 py-10 xxs:px-[40px] xxs:py-[30px] min-h-screen bg-[#030303]">
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
