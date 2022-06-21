import { useHomePageContext } from '../../lib/providers/homepage'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Title2 } from '../Common/Title'
import GameItemFeatured from '../Items/GameFeaturedItem'
import { marketData } from './data'

const MarketHeader: React.FC = () => {
  const featuredItems = marketData.headers
  return (
    <section className="mb-16">
      <Title2>NFT Marketplace</Title2>
      <p className="text-[16px] text-[#fff] font-normal leading-[26px] mt-[5px] mb-[20px]">
        Browse the newest, top selling and discounted Free to Play products on
        GateGame
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {featuredItems.map((item: any) => (
          <SwiperSlide key={item.Id}>
            <GameItemFeatured item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MarketHeader
