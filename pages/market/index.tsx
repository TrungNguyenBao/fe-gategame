import MarketPage from 'components/MarketPage'
import { DefaultLayout } from 'layouts/default-layout/default-layout'
import { MarketPageContext } from 'lib/providers/marketPage'
import { getHighlyRecommendedItems } from 'lib/services'

export default function Market(props: { highlyRecommendedItems: Array<any> }) {
  const highlyRecommendedItems: Array<any> = props.highlyRecommendedItems
  return (
    <MarketPageContext.Provider
      value={{
        highlyRecommendedItems,
      }}
    >
      <MarketPage />
    </MarketPageContext.Provider>
  )
}
Market.Layout = DefaultLayout
Market.LayoutProps = {
  title: 'Market',
}

export async function getStaticProps(ctx: any) {
  const [dataHighlyRecommendedItems] = await Promise.all([
    getHighlyRecommendedItems(),
  ])
  const highlyRecommendedItems = dataHighlyRecommendedItems.Items || []

  return {
    props: {
      highlyRecommendedItems,
    },
    revalidate: 1,
  }
}
