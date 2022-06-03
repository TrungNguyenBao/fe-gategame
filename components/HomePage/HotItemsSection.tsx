import ProductItem from "../../components/Items/ProductItem";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Title2 } from "../Common/Title";
import { useHomePageContext } from "../../pages";

const HotItems: React.FC = () => {
  const { hotItems }: any = useHomePageContext()
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
          {hotItems.map((item: any) => (
            <SwiperSlide key={item.Id} className=" " >
              <ProductItem item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>)
}

export default HotItems;