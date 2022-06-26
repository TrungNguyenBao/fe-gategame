import { useRouter } from 'next/router'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import {
  Children,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { RiLoginBoxLine, RiSettings3Line, RiUser2Line } from 'react-icons/ri'
import { BsAlignTop, BsBag, BsLightningFill } from 'react-icons/bs'
import { GiOrganigram } from 'react-icons/gi'

import { Footer } from './footer'
import { Button } from '../../../components/shared/form/button'
import { VscAccount } from 'react-icons/vsc'
import {
  FaHome,
  FaAngleDown,
  FaReadme,
  FaGamepad,
  FaUser,
  FaSignOutAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { Switch } from '@headlessui/react'
import useScreen from '../../../lib/hooks/useScreen'
import Link from 'next/link'
import LoginModal from '../../../components/Login'
import { BiLogIn } from 'react-icons/bi'
import { useAuth } from '../../../lib/providers/auth-provider'

interface PropsType extends ReactProps {}
export default function SidebarV2({ ...props }) {
  const [theme, setTheme] = useState(null)
  const [currentIndexMenu, setCurrentIndexMenu] = useState(0)
  const auth = useAuth()

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

  // return (
  //   <div className="sticky top-0 left-0 flex-none">
  //     <Menu
  //       className="h-full bg-white dark:bg-[#101111] bg-opacity-80 shadow  border-r dark:border-[#292929] transition-all duration-300"
  //       defaultSelectedKeys={['1']}
  //       selectedKeys={[router.asPath]}
  //       onSelect={(e) => {
  //         if (e.key.startsWith('/')) {
  //           router.push(e.key)
  //         }
  //       }}
  //       mode="inline"
  //       theme="dark"
  //       inlineCollapsed={isOpenMenu}
  //       items={items}
  //     />
  //   </div>
  // )

  return (
    <div className={`fixed top-[72px]  md:sticky md:top-0 flex-none bg-white dark:bg-[#101111] bg-opacity-80 shadow dark:border-[#292929]  border-r  transition-all duration-300 z-10 ${isOpenMenu?"left-0":"right-full"}`}>
      <div
        className={`flex flex-col
          ${mobile ? 'w-48' : 'w-14'}
        `}
        style={{ height: 'calc(100vh - 72px)' }}
      >
        <div className="flex-1 pb-3 overflow-y-auto overflow-x-hidden scrollbar-custom">
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
              {!auth.me && (
                <>
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
                </>
              )}
            </div>
          ))}
        </div>
        {auth.me && (
          <div className="relative group text-white w-full">
            <a
              className="flex gap-2 items-center w-full"
              onClick={() => {}}
              id="user-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="w-[32px] pl-2">
                <img
                  src={auth.me.AvatarPath}
                  className="-mt-4 rounded-full w-[32px] min-w-[32px]"
                />
              </div>
              <div className="text-14 break-all leading-tight pb-4 pl-2 pr-2">
                <div className="font-semibold mb-1">{auth.me.UserName}</div>
                <div className="text-13">
                  <p>{auth.me.Email}</p>
                </div>
              </div>
            </a>
            <div
              className="hidden group-hover:flex gap-4 min-w-28 absolute bottom-0 bg-gray-700 left-[96%] flex-col p-4 px-6 whitespace-nowrap rounded-xl font-semibold"
              aria-labelledby="user-dropdown"
            >
              <a
                className="text-14 flex items-center gap-2 hover:text-blue-400"
                href="#"
              >
                <FaUser />
                Profile
              </a>
              <a
                onClick={auth.logout}
                className="text-14 flex items-center gap-2 hover:text-blue-400"
                href="#"
              >
                <FaSignOutAlt />
                Sign Out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
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
      {
        title: 'Market',
        path: '/market',
        icon: <BsBag />,
      },
      {
        title: 'GG-SDK',
        path: '/gg-sdk',
        icon: <BsAlignTop />,
      },
    ],
  },
]

const TitleMenu = (props: { text: string; className?: string }) => (
  <div className={props.className || 'ml-5 pr-10'}>{props.text}</div>
)
type MenuItem = Required<MenuProps>['items'][number]
const items: MenuItem[] = [
  {
    key: '/',
    label: <TitleMenu text="Home" />,
    icon: <FaHome size={22} />,
  },
  {
    key: '/games',
    label: <TitleMenu text="Games" />,
    icon: <FaGamepad size={22} />,
  },
  {
    key: '/market',
    label: <TitleMenu text="Market" />,
    icon: <BsBag size={22} />,
  },
  {
    key: '/gg-sdk',
    label: <TitleMenu text="GG-SDK" />,
    icon: <BsAlignTop size={22} />,
  },
  {
    key: 'sigin',
    label: <TitleMenu text="Sigin" />,
    icon: <RiLoginBoxLine size={22} />,
  },
  {
    key: 'register',
    label: <TitleMenu text="Register" />,
    icon: <VscAccount size={22} />,
  },
]?.map((item: MenuItem) => {
  item.className = 'mb-5'
  return item
})
