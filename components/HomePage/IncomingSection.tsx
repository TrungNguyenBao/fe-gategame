import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import GameMdItem from "../../components/Items/GameMdItem";
import { Title2 } from "../Common/Title";

const Incoming: React.FC = () => {
    return <section className="mb-16">
        <Title2 className="mb-4">Recent Update</Title2>

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
        >
            {[1, 2, 3, 4, 6, 7, 8, 9, 10].map((key) => (
                <SwiperSlide key={key}>
                    <GameMdItem />
                </SwiperSlide>
            ))}

        </Swiper>
    </section>
}

export default Incoming;