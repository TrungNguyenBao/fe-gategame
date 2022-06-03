import axios from "axios";

const API_URL = process.env.API_URL || "http://52.77.251.127"

export const getApiUrl = (path: string) => `${API_URL}${path}`

//#region : Homepage
export const getHomeSliders = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/sliders'))
    return response.data;
}

export const getGameGenres = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/game-genres'))
    return response.data;
}

export const getTopBlockchainGames = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/top-blockchain-games?page=1&limit=1&BlockchainId&GenreId&PlatformId&playToEarn&is_nft&freeToPlay&Status&new='))
    return response.data;
}

export const getItems = async (tab: string) => {
    const response = await axios.get<any>(getApiUrl(`/api/home/items?tab=${tab}`))
    return response.data;
}

export const getHotItems = async () => {
    return await getItems('hotItems')
}
export const getBestSellersItems = async () => {
    return await getItems('bestSellers')
}
export const getNewOnBoardItems = async () => {
    return await getItems('newOnBoard')
}
export const getTopReviewersItems = async () => {
    return await getItems('topReviewers')
}
export const getFeaturedItems = async () => {
    return await getItems('featured')
}
export const getHighlyRecommendedItems = async () => {
    return await getItems('highlyRecommended')
}
export const getSlideWinterEventItems = async () => {
    return await getItems('slideWinterEvent')
}
export const getIncomingItems = async () => {
    return await getItems('incoming')
}
export const getRecentUpdateItems = async () => {
    return await getItems('recentUpdate')
}
export const getGiftCodeItems = async () => {
    return await getItems('giftCode')
}
export const getBrowseGameGateItems = async () => {
    return await getItems('browseGameGate')
}
export const getTheCommunityRecommendsItems = async () => {
    return await getItems('theCommunityRecommends')
}
export const getTheCommunityReviewItems = async () => {
    return await getItems('theCommunityReview')
}
//#endregion: Homepage