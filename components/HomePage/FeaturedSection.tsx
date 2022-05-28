import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../Common/Title";
import GameItemFeatured from "../Items/GameFeaturedItem";

const Featured: React.FC = () => {
    return <section className="mb-16">
        <Title2 className="mb-4">Featured</Title2>
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {[1, 2].map(() => (
                <SwiperSlide >
                    <GameItemFeatured />
                </SwiperSlide>
            ))}

        </Swiper>
    </section>
}

export default Featured;