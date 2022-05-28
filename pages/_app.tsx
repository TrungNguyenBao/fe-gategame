import '../styles/style.scss'
import { ReactElement, ReactNode, useEffect } from 'react'
import { Fragment } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AlertProvider } from '../lib/providers/alert-dialog'
import { ToastProvider } from '../lib/providers/toast-provider'
import 'swiper/css'
import 'swiper/css/pagination'

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
  return (
    <>
      <DefaultSeo {...SEO} />
        <ToastProvider>
          <AlertProvider>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ToastProvider>
    </>
  )
}
