import ImageWithFallback from '../../../components/Common/Image'
import { Title2 } from '../../../components/Common/Title'

function Achievement() {
  return (
    <>
      <div className="w-full py-20 ">
        <div className="flex container flex-wrap mx-auto items-center">
          <div className="w-full  lg:w-1/3 p-5">
            <Title2 className="">Achievement</Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`is the central system of GG system, its purpose is to accurately evaluate the contributions of player, KOL, curator, thereby allowing GG system to give the corresponding reward.

The Calculator is an AI system that values ​a player's account based on achievements and possessions.

In addition to that, The Calculator calculates how much can be earned from different games based on the number of NFTs or experience players currently have.`}
            </div>
          </div>
          <div className="w-full  lg:w-2/3 p-5">
            <ImageWithFallback
              className="object-contain"
              width="100%"
              height={30}
              layout="responsive"
              src={'https://gategame.io/images/gate_game/achive-img.png'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievement
