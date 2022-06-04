import { useHomePageContext } from "../../lib/providers/homepage";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import GameMdItem from "../../components/Items/GameMdItem";
import { Title2 } from "../Common/Title";

const Incoming: React.FC = () => {
    const { incomingItems } = useHomePageContext()
    return <section className="mb-16">
        <Title2 className="mb-4">Incoming</Title2>

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
        >
            {incomingItems.map((item) => (
                <SwiperSlide key={item.Id}>
                    <GameMdItem item={item} />
                </SwiperSlide>
            ))}

        </Swiper>
    </section>
}

export default Incoming;