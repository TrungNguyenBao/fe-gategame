import '../styles/style.scss'
import { ReactElement, ReactNode, useEffect } from 'react'
import { Fragment } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AlertProvider } from '../lib/providers/alert-dialog'
import { ToastProvider } from '../lib/providers/toast-provider'
import Moralis from 'moralis'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  const Layout = Component.Layout ? Component.Layout : Fragment
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {}

  if (typeof window !== 'undefined') {
    if (
      window.localStorage.getItem('theme') === 'dark' ||
      !('theme' in window.localStorage)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    // Moralis.start({
    //   serverUrl: 'https://dltmqtpzznap.usemoralis.com:2053/server',
    //   appId: 'b9Xmi7e3bwg2TYmA7OICJyrGwKwhiy17Y0Q7vxFC',
    // })
    Moralis.start({
      serverUrl: 'https://jms66zb8h4zr.moralishost.com:2053/server',
      appId: 'QMLoVdfDAzpL4S4xoRyEtuhKjpO7fsJJLosljwm5',
    })
  }, [])
  return (
    <>
      <DefaultSeo {...SEO} />
      {/* <MoralisProvider
        appId="b9Xmi7e3bwg2TYmA7OICJyrGwKwhiy17Y0Q7vxFC"
        serverUrl="https://dltmqtpzznap.usemoralis.com:2053/server"
      > */}
      <MoralisProvider
        appId="QMLoVdfDAzpL4S4xoRyEtuhKjpO7fsJJLosljwm5"
        serverUrl="https://jms66zb8h4zr.moralishost.com:2053/server"
      >
        <ToastProvider>
          <AlertProvider>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ToastProvider>
      </MoralisProvider>
    </>
  )
}
