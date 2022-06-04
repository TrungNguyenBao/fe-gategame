import { createContext, useContext } from "react"

export const HomePageContext = createContext<{
    sliders?: Array<any>
    genres?: Array<any>
    hotItems?: Array<any>
    bestSellersItems?: Array<any>
    newOnBoardItems?: Array<any>
    topReviewersItems?: any
    featuredItems?: Array<any>
    highlyRecommendedItems?: Array<any>
    slideWinterEventItems?: any
    incomingItems?: Array<any>
    recentUpdateItems?: any
    giftCodeItems?: any
    browseGameGateItems?: Array<any>
    theCommunityRecommendsItems?: Array<any>
    theCommunityReviewItems?: any
}>({})
export const useHomePageContext = () => useContext(HomePageContext)