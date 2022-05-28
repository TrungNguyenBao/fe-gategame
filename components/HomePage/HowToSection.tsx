import React from 'react'
import { Title2 } from '../Common/Title'

const HowTo: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <section className='mb-16'>
      <Title2 className="mb-6">How to...?</Title2>
      <div className="bg-grayBg rounded-lg overflow-hidden">
        <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-4 text-16 leading-7" role="presentation">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab === 1
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
                Play2Earn
              </button>
            </li>
            <li className="mr-4 text-16 leading-7">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab === 2
                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                    : `opacity-50`
                }`}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
              >
                Win2Earn
              </button>
            </li>
            <li className="mr-4 text-16 leading-7" role="presentation">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab === 3
                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                    : `opacity-50`
                }`}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
              >
                NFT
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-0 pl-4 pr-4 pb-6">
          {openTab === 1 && (
            <div className="p-2 flex flex-col">
              <div className="text-16 leading-6 font-normal">
                Play2Earn is one of the NFT game types where players focus on
                earning. Players earn different items with provable scarcity
                that belong to them purely. The concept opens up the multiverse
                idea that allows gamers to use their items in multiple games.
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
          {openTab === 2 && (
            <div className="p-2 flex flex-col">
              <div className="text-16 leading-6 font-normal">
                Win2Earn is a online gaming platform and we use various free and
                paid scripts/codes to compile our website. We only collect your
                personal data which is necessary to identify you. We try our
                best to keep all your data secure but in any case we don’t take
                any responsibility of your data and you should use our services
                at your own risk.
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
          {openTab === 3 && (
            <div className="p-2 flex flex-col">
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
    </section>
  )
}

export default HowTo
