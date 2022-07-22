import Title from 'antd/lib/skeleton/Title';
import ImageWithFallback from '../../components/Common/Image';
import { Title2 } from '../../components/Common/Title';
import { Title6 } from '../../components/Common/Title';
import GameMdItem from '../../components/Items/GameMdItem';
import ItemRating from '../../components/Items/ItemRating';
import ItemTags from '../../components/Items/ItemTags';
import { fakeItemsGame } from '../../constants/fake';
import Link from 'next/link';
import React from 'react'
import { FaEllipsisH, FaUsers } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import GameItem from '../Items/GameItem'



const GamePage: React.FC = () => {
    const [openTab, setOpenTab] = React.useState(1)

    return (
        <div className='container mx-auto'>

            {/* slider */}
            <div className="flex container mt-10 mb-16">
                <div className="w-7/12">
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper rounded-lg"
                    >
                        {[1, 2, 3]?.map((item: any) => {
                            return (
                                <SwiperSlide key={item}>
                                    {/* <img className='relative w-full h-[564px] object-cover rounded-xl' src={game.Avatar} /> */}
                                    <div className="relative w-full h-[380px] object-cover rounded-xl">
                                        <ImageWithFallback
                                            className="object-cover"
                                            layout="fill"
                                            src={'/images/gate_game/slider1.png'}
                                            fallbackSrc={'/images/gate_game/slider1.png'}
                                        />
                                    </div>


                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="w-5/12 px-8">
                    <div className="side-list">
                        <div className="flex items-center gap-4">
                            <Title6 className="text-gray-200 my-3">
                                <img src="/images/icon/hero-ic1.png" />
                                SAND
                            </Title6>

                            <div className="">
                                <ItemTags tags={[
                                    "multiverse",
                                    "play2earn",
                                    "win2earn",
                                ]} />
                            </div>

                            <div className="flex my-[10px]">
                                <img
                                    src="/images/icon/ic_Web.svg"
                                    alt="web-icon"
                                    className="mr-[8px]"
                                />
                                <img
                                    src="/images/icon/ic_Android.svg"
                                    alt="web-icon"
                                    className="mr-[8px]"
                                />
                            </div>
                        </div>

                        <Title2 className='mb-8'>
                            Top Genres Game Name
                        </Title2>

                        <div className="mb-2 ">
                            <ul className='flex gap-4'>
                                <li className='flex gap-2 items-center'><FaUsers className='text-16 text-gray-400' /> 0 Followers</li>
                                <li><a className='inline-block text-sm px-2 bg-gradient-to-r from-blue-600 to-blue-400 text-center rounded' href="https://www.sandbox.game" target="_blank">Visit Website</a></li>
                            </ul>

                        </div>
                        <p className='text-gray-400 mb-6'>The Sandbox is a virtual world where players can build, own, and monetize their gaming experiences in the Ethereum blockchain.</p>



                        <div className="flex gap-8 items-center mb-4">
                            <div className="flex gap-2 items-center">
                                <ItemRating>
                                    <span className='font-bold text-24'>
                                        9.0
                                    </span>
                                </ItemRating>
                                <a href="#">0 Reviews</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-24 font-bold">94.0</span>
                                <div className="text">Social Score</div>
                            </div>
                        </div>


                        <div className="all-button btn-interact">
                            <div className='block mb-4'>
                                <div className="inline-flex p-2 rounded-lg gap-1 bg-gray-700">
                                    <span>
                                        1
                                    </span>
                                    <img className="img-badge" src="https://cdn.gategame.io/storage/upload/medal/mqJPJbvV47QY6rQcxXqtbWiJBBen3ihKBbJtlRYd.png" alt=" " />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className="inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all py-3 px-10 rounded-md font-semibold ">
                                    Add medal
                                </button>

                                <button className="inaline-block w-auto transition-all py-3 px-10 rounded-md font-semibold border-2 border-white">
                                    Follow
                                </button>
                                <button className="more-icon btn-share" >
                                    <FaEllipsisH />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tabs */}
            <div className="bg-grayBg rounded-lg overflow-hidden mb-20">
                <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
                    <ul
                        className="flex flex-wrap"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                    >
                        <li className="mr-4 text-16 leading-7" role="presentation">
                            <button
                                className={`inline-block p-4 text-white font-semibold ${openTab === 1
                                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                                    : `opacity-50`
                                    }`}
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="true"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(1)
                                }}
                            >
                                Game Information
                            </button>
                        </li>
                        <li className="mr-4 text-16 leading-7">
                            <button
                                className={`inline-block p-4 text-white font-semibold ${openTab === 2
                                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                                    : `opacity-50`
                                    }`}
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(2)
                                }}
                            >
                                Gallery
                            </button>
                        </li>
                        <li className="mr-4 text-16 leading-7" role="presentation">
                            <button
                                className={`inline-block p-4 text-white font-semibold ${openTab === 3
                                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                                    : `opacity-50`
                                    }`}
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(3)
                                }}
                            >
                                How to play
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="pt-0 pl-4 pr-4 pb-6">
                    {openTab === 1 && (
                        <div className="p-2 flex flex-col">
                            <Title2 className='mb-6'> Game Information </Title2>

                            <div className="flex">
                                <div className="w-2/3">
                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span className='text-gray-400'>Token Name</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span>SAND</span>
                                        </div>
                                    </div>


                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span>Token Symbol</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span>The Sandbox</span>
                                        </div>
                                    </div>

                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span>Token Decimals</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span>18</span>
                                        </div>
                                    </div>

                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span>Sale Contract address</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span><a href="#"></a>
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span>Token Address</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span className='flex items-center gap-1 overflow-hidden justify-end'>
                                                <a href="#" target="_blank">
                                                    <img src="https://gategame.io/images/gate_game/external-link%201.svg" />
                                                </a>
                                                <span>0x3845badAde8e6dFF049820680d1F14bD3903a5d0</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex bg-[#111] p-4 py-2 rounded-lg mb-2">
                                        <div className="w-1/4">
                                            <span>Total Supply</span>
                                        </div>
                                        <div className="w-3/4 text-right">
                                            <span className='flex items-center gap-1 overflow-hidden justify-end'>
                                                <a href="#" target="_blank">
                                                    <img src="https://gategame.io/images/gate_game/external-link%201.svg" />
                                                </a>
                                                <p>3,000,000,000</p>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    )}
                    {openTab === 2 && (
                        <div className="p-2 flex flex-col">
                            <Title2 className='mb-4'>
                                Gallery
                            </Title2>

                            <img
                                className='rounded-lg max-w-[50%]'
                                src="https://cdn.gategame.io/storage/upload/product/A74oZiPX1uQ2cuePrNEwBpFHPwxHBXEK5WAQ8uQv.jpg" />
                        </div>
                    )}
                    {openTab === 3 && (
                        <div className="p-2 flex flex-col">
                            <Title2 className="mb-4">
                                Instructions on how to play
                            </Title2>
                            <div className="text-16 leading-6 font-normal">
                                A non-fungible token (NFT) is a unique and non-interchangeable
                                unit of data stored on a digital ledger (blockchain). NFTs can
                                be used to represent easily-reproducible items such as photos,
                                videos, audio, and other types of digital files as unique items
                                (analogous to a certificate of authenticity), and use blockchain
                                technology to establish a verified and public proof of
                                ownership. Copies of the original file are not restricted to the
                                owner of the NFT, and can be copied and shared like any file.
                                The lack of interchangeability (fungibility) distinguishes NFTs
                                from blockchain cryptocurrencies, such as Bitcoin.
                            </div>
                            <div className="flex pt-12">
                                <div className="flex-1 p-4 pl-0">
                                    <div className="h-px w-full bg-grayLine mb-4"></div>
                                    <div className="text-16 font-semibold leading-6 text-primary mb-1">
                                        What is a slip
                                    </div>
                                    <div className="font-normal text-14 leading-5 w-10/12">
                                        When you select option and place your guess, it is know as
                                        slip. 1 slip can have multiple options selected. This
                                        feature is good for free users who are allowed to place 1
                                        slip only they can select multiple options and earn more.
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="h-px w-full bg-grayLine mb-4"></div>
                                    <div className="text-16 font-semibold leading-6 text-primary mb-1">
                                        Live stream start
                                    </div>
                                    <div className="font-normal text-14 leading-5 w-10/12">
                                        All games have times and dates mentioned on play now page,
                                        other than that follow our face book page to know about
                                        latest stream times.
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="h-px w-full bg-grayLine mb-4"></div>
                                    <div className="text-16 font-semibold leading-6 text-primary mb-1">
                                        How to get rewards?
                                    </div>
                                    <div className="font-normal text-14 leading-5 w-10/12">
                                        We offer ingame and real life rewards, before placing your
                                        order contact us via live chat and we will guide you.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Overview */}
            <div className='flex gap-8'>
                <div className="bg-grayBg rounded-lg overflow-hidden mb-20 w-8/12">
                    <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
                        <Title2 className='inline-block p-4 text-white font-semibold pl-8 text-24'>Overview</Title2>
                    </div>

                    <div className="p-8">
                        <div className="icon-section">
                            <div className="flex flex-wrap">
                                <div className="w-1/3">
                                    <div className="all-value flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-gray-600">
                                            <img src="https://gategame.io/images/gate_game/group-icon.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="text-xs font-bold text-gray-300">
                                                Users (24h)
                                            </div>
                                            <div className="count">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="all-value flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-gray-600">
                                            <img src="https://gategame.io/images/gate_game/transation.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="text-xs font-bold text-gray-300">
                                                Transactions
                                            </div>
                                            <div className="count">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="all-value flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-gray-600">
                                            <img src="https://gategame.io/images/gate_game/Vector.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="text-xs font-bold text-gray-300">
                                                Volumn (24h)
                                            </div>
                                            <div className="count">
                                                $ 0.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full pt-6 pb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-gray-600">
                                            <img src="https://gategame.io/images/gate_game/box.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <ul className='flex gap-12 items-center'>
                                                <li className=''>
                                                    <div className="text-xs font-bold text-gray-300">
                                                        Game
                                                    </div>
                                                    <div className="count">
                                                        1
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <div className="text-xs font-bold text-gray-300">
                                                        NFTs
                                                    </div>
                                                    <div className="count">
                                                        1
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <div className="text-xs font-bold text-gray-300">
                                                        Tokens
                                                    </div>
                                                    <div className="count">
                                                        1
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <div className="text-xs font-bold text-gray-300">
                                                        VW Building
                                                    </div>
                                                    <div className="count">

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-400 mb-6">
                            <p>The Sandbox is best known for its two smash mobile hits The Sandbox (2011) and The Sandbox Evolution (2016), which combined generated 40 million downloads across iOS and Android. In 2018, developer/Publisher Pixowl decided to bring this successful User Generated Content gaming IP and large community of creators from mobile to the blockchain ecosystem. The goal: disrupt existing game makers like Minecraft and Roblox by providing creators with true ownership of their creations as non-fungible tokens (NFTs) and reward them for their participation in the ecosystem.</p>
                        </div>
                        <div className="store">
                            <div className="flex">
                                <div className="w-2/3">
                                    <div className="flex gap-12">
                                        <div className="support">
                                            <div className="text-xs font-bold text-gray-300 pb-2">
                                                Blockchain
                                            </div>
                                            <ul className="icon">
                                                <li>
                                                    <img src="https://gategame.io/images/blockchain-1.png" title="Blockchain 1" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="support">
                                            <div className="text-xs font-bold text-gray-300 pb-2">
                                                Platform
                                            </div>
                                            <ul className="flex gap-1">
                                                <li>
                                                    <img src="https://gategame.io/images/ic_Web.svg" title="Web" />
                                                </li>
                                                <li>
                                                    <img src="https://gategame.io/images/ic_PS.svg" title="IOS" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="support">
                                            <div className="text-xs font-bold text-gray-300 pb-2">
                                                NFT Support
                                            </div>
                                            <ul className="icon">
                                                <li>
                                                    Yes
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-grayBg rounded-lg overflow-hidden mb-20 w-4/12">
                    <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
                        <Title2 className='inline-block p-4 text-white font-semibold pl-8 text-24'>Tweets by <a className='text-blue-500' href="#">@TheSandboxGame</a>
                        </Title2>
                    </div>
                </div>
            </div>

            {/* review */}
            <div className="bg-grayBg rounded-lg overflow-hidden mb-20">
                <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
                    <Title2 className='inline-block p-4 text-white font-semibold pl-8'>Reviews</Title2>
                </div>
                <div className="pt-0 pl-4 pr-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-4'>
                            <span> Overall Reviews </span>

                            <ItemRating>
                                <Title2>9.0</Title2>
                            </ItemRating>

                            <span>0 Reviews</span>

                        </div>

                        <div>
                            <button className="inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all py-3 px-10 rounded-md font-semibold ">
                                WRITE YOUR REVIEW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="type">
                    <ul className='flex items-center gap-4 p-6 cursor-pointer'>
                        <li>
                            <a className="cursor-pointer inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all p-3 py-1 rounded-md text-sm ">All</a>
                        </li>
                        <li>
                            <a className="cursor-pointer inaline-block w-auto bg-gray-600 hover:bg-black transition-all p-3 py-1 rounded-md text-sm " data-value="1">Experts</a>
                        </li>
                        <li>
                            <a className="cursor-pointer inaline-block w-auto bg-gray-600 hover:bg-black transition-all p-3 py-1 rounded-md text-sm " data-value="2">Community</a>
                        </li>
                    </ul>
                </div>
            </div>


            {/* you also like */}

            <div className='mb-12'>
                <Title2 className="mb-4">
                    You May Also Like This
                </Title2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={false}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {fakeItemsGame.map((item: any) => (
                        <SwiperSlide key={item.Id}>
                            <GameMdItem item={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


        </div>
    )
}

export default GamePage
