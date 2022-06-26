// TabSection.tsx
import { useState } from 'react'
import ImageWithFallback from '../../Common/Image'
import { Title2 } from '../../Common/Title'
export default function TabSection() {
  const [active, setActive] = useState(0)
  const data = [
    {
      btn: 'Minting',
      title: 'Minting',
      thumb: 'https://gategame.io/images/gate_game/minting.png',
      content:
        'Minting an NFT item is simple. However, in the real game environment, there are several more item interactions that may make the NFT-item interaction complex. Gategame works with several MMO games to make sure that we cover all possible item interactions within our SDK. We are committed to continuously updating our SDK with new NFT items logic and working to fix any noticed or reported bugs.',
    },
    {
      btn: 'MarketPlace',
      title: 'MARKETPLACE',
      thumb: 'https://gategame.io/images/gate_game/marketplace.png',
      content: `Gategame understands that marketplace interaction is important for all NFT games. We are focused on creating both a great marketplace experience for game developers and players, as well as an API so game developers can work directly with our marketplace.

      Game developers are in control of their NFT items. That control includes when to list, at which price to list, stock management, and the minting process (with fee). Gategame provides everything developers need to connect their games to the NFT marketplace.`,
    },
    {
      btn: 'Action House',
      title: 'AUCTION HOUSE',
      thumb: 'https://gategame.io/images/gate_game/auctionhouse.png',
      content: `Auction House is Gategame’s special marketplace. We combined all the necessary features from the popular MMO Auction House, with the Blockchain, while remaining aware of Blockchain advantages and limitations.

      Similar to the normal marketplace, in the Auction House, game developers are in total control of their NFT items and the listing process, so long as they comply with the Gategame rules for auctioning.`,
    },
  ]
  return (
    <div className="container container mx-auto md:pt-10 px-2">
      <div className="w-full rounded-2xl text-white my-10 md:my-16 pt-10">
        <div className="flex w-full justify-center">
          <div className="flex justify-center rounded-2xl overflow-hidden">
            {/*  */}
            {data.map((d, i) => {
              return (
                <div
                  className={`uppercase p-2 text-12 sm:text-16 whitespace-nowrap sm:p-5 bg-[#212529] hover:bg-gray-200 hover:text-blue-600 cursor-pointer ${
                    active != i ? '' : 'bg-gray-200 text-blue-600'
                  }`}
                  onClick={() => {
                    setActive(i)
                  }}
                >
                  {d.btn}
                </div>
              )
            })}
            {/*  */}
          </div>
        </div>
        {data.map((d, i) => (i !== active ? <></> : <TabView {...d} />))}
      </div>
    </div>
  )
}

function TabView(props: {
  btn: string
  title: string
  thumb: string
  content: string
}) {
  return (
    <div className="flex flex-wrap w-full items-center">
      <div className="relative min-h-[300px] w-full md:w-1/2 py-10">
        <ImageWithFallback
          className="object-contain"
          width="100%"
          height="100%"
          layout="responsive"
          src={props.thumb}
        />
      </div>
      <div className="relative min-h-[300px] w-full md:w-1/2 md:p-16">
        <Title2>{props.title}</Title2>
        <p className="mt-8 md:mt-16 whitespace-pre-wrap text-gray-600">
          {props.content}
        </p>
      </div>
    </div>
  )
}
