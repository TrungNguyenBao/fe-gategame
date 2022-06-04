import { useHomePageContext } from "../../lib/providers/homepage";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import GameSmItem from "../../components/Items/GameSmItem";
import { Title2 } from "../Common/Title";

const RecentUpdate: React.FC = () => {
    const { recentUpdateItems }: any = useHomePageContext()
    return <section className="mb-16">
        <Title2 className="mb-4">Recent Update</Title2>

        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
        >
            {recentUpdateItems.map((item: any) => (
                <SwiperSlide key={item.Id}>
                    <GameSmItem item={item}/>
                </SwiperSlide>
            ))}

        </Swiper>
    </section>
}


export default RecentUpdate;