import { useHomePageContext } from "../../pages";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2 } from "../Common/Title";
import GameItemRecomendation from "../Items/GameRecomendationItem";

const TheCommunityRecommend: React.FC = () => {
    const { theCommunityRecommendsItems }: any = useHomePageContext()
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
                {theCommunityRecommendsItems.map((item: any) => (
                    <SwiperSlide key={item.Id}>
                        <GameItemRecomendation item={item}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default TheCommunityRecommend;