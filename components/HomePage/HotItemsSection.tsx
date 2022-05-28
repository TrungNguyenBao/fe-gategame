import ProductItem from "../../components/Items/ProductItem";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Title2 } from "../Common/Title";

const HotItems: React.FC = () => {
  return (
    <section className='container'>
      <Title2 className="mb-8">Hot Items</Title2>
      <div className="mb-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={false}
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