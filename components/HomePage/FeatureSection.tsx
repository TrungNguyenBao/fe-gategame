import { useRouter } from 'next/router'
import { useState } from 'react'
import { Dialog } from '../shared/dialog/dialog'
import PrimaryButton from '../shared/PrimaryButton'
import SecondaryButton from '../shared/SecondaryButton'

const FeatureSection: React.FC = () => {
  const router = useRouter()
  const [openWatchSetupAccount, setOpenWatchSetupAccount] = useState(false)
  const [openWatchDecentralizedExchange, setOpenWatchDecentralizedExchange] =
    useState(false)
  return (
    <>
      <div className="py-[40px] flex-wrap flex justify-center items-center">
        <div className="w-full sm:w-[50%] max-w-[510px] px-[15px] order-2 sm:order-1">
          <h2 className="text-[1.8em] sm:text-[2.5rem] mb-[30px] leading-[1.2] sm:leading-[1.1] font-bold">
            Craft a profile for your crypto wallet address.
          </h2>
          <div className="mb-[30px] pr-[40px] text-[18px] leading-[1.4em] font-[400] paragraph-text-light  dark:paragraph-text-dark">
            Caash Me helps people recognize they're sending you crypto. It's
            your own unique link. Connect a self-custody wallet, edit your
            details, and save.
          </div>
          <div className="justify-start items-center flex mt-4 flex-wrap sm:flex-nowrap w-[75%] sm:w-full">
            <PrimaryButton className="mb-[20px] w-full sm:w-max mx-0 sm:mr-4 ">
              <a href="https://caash.me/login" target="_blank">
                Login / Sign Up
              </a>
            </PrimaryButton>
            <SecondaryButton className="mb-[20px] w-full sm:w-max mx-0">
              <a
                href="https://docs.caash.io/me"
                target="_blank"
                className="mx-[14px]"
              >
                Learn More
              </a>
            </SecondaryButton>
          </div>
        </div>
        <div className="w-full px-[15px] sm:w-[50%] sm:max-w-[50%] order-1 sm:order-2 mb-[20px]">
          <img className="" src="images/home-page/LandingPayments.png" />
        </div>
      </div>
      <div className="py-[40px] flex-wrap flex justify-center items-center">
        <div className="w-full px-[15px] sm:w-[50%] sm:max-w-[50%] order-1 sm:order-1 mb-[20px]">
          <img className="" src="images/home-page/LandingCoins.png" />
        </div>
        <div className="w-full sm:w-[50%] max-w-[510px] px-[15px] order-2 sm:order-2">
          <h2 className="text-[1.8em] sm:text-[2.5rem] mb-[30px] leading-[1.2] sm:leading-[1.1] font-bold">
            A multi-chain social payment solution.
          </h2>
          <div className="mb-[30px] pr-[40px] text-[18px] leading-[1.4em] font-[400] paragraph-text-light dark:paragraph-text-dark">
            Caash Me supports transfers on Ethereum, Polygon (Matic), and
            Binance Smart Chain. It helps solve the issue of funds being sent to
            the wrong address.
          </div>
          <div className="justify-start items-center flex mt-4 flex-wrap sm:flex-nowrap w-[75%] sm:w-full">
            <PrimaryButton className="mb-[20px] w-full sm:w-max mx-0 sm:mr-4 ">
              <a href="https://caash.me/login" target={'_blank'} className="">
                Create Profile
              </a>
            </PrimaryButton>
            <SecondaryButton
              onClick={() => setOpenWatchSetupAccount(true)}
              className="mb-[20px] w-full sm:w-max mx-0 sm:mr-4 "
            >
              Watch How To
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="py-[40px] flex-wrap flex justify-center items-center">
        <div className="w-full sm:w-[50%] max-w-[510px] px-[15px] order-2 sm:order-1">
          <h2 className="text-[1.8em] sm:text-[2.5rem] mb-[30px] leading-[1.2] sm:leading-[1.1] font-bold">
            Decentralized and community-driven.
          </h2>
          <div className="mb-[30px] pr-[40px] text-[18px] leading-[1.4em] font-[400] paragraph-text-light dark:paragraph-text-dark">
            CASH and COW (BEP-20 tokens) sit at the heart of the platform with
            governance and staking abilities.
          </div>
          <div className="justify-start items-center flex mt-4 flex-wrap sm:flex-nowrap w-[75%] sm:w-full">
            <PrimaryButton
              onClick={() => router.push('/swap')}
              className="mb-[20px] w-full sm:w-max mx-0 sm:mr-4 "
            >
              Start Trading
            </PrimaryButton>
            <SecondaryButton
              onClick={() => setOpenWatchDecentralizedExchange(true)}
              className="mb-[20px] w-full sm:w-max mx-0 sm:mr-4 "
            >
              Watch How To
            </SecondaryButton>
          </div>
        </div>
        <div className="w-full px-[15px] sm:w-[50%] sm:max-w-[50%] order-1 sm:order-2 mb-[20px]">
          <img className="" src="images/home-page/LandingRocket.png" />
        </div>
      </div>
      <Dialog
        isOpen={openWatchDecentralizedExchange}
        onClose={() => setOpenWatchDecentralizedExchange(false)}
        slideFromBottom="none"
        maxWidth="915px"
        wrapperClass="fixed w-full h-screen top-0 left-0 z-100 flex flex-col items-center overflow-y-scroll py-20 no-scrollbar backdrop-blur"
      >
        <div className="hidden md:block">
          <iframe
            width="915"
            height="514"
            src="https://www.youtube.com/embed/MQ7MI3uujm0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block md:hidden">
          <iframe
            width="350"
            height="196"
            src="https://www.youtube.com/embed/MQ7MI3uujm0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Dialog>
      <Dialog
        isOpen={openWatchSetupAccount}
        onClose={() => setOpenWatchSetupAccount(false)}
        slideFromBottom="none"
        maxWidth="915px"
        wrapperClass="fixed w-full h-screen top-0 left-0 z-100 flex flex-col items-center overflow-y-scroll py-20 no-scrollbar backdrop-blur"
      >
        <div className="hidden md:block">
          <iframe
            width="915"
            height="514"
            src="https://www.youtube.com/embed/vWje_Gz5dX8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block md:hidden">
          <iframe
            width="350"
            height="196"
            src="https://www.youtube.com/embed/vWje_Gz5dX8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Dialog>
    </>
  )
}
export default FeatureSection
