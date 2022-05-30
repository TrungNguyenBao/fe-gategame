import { useRouter } from 'next/router';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2, Title6 } from '../../components/Common/Title';
import ItemRating from '../../components/Items/ItemRating';
import ItemTags from '../../components/Items/ItemTags';

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex container mt-10">
        <div className="w-2/3">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3].map((key) => (
              <SwiperSlide key={key}>
                <img className='relative w-full h-[564px] object-cover rounded-xl' src='https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?w=877&apm;auto=compress,format' />
                <div className='absolute bottom-8 left-8' >
                  <ItemRating className='mb-4' />
                  <Title6 className='mb-4'>
                    <img className='h-[15px] w-[15px]' src='https://gategame.io/storage/upload/product/BxRFQbOPIys9t4MccRxWHgM9O5eBzXqJylao6zyy.png?w=16&apm;auto=compress,format' />
                    <span>GGWP</span>
                  </Title6>
                  <div className='text-28 font-bold mb-4'><a href='https://gategame.io/en/stellaverse-dynasty-p11215.html'>Stellaverse: DYNASTY</a></div>
                  <ItemTags tags={['multiverse', 'play2earn', 'win2earn']} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/3 px-8">
          <div className="bg-[#242424] rounded-xl">
            <Title2 className='p-6 pb-2'>
              Top Genres
            </Title2>
            <ItemGame />
            <ItemGame />
            <ItemGame />
          </div>
        </div>
      </div>
    </>
  )
}
export default Header

const ItemGame = () => {
  return (
    <>
      <div className="px-6 py-4 border-b-0.5 border-[#333] last:border-0">
        <p className="flex items-center mb-4">
          <a className='text-gray-500 font-semibold ' href="#">
            Battle Arena
          </a>
          <MdOutlineKeyboardArrowRight size={20} color={"#0a85ed"} />
        </p>
        <ul className="flex flex-wrap gap-4 mb-2">
          {[1, 2, 3, 4, 5, 8].map((key) => (
            <li key={key}>
              <a
                className="text-black"
                href="#"
              >
                <img
                  className="w-[50px]"
                  src="https://cdn.gategame.io/storage/upload/product/GuwpSenPCMjsbbABQzq9OZSRoVJ4axoxfkA5ABkc.png?w=44&amp;auto=compress,format"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
