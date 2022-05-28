import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../../components/Common/Title2";
import GameItemRecomendation from "../Items/GameRecomendationItem";

const TheCommunityRecommend: React.FC = () => {
    return (
        <section className="mb-16">
            <Title2 className="mb-4">The Community Recommend’s</Title2>
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
                        <GameItemRecomendation />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default TheCommunityRecommend;