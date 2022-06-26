import ListProducts from './ListProducts'
import MarketHeader from './MarketHeader'

const MarketPage = () => {
  return (
    <div className="container container mx-auto pt-10 pb-16 p-2 md:p-5">
      <MarketHeader />
      <ListProducts />
    </div>
  )
}

export default MarketPage
