import axios from "axios";

const API_URL = process.env.API_URL || "http://52.77.251.127"

export const getApiUrl = (path: string) => `${API_URL}/${path}`

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
    const response = await axios.get<any>(getApiUrl('/home/top-blockchain-games?page=1&limit=1&BlockchainId&GenreId&PlatformId&playToEarn&is_nft&freeToPlay&Status&new='))
    return response.data;
}

export const getItems = async () => {
    const response = await axios.get<any>(getApiUrl('/home/items?tab=featured'))
    return response.data;
}
//#endregion: Homepage