import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../Common/Title";
import ProductItem from "../../components/Items/ProductItem";
import { useHomePageContext } from "../../pages";

const BestSeller: React.FC = () => {
    const { bestSellersItems }: any = useHomePageContext()
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
                    {bestSellersItems.map((item: any) => (
                        <SwiperSlide key={item.Id} className=" " >
                            <ProductItem item={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>)
}

export default BestSeller;