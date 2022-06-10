import axios from "axios";

const API_URL = process.env.API_URL || "http://52.77.251.127"

const cache: any = {}

setInterval(() => {
    for (let key in cache) {
        delete cache[key]
    }
}, 10 * 60 * 1000)

export const getApiUrl = (path: string, options?: { useProxy: boolean }) => {
    if (options?.useProxy) {
        return path
    }
    return `${API_URL}${path}`
}

//#region : Homepage
export const getHomeSliders = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/sliders'))
    return response.data;
}

export const getGameGenres = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/game-genres'))
    return response.data;
}

export const getTopBlockchainGames = async ({
    page = 1,
    limit = 5,
    BlockchainId = null,
    GenreId = null,
    PlatformId = null,
    playToEarn = null,
    is_nft = null,
    freeToPlay = null,
    Status = null,
    isNew = null,
}: any) => {
    let url = `/api/home/top-blockchain-games?page=${page}&limit=${limit}`

    url = BlockchainId ? `${url}&BlockchainId=${BlockchainId}` : url
    url = GenreId ? `${url}&GenreId=${GenreId}` : url
    url = PlatformId ? `${url}&PlatformId=${PlatformId}` : url
    url = playToEarn ? `${url}&playToEarn=${playToEarn}` : url
    url = is_nft ? `${url}&is_nft=${is_nft}` : url
    url = freeToPlay ? `${url}&freeToPlay=${freeToPlay}` : url
    url = Status ? `${url}&Status=${Status}` : url
    url = isNew ? `${url}&isNew=${isNew}` : url

    if (cache[url]) {
        return cache[url]
    }
    const response = await axios.get<any>(getApiUrl(url, { useProxy: true }))
    cache[url] = response.data
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