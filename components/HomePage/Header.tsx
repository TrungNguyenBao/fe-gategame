import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title2, Title6 } from '../../components/Common/Title';
import ItemRating from '../../components/Items/ItemRating';
import ItemTags from '../../components/Items/ItemTags';
import { slugGame } from '../../lib/helpers/slugGame';
import { useHomePageContext } from '../../pages/index';


const Header: React.FC = () => {
  const router = useRouter()
  const lang = "en"
  const { sliders, genres }: any = useHomePageContext()

  return (
    <>
      <div className="flex container mt-10 mb-16">
        <div className="w-2/3">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {sliders?.map((item: any) => {
              const game: any = item.Translations.find((trans: any) => trans.Language === lang)
              return (
                <SwiperSlide key={game.Id}>
                  <img className='relative w-full h-[564px] object-cover rounded-xl' src={game.Avatar} />
                  <div className='absolute bottom-8 left-8' >
                    <ItemRating className='mb-4' />
                    <Title6 className='mb-4'>
                      <img className='h-[15px] w-[15px]' src='/images/icon/ggwp.png' />
                      <span>GGWP</span>
                    </Title6>
                    <div className='text-28 font-bold mb-4'>
                      <Link href={slugGame(game.Name, game.Id)} locale={lang}>{game.Name}</Link>
                    </div>
                    <ItemTags tags={['multiverse', 'play2earn', 'win2earn']} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="w-1/3 px-8">
          <div className="bg-[#242424] rounded-xl">
            <Title2 className='p-6 pb-2'>
              Top Genres
            </Title2>
            {
              Object.entries(genres).map(([key, games]) => (
                <ItemGame key={key} games={games} name={key} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Header

const ItemGame = ({ name, games }: any) => {
  const lang = "en"
  return (
    <> {typeof games === "object" && (<div className="px-6 py-4 border-b-0.5 border-[#333] last:border-0">
      <p className="flex items-center mb-4">
        <a className='text-gray-500 font-semibold ' href="#">
          {name}
        </a>
        <MdOutlineKeyboardArrowRight size={20} color={"#0a85ed"} />
      </p>
      <ul className="flex flex-wrap gap-4 mb-2">
        {games?.map((item: any) => {
          const game = item?.Translations?.find((t: any) => t.Language === lang)
          return (
            <li key={game.Id}>
              <Link
                className="text-black cursor-pointer"
                href={slugGame(game.Name, game.Id)}
              >
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  src={game.Avatar}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>)}

    </>
  )
}
