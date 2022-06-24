import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'

function GlobalNFTDiagram() {
  return (
    <>
      <div className="w-full py-28 bg-white text-gray-800">
        <div className="flex container flex-wrap mx-auto items-center">
          <div className="w-full md:w-1/3 p-5">
            <Title2 classname="text-gray-800">Global NFT Diagram</Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`Pylon is our global NFT item. It can provide a variety of buffs for both in-game activities (like attack dmg and movement speed) and on-chain activities (like the ability to earn tokens). Unlike a normal NFT item, Pylon's buff can be applied across all Gategame games.

Game developers can also consider it as a demonstration of our Global NFT System. It allows their in-game item to be used in other games across the multiverse. This can greatly enhance their product recognition as well as access to a much larger player base.`}
            </div>
          </div>
          <div className="w-full md:w-2/3 p-5">
            <ImageWithFallback
              className="object-contain"
              width="100%"
              height={50  }
              layout="responsive"
              src={'	https://gategame.io/images/gate_game/globalnft.png'}
            />
          </div>
        </div>

        <div className="flex container flex-wrap mx-auto items-center">
          <div className="w-full md:w-2/3 p-5">
            <ImageWithFallback
              className="object-contain"
              width="100%"
              height={50  }
              layout="responsive"
              src={'https://gategame.io/images/gate_game/heroesorigin.png'}
            />
          </div>
          <div className="w-full md:w-1/3 p-5">
            <Title2 classname="text-gray-800">
              Secure Deposit/ Withdrawal Process
            </Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`We’ve worked hard to ensure that our deposit and withdrawal process can be trusted and secure. We want to enable game developers to interact with items and currency in a secure and transparent manner.`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GlobalNFTDiagram
