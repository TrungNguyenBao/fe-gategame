import { getHomeSliders, getGameGenres } from 'lib/services'
import { createContext, useContext } from 'react'
import HomePage from '../components/HomePage'
import { DefaultLayout } from '../layouts/default-layout/default-layout'

const HomePageContext = createContext({})
export const useHomePageContext = () => useContext(HomePageContext)

export default function Page({ sliders, genres }) {
    return <HomePageContext.Provider value={{ sliders, genres }}>
        <HomePage />
    </HomePageContext.Provider>
}

Page.Layout = DefaultLayout
Page.LayoutProps = {
    title: 'Gate Game',
}

export async function getStaticProps() {
    const [
        dataSliders,
        dataGameGenres,
    ] = await Promise.all([
        getHomeSliders(),
        getGameGenres(),
    ]);

    const sliders = dataSliders?.Items || [];
    const genres = dataGameGenres || {};

    return {
        props: {
            sliders,
            genres,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}