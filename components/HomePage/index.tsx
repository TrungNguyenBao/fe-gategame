import FeatureSection from './FeatureSection'
import Header from './Header'

import Slider from "react-slick";
import React, { Component } from "react";

const HotItems: React.FC = () => {
  const settingsHotItems = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <h2>Hot Items</h2>
      <div className='container'>
        <Slider {...settingsHotItems}>
          {[1, 2, 3, 4].map((data) => (
            <div key={data} className=" " >
              <div className=" ">
                <div className=" ">
                  <a href="#">
                    <img src="https://cdn.gategame.io/storage/upload/product/PsU3gIM937O5vZJMCk5q4qFfEy2HITMv7bxHjHVw.gif?w=424&amp;auto=compress,format" />
                    <span className=" " >
                      <img src='/images/icon/item_legendary.svg' />
                      Legendary
                    </span>
                  </a>
                </div>
                <div className=" ">
                  <span>
                    Stellaverse
                  </span>
                  <h3>
                    <a className=" " href="https://gategame.io/lightning-pylon-p11355.html">
                      LIGHTNING PYLON
                    </a>
                  </h3>
                  <p>
                  </p><div className="" id="nft-price-info" data-busd="350">
                    <p data-toggle="tooltip" data-placement="bottom" title="BUSD">
                      <img src="/images/money_icon.png" />
                      350
                    </p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>)
}
const BestSeller: React.FC = () => {
  const settingsHotItems = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <h2>Best Seller</h2>
      <div className='container'>
        <Slider {...settingsHotItems}>
          {[1, 2, 3, 4, 5].map((data) => (
            <div key={data} className=" " >
              <div className=" ">
                <div className=" ">
                  <a href="#">
                    <img src="https://cdn.gategame.io/storage/upload/product/2nv2anxSIS13DD7WEfBT9DhwxM9GnhWRFhfvUVUc.gif?w=310&amp;auto=compress,format" />
                    <span className=" " >
                      <img src='/images/icon/item_legendary.svg' />
                      Legendary
                    </span>
                  </a>
                </div>
                <div className=" ">
                  <span>
                    Stellaverse
                  </span>
                  <h3>
                    <a className=" " href="https://gategame.io/lightning-pylon-p11355.html">
                      LIGHTNING PYLON
                    </a>
                  </h3>
                  <p>
                  </p><div className="" id="nft-price-info" data-busd="350">
                    <p data-toggle="tooltip" data-placement="bottom" title="BUSD">
                      <img src="/images/money_icon.png" />
                      350
                    </p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>)
}

export default function HomePage() {

  return (
    <div className="md:px-8 pt-4">
      <Header />
      <HotItems />
      <BestSeller />

      {/* <FeatureSection />
      <div className="grid sm:grid-cols-3 gap-4 py-[40px] md:px-[80px] sm:px-[20px]">
        <div className="col-span-3 sm:col-span-1 cell">
          <img
            src="/images/home-page/homegrid1.jpg"
            style={{ objectPosition: 'left' }}
            className="w-full md:h-[350px] h-[300px] min-h-auto rounded-[20px] object-fill"
          />
        </div>
        <div className="col-span-3 cell sm:col-span-2 w-full min-h-auto rounded-[20px]">
          <img
            src="/images/home-page/grid2.png"
            className="w-full md:h-[350px] h-[150px] min-h-auto rounded-[20px] object-cover"
          />
        </div>

        <div className="col-span-3 sm:col-span-2 w-full min-h-auto rounded-[20px] cell">
          <img
            src="/images/home-page/grid3.png"
            className="w-full md:h-[330px] h-[150px] min-h-auto rounded-[20px] object-cover object-top"
          />
        </div>
        <div className="col-span-3 sm:col-span-1 cell">
          <img
            src="/images/home-page/4-grid.png"
            style={{ objectPosition: 'left' }}
            className="w-full md:h-[330px] h-[270px] min-h-auto rounded-[20px] object-cover object-top"
          />
        </div>
      </div> */}
    </div>
  )
}
