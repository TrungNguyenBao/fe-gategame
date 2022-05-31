import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Fragment, ReactElement, ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { AlertProvider } from '../lib/providers/alert-dialog'
import { AuthProvider } from '../lib/providers/auth-provider'
import { ToastProvider } from '../lib/providers/toast-provider'
import SEO from '../next-seo.config'
import '../styles/style.scss'

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
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <ToastProvider>
          <AlertProvider>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ToastProvider>
      </AuthProvider>
    </>
  )
}
