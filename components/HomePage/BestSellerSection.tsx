import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

const BestSeller: React.FC = () => {
    return (
        <>
            <h2>Best Seller</h2>
            <div className='container'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4, 5].map((data) => (
                        <SwiperSlide key={data} className=" " >
                            <div className=" ">
                                <div className=" ">
                                    <a href="#">
                                        <img src="https://cdn.gategame.io/storage/upload/product/2nv2anxSIS13DD7WEfBT9DhwxM9GnhWRFhfvUVUc.gif?w=310&amp;auto=compress,format" />
                                        <span className=" " >
                                            <img src='/images/icon/item_legendary.svg' />
                                            Legendary
                                        </span>
                                    </a>
                                </div>
                                <div className=" ">
                                    <span>
                                        Stellaverse
                                    </span>
                                    <h3>
                                        <a className=" " href="https://gategame.io/lightning-pylon-p11355.html">
                                            LIGHTNING PYLON
                                        </a>
                                    </h3>
                                    <p>
                                    </p><div className="" id="nft-price-info" data-busd="350">
                                        <p data-toggle="tooltip" data-placement="bottom" title="BUSD">
                                            <img src="/images/money_icon.png" />
                                            350
                                        </p>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>)
}

export default BestSeller;