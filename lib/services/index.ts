import axios from "axios";

const API_URL = process.env.API_URL || "http://52.77.251.127"

export const getApiUrl = (path: string) => `${API_URL}/${path}`

export const getHomeSliders = async () => {
    const response = await axios.get<any>(getApiUrl('/api/home/sliders'))
    return response.data;
}