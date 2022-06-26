import { createContext, useContext } from 'react'

export const MarketPageContext = createContext<{
  highlyRecommendedItems?: Array<any>
}>({})
export const useMarketPageContext = () => useContext(MarketPageContext)
