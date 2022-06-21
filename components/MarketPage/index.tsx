import { Title2 } from 'components/Common/Title'
import ListProducts from './ListProducts'
import MarketHeader from './MarketHeader'

const MarketPage = () => {
  return (
    <div className="container container mx-auto pt-10 pb-16">
      <MarketHeader />
      <ListProducts />
    </div>
  )
}

export default MarketPage
