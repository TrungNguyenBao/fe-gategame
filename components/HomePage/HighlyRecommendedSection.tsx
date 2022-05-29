import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../../components/Common/Title";
import GameHighlyRecommendedItem from "../../components/Items/GameHighlyRecommendedItem";

const HighlyRecommendedSection: React.FC = () => {
    return <section className="mb-16">
        <Title2 className="mb-4">Highly Recommended</Title2>
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {[1, 2].map((key) => (
                <SwiperSlide key={key}>
                    <GameHighlyRecommendedItem />
                </SwiperSlide>
            ))}

        </Swiper>
    </section>
}

export default HighlyRecommendedSection;