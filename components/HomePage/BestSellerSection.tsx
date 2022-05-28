import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../../components/Common/Title2";
import ProductItem from "../../components/Items/ProductItem";

const BestSeller: React.FC = () => {
    return (
        <section className="container">
            <Title2 className="mb-4">Best Seller</Title2>
            <div className="mb-16">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={false}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4, 5].map((data) => (
                        <SwiperSlide key={data} className=" " >
                            <ProductItem />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>)
}

export default BestSeller;