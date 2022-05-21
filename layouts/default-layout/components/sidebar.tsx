import { useRouter } from 'next/router'
import {
  Children,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { RiLoginBoxLine, RiSettings3Line, RiUser2Line } from 'react-icons/ri'
import { BsLightningFill } from 'react-icons/bs'
import { GiOrganigram } from 'react-icons/gi'

import { Footer } from './footer'
import { Button } from '../../../components/shared/form/button'
import { VscAccount } from "react-icons/vsc";
import {
  FaHome,
  FaAngleDown,
  FaReadme,
  FaGamepad,
} from 'react-icons/fa'
import { Switch } from '@headlessui/react'
import useScreen from '../../../lib/hooks/useScreen'
import Link from 'next/link'
import LoginModal from '../../../components/Login'
import { BiLogIn } from 'react-icons/bi'

interface PropsType extends ReactProps {}
export default function Sidebar({ ...props }) {
  const [theme, setTheme] = useState(null)
  const [currentIndexMenu, setCurrentIndexMenu] = useState(0)

  const screen = useScreen('md')
  const { isOpenMenu, onCloseLogin, onCloseMenu } = props
  var mobile = false
  if (isOpenMenu) {
    if (!screen) {
      mobile = true
    } else {
      mobile = false
    }
  } else {
    mobile = true
  }
  useEffect(() => {
    setTheme(
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    )
  }, [theme])
  const [menus, setMenus] = useState<any[]>(SIDEBAR_MENUS)
  const router = useRouter()

  const toggleMenu = (index: any) => {
    menus[index].isOpen = !menus[index].isOpen
    setMenus([...menus])
  }

  const handleDarkMode = (t: string) => {
    if (typeof window != 'undefined') {
      window.localStorage.setItem('theme', t)
      window.location.reload()
    }
  }

  const handleClickMenu = (index: number) => () => {
    if (currentIndexMenu !== index) {
      setCurrentIndexMenu(index)
    } else {
      setCurrentIndexMenu(0)
    }
    onCloseMenu()
  }

  const handleClickMenuLogin = useCallback(() => {
    onCloseLogin()
    onCloseMenu()
  }, [])

  useEffect(() => {
    menus?.forEach((menu) => {
      if (router.pathname.includes(menu.path)) menu.isOpen = true
    })
    setMenus([...menus])
  }, [])

  return (
    <>
      <div
        className={`bg-white dark:bg-[#101111] bg-opacity-80 shadow md:fixed top-[72px] flex flex-col border-r dark:border-[#292929]
          ${mobile ? 'w-48' : 'w-14'} transition-all duration-300
        `}
        style={{ height: 'calc(100vh - 72px)' }}
      >
        <div className="flex-1 pb-3 overflow-auto scrollbar-custom">
          {menus?.map((menu, index) => (
            <div className="mb-2" key={index}>
              {menu?.submenus.map((submenu: any, index: any) => {
                const children = submenu?.children
                return (
                  <Fragment key={index}>
                    <Button
                      key={index}
                      onClick={handleClickMenu(index)}
                      // primary={router.pathname == submenu.path}
                      className={`bg-white dark:bg-[#101111] w-full pl-6 py-7 justify-start font-normal rounded-none dark:hover:bg-black 
                    ${
                      router.pathname == submenu.path
                        ? 'text-[#0a94f2]'
                        : 'hover:bg-gray-100 text-gray-800 dark:text-white'
                    }`}
                      style={{ paddingLeft: !mobile ? '15px' : '' }}
                      icon={submenu.icon}
                      iconClassName={'text-[20px] mr-2'}
                      href={submenu.path}
                      text={
                        mobile ? (
                          <div className="flex items-center justify-between font-semibold">
                            <span>{submenu.title}</span>
                            <i
                              className={` duration-300 transform transition-all ${
                                !(children?.length > 0) && 'hidden'
                              }
                        ${
                          children?.length > 0 &&
                          (currentIndexMenu !== index
                            ? 'rotate-00'
                            : 'rotate-180')
                        }`}
                            >
                              <FaAngleDown />
                            </i>
                          </div>
                        ) : (
                          ''
                        )
                      }
                    ></Button>
                    {currentIndexMenu === index &&
                      children?.map((item: any) => {
                        return (
                          <Button
                            key={index}
                            // primary={router.pathname == submenu.path}
                            className={` bg-gray-50  dark:bg-[#252525] w-full pl-8 py-7 justify-start font-normal rounded-none dark:hover:bg-black  ${
                              router.pathname == item.path
                                ? 'text-pink-400'
                                : 'hover:bg-gray-100 text-gray-800 dark:text-white'
                            }`}
                            style={{ paddingLeft: !mobile ? '30px' : '' }}
                            iconClassName={'text-[20px] mr-2'}
                            text={
                              mobile ? (
                                <div className="flex items-center font-semibold">
                                  <span>{item.title}</span>
                                </div>
                              ) : (
                                ''
                              )
                            }
                          ></Button>
                        )
                      })}
                  </Fragment>
                )
              })}
              <Button
                onClick={() => handleClickMenuLogin()}
                className={`bg-white dark:bg-[#101111] w-full pl-6 py-7 justify-start font-normal rounded-none dark:hover:bg-black `}
                style={{ paddingLeft: !mobile ? '15px' : '' }}
                icon={<RiLoginBoxLine />}
                iconClassName={'text-[20px] mr-2'}
                text={
                  <div className="flex items-center font-semibold">
                    <span>{'Sign In'}</span>
                  </div>
                }
              ></Button>
              <Button
                onClick={() => handleClickMenuLogin()}
                className={`bg-white dark:bg-[#101111] w-full pl-6 py-7 justify-start font-normal rounded-none dark:hover:bg-black `}
                style={{ paddingLeft: !mobile ? '15px' : '' }}
                icon={<VscAccount />}
                iconClassName={'text-[20px] mr-2'}
                text={
                  <div className="flex items-center font-semibold">
                    <span>{'Register'}</span>
                  </div>
                }
              ></Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const SOCIAL_ICON = [
  {
    icon: '/assets/telegram.png',
    path: 'https://t.me/caash_io',
  },
  {
    icon: '/assets/youtube.png',
    path: 'https://www.youtube.com/channel/UCEpRseOyM-d5W6yy5_5Gcig',
  },
  {
    icon: '/assets/instagram.png',
    path: 'https://www.instagram.com/caashdao/',
  },
  {
    icon: '/assets/reddit.png',
    path: 'https://www.reddit.com/r/caash',
  },
  {
    icon: '/assets/discord.png',
    path: 'https://discord.gg/caash',
  },
  {
    icon: '/assets/twitter.png',
    path: 'https://twitter.com/CaashDAO',
  },
]

export const SIDEBAR_MENUS = [
  {
    submenus: [
      {
        title: 'Home',
        path: '/',
        icon: <FaHome />,
      },
      {
        title: 'Games',
        path: '/games',
        icon: <FaGamepad />,
      },
    ],
  },
]
