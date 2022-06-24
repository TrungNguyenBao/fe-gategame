import GgSdkPage from 'components/GgSdkPage'
import { DefaultLayout } from 'layouts/default-layout/default-layout'

export default function GgSdk() {
  return <GgSdkPage />
}
GgSdk.Layout = DefaultLayout
GgSdk.LayoutProps = {
  title: 'GG-SDK',
}

export async function getStaticProps(ctx: any) {
  return {
    props: {},
    revalidate: 1,
  }
}
