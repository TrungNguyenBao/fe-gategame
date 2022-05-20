import { useRouter } from 'next/router';
import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import SecondaryButton from '../shared/SecondaryButton';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pb-4 mt-10">
        <h1 className="w-full sm:w-[700px] mt-5 text-[2.2rem] sm:text-[3.5rem] leading-[40px] sm:leading-[60px] text-center mb-5 font-bold mx-auto">
          Pushing self-custody crypto forward.
        </h1>
        <p className="max-w-[30rem] text-center pt-[10px] pb-[10px] mt-[10px] mb-[10px] leading-[1.4rem] text-[18px] paragraph-text-light dark:paragraph-text-dark">
          The CASH fair launch is live on PinkSale. Hold CASH for BTC dividends paid to your wallet automatically.
        </p>
        <div className="justify-center flex mt-4 flex-wrap sm:flex-nowrap w-[75%] sm:w-full">
          <PrimaryButton className="mb-[20px] w-full sm:w-max mx-0 sm:mx-2 ">
            <a href={"https://bit.ly/caashpinksale"} target="_blank">
            Contribute Now
            </a>
          </PrimaryButton>
          <SecondaryButton className="mb-[20px] w-full sm:w-max mx-0 sm:mx-2">
            <a href={"https://t.me/caash_io"} target="_blank">
              Join Telegram
            </a>
          </SecondaryButton>

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
  );
}
export default Header;