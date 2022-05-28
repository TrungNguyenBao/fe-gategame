import FeatureSection from './FeatureSection'
import Header from './Header'

import Slider from "react-slick";
import React, { Component } from "react";
import HotItems from './HotItemsSection';
import BestSeller from './BestSellerSection';
import NewOnBoardAndTopReviewers from './NewOnBoardAndTopReviewersSection';
import TheCommunityRecommend from './TheCommunityRecommendSection';
import Featured from './FeaturedSection';
import HighlyRecommended from './HighlyRecommendedSection';
import Update from './UpdateSection';
import Incoming from './IncomingSection';
import RecentUpdate from './RecentUpdateSection';
import Giftcode from './GiftcodeSection';
import HowTo from './HowToSection';
import BrowseGameGate from './BrowseGameGateSection';

export default function HomePage() {

  return (
    <div className="md:px-8 pt-4">
      <Header />
      <HotItems />
      <BestSeller />
      <NewOnBoardAndTopReviewers />
      <TheCommunityRecommend />
      <Featured />
      <HighlyRecommended />
      <Update />
      <Incoming />
      <RecentUpdate />
      <Giftcode />
      <HowTo />
      <BrowseGameGate />


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
