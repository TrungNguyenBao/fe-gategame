import {
    getHomeSliders,
    getGameGenres,
    getHotItems,
    getBestSellersItems,
    getNewOnBoardItems,
    getTopReviewersItems,
    getFeaturedItems,
    getHighlyRecommendedItems,
    getSlideWinterEventItems,
    getIncomingItems,
    getRecentUpdateItems,
    getGiftCodeItems,
    getBrowseGameGateItems,
    getTheCommunityRecommendsItems,
    getTheCommunityReviewItems
} from 'lib/services'
import { createContext, useContext } from 'react'
import HomePage from '../components/HomePage'
import { DefaultLayout } from '../layouts/default-layout/default-layout'

const HomePageContext = createContext({})
export const useHomePageContext = () => useContext(HomePageContext)

export default function Page({
    sliders,
    genres,
    hotItems,
    bestSellersItems,
    newOnBoardItems,
    topReviewersItems,
    featuredItems,
    highlyRecommendedItems,
    slideWinterEventItems,
    incomingItems,
    recentUpdateItems,
    giftCodeItems,
    browseGameGateItems,
    theCommunityRecommendsItems,
    theCommunityReviewItems,
}) {
    return <HomePageContext.Provider value={{
        sliders,
        genres,
        hotItems,
        bestSellersItems,
        newOnBoardItems,
        topReviewersItems,
        featuredItems,
        highlyRecommendedItems,
        slideWinterEventItems,
        incomingItems,
        recentUpdateItems,
        giftCodeItems,
        browseGameGateItems,
        theCommunityRecommendsItems,
        theCommunityReviewItems,
    }}>
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
        dataHotItems,
        dataBestSellersItems,
        dataNewOnBoardItems,
        dataTopReviewersItems,
        dataFeaturedItems,
        dataHighlyRecommendedItems,
        dataSlideWinterEventItems,
        dataIncomingItems,
        dataRecentUpdateItems,
        dataGiftCodeItems,
        dataBrowseGameGateItems,
        dataTheCommunityRecommendsItems,
        dataTheCommunityReviewItems,
    ] = await Promise.all([
        getHomeSliders(),
        getGameGenres(),
        getHotItems(),
        getBestSellersItems(),
        getNewOnBoardItems(),
        getTopReviewersItems(),
        getFeaturedItems(),
        getHighlyRecommendedItems(),
        getSlideWinterEventItems(),
        getIncomingItems(),
        getRecentUpdateItems(),
        getGiftCodeItems(),
        getBrowseGameGateItems(),
        getTheCommunityRecommendsItems(),
        getTheCommunityReviewItems(),
    ]);

    const sliders = dataSliders?.Items || [];
    const genres = dataGameGenres || {};
    const hotItems = dataHotItems.Items || []
    const bestSellersItems = dataBestSellersItems.Items || []
    const newOnBoardItems = dataNewOnBoardItems.Items || []
    const topReviewersItems = dataTopReviewersItems.Items || []
    const featuredItems = dataFeaturedItems.Items || []
    const highlyRecommendedItems = dataHighlyRecommendedItems.Items || []
    const slideWinterEventItems = dataSlideWinterEventItems.Item || {}
    const incomingItems = dataIncomingItems.Items || []
    const recentUpdateItems = dataRecentUpdateItems.Items || []
    const giftCodeItems = dataGiftCodeItems.Item || {}
    const browseGameGateItems = dataBrowseGameGateItems.Items || []
    const theCommunityRecommendsItems = dataTheCommunityRecommendsItems.Items || []
    const theCommunityReviewItems = dataTheCommunityReviewItems.Review || {}

    return {
        props: {
            sliders,
            genres,
            hotItems,
            bestSellersItems,
            newOnBoardItems,
            topReviewersItems,
            featuredItems,
            highlyRecommendedItems,
            slideWinterEventItems,
            incomingItems,
            recentUpdateItems,
            giftCodeItems,
            browseGameGateItems,
            theCommunityRecommendsItems,
            theCommunityReviewItems,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}