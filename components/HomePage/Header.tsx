import { useRouter } from 'next/router'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
            <SwiperSlide style={{height:'500px'}}>
              <img className='relative w-full' src='https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?w=877&auto=compress,format' />
              <div className='absolute bottom-1 left-0' >
                <div className='w-[45px] bg-[#20bf55] py-2 px-1 ml-2 rounded-lg'>0.0</div>
                <div className='flex items-center ml-2 py-2'>
                    <img className='h-[15px] w-[15px] mr-2' src='https://gategame.io/storage/upload/product/BxRFQbOPIys9t4MccRxWHgM9O5eBzXqJylao6zyy.png?w=16&auto=compress,format'/>
                    <span>GGWP</span>
                </div>
                <div className='ml-2 text-28 font-bold mb-3'><a href='https://gategame.io/en/stellaverse-dynasty-p11215.html'>Stellaverse: DYNASTY</a></div>
                <div className='flex px-1'>
                      <div className='rounded border-[#6cb6f4] text-[#6cb6f4] border-0.5 p-0.5 ml-2 text-[15px] hover:bg-[#6cb6f4] hover:text-[#fff]'>multiverse</div>
                      <div className='rounded border-[#6cb6f4] text-[#6cb6f4] border-0.5 p-0.5 ml-2 text-[15px] hover:bg-[#6cb6f4] hover:text-[#fff]'>multiverse</div>
                      <div className='rounded border-[#6cb6f4] text-[#6cb6f4] border-0.5 p-0.5 ml-2 text-[15px] hover:bg-[#6cb6f4] hover:text-[#fff]'>multiverse</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{height:'400px'}}>
              <img src='https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?w=877&auto=compress,format' />
            </SwiperSlide>
            <SwiperSlide style={{height:'400px'}}>
              <img src='https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?w=877&auto=compress,format' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/3 px-10">
          <div className="bg-[#242424] rounded-sm">
            <h1 className="text-center text-[28px] font-bold py-3">
              Top Genres
            </h1>
            <ItemGame />
            <ItemGame />
            <ItemGame />
          </div>
        </div>
      </div>
      <div className="justify-center flex w-full sm:w-[800px] pt-8 mx-auto flex-wrap sm:flex-nowrap">
        <div className="frosty bg-white mx-2 w-full sm:w-[25%] mb-8 dark:bg-[#252525]">
          <div className="text-[2rem] leading-[44px] font-bold">Soon</div>
          <div className="text-[1rem]">CASH Holders</div>
        </div>
        <div className="frosty bg-white mx-2 w-full sm:w-[25%] mb-8 dark:bg-[#252525]">
          <div className="text-[2rem] leading-[44px] font-bold ">Soon</div>
          <div className="text-[1rem]">Average APR</div>
        </div>
        <div className="frosty bg-white mx-2 w-full sm:w-[25%] mb-8 dark:bg-[#252525]">
          <div className="text-[2rem] leading-[44px] font-bold">Soon</div>
          <div className="text-[1rem]">Total Value Locked</div>
        </div>
        <div className="frosty bg-white mx-2 w-full sm:w-[25%] mb-8 dark:bg-[#252525]">
          <div className="text-[2rem] leading-[44px] font-bold">Soon</div>
          <div className="text-[1rem]">Treasury Wallet</div>
        </div>
      </div>
    </>
  )
}
export default Header

const ItemGame = () => {
  return (
    <>
      <div className="py-4 border-b-0.5 border-[#3f3]">
        <p className="px-3 flex items-center">
          <a href="https://gategame.io/en/battle-arena/c1235">
            Battle Arena
          </a>
            <MdOutlineKeyboardArrowRight size={20} color={"#0a85ed"} />
        </p>
        <ul className="flex">
          <li className="p-3">
            <a
              className="text-black"
              href="https://gategame.io/the-sandbox-p11151.html"
            >
              <img
                className="w-[50px]"
                src="https://gategame.io/storage/upload/product/dcgI8G0z1tXiPep2VgmOfPKgCYTUBit46OTjMZr0.png?w=44&auto=compress,format"
              />
            </a>
          </li>
          <li className="p-3">
            <a
              className="text-black"
              href="https://gategame.io/decentraland-p11153.html"
            >
              <img
                className="w-[50px]"
                src="https://gategame.io/storage/upload/product/dcgI8G0z1tXiPep2VgmOfPKgCYTUBit46OTjMZr0.png?w=44&auto=compress,format"
              />
            </a>
          </li>
          <li className="p-3">
            <a
              className="text-black"
              href="https://gategame.io/gods-unchained-p11154.html"
            >
              <img
                className="w-[50px]"
                src="https://gategame.io/storage/upload/product/dcgI8G0z1tXiPep2VgmOfPKgCYTUBit46OTjMZr0.png?w=44&auto=compress,format"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
