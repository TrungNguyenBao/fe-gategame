import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Slideout } from '../../components/shared/dialog/slideout'
import useScreen from '../../lib/hooks/useScreen'
import { DefaultHead } from '../default-head'
import { Footer } from './components/footer'
import { Header } from './components/header'
import Sidebar from './components/sidebar'
import 'react-toastify/dist/ReactToastify.css'
import LoginModal from '../../components/Login'
import { useAuth } from '../../lib/providers/auth-provider'
import SidebarV2 from './components/sidebarv2'

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
    <div className="w-full dark:bg-[#101111] flex flex-col h-[100vh]">
      <DefaultHead />
      <NextSeo defaultTitle={'Caash'} title={props.title ? props.title : ''} />
      <Header
        openMenu={() => {
          setOpenMenu(!openMenu)
        }}
        isOpenMenu={openMenu}
      />
      <div className="flex w-full flex-grow overflow-y-auto">
        <SidebarV2
            openMenu={() => {
              setOpenMenu(false)
            }}
            isOpenMenu={openMenu}
            onCloseLogin={() => setOpenLogin(true)}
            onCloseMenu={() => setOpenMenu(false)}
          />
        {/* {screen ? (
          <SidebarV2
            openMenu={() => {
              setOpenMenu(false)
            }}
            isOpenMenu={openMenu}
            onCloseLogin={() => setOpenLogin(true)}
            onCloseMenu={() => setOpenMenu(false)}
          />
        ) : (
          <SidebarV2
            openMenu={() => {
              setOpenMenu(true)
            }}
            isOpenMenu={openMenu}
            onCloseLogin={() => setOpenLogin(true)}
            onCloseMenu={() => setOpenMenu(false)}
          />
          // <Slideout
          //   isOpen={openMenu}
          //   onClose={() => setOpenMenu(false)}
          //   placement="left"
          //   maxWidth="193px"
          //   style={{ marginTop: '72px' }}
          // >
          //   <Sidebar
          //     openMenu={() => {
          //       setOpenMenu(true)
          //     }}
          //     isOpenMenu={openMenu}
          //     onCloseLogin={() => setOpenLogin(true)}
          //     onCloseMenu={() => setOpenMenu(false)}
          //   />
          // </Slideout>
        )} */}
        <LoginModal
          isOpen={openLogin}
          logout={() => {}}
          onClose={() => setOpenLogin(false)}
        />
        <div className={`flex-grow overflow-x-hidden transition-all duration-300 dark:bg-[#101111] dark:text-white`}>
          <div className="py-10 xxs:py-[30px] min-h-screen bg-[#030303]">
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
