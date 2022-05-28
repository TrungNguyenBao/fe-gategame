import ProductItem from "../../components/Items/ProductItem";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

const HotItems: React.FC = () => {
  return (
    <section>
      <h2>Hot Items</h2>
      <div className='container'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4].map((data) => (
            <SwiperSlide key={data} className=" " >
              <ProductItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>)
}

export default HotItems;