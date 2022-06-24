import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'

function Multichain() {
  return (
    <>
      <div className="w-full py-28 bg-white text-gray-800">
        <div className="flex container flex-wrap mx-auto items-center">
          <div className="w-full md:w-1/3 p-5">
            <Title2 classname="text-gray-800">Multichain</Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`Through our API, GateGame allows users and game makers to sell a variety of their in-game items. Everything from avatars to skins and accounts. After that, players can mint these NFT items into any of our supported public chains. Gategame always gives players complete control over their assets and NFTs.`}
            </div>
          </div>
          <div className="w-full md:w-2/3 p-5">
            <ImageWithFallback
              className="object-contain"
              width="100%"
              height={30}
              layout="responsive"
              src={'https://gategame.io/images/gate_game/multichin.png'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Multichain
