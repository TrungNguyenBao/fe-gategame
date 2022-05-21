import HomePage from '../components/HomePage'
import { DefaultLayout } from '../layouts/default-layout/default-layout'

export default function Page() {
    return <HomePage / >
}

Page.Layout = DefaultLayout
Page.LayoutProps = {
    title: 'Gate Game',
}