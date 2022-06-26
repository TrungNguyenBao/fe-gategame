import ImageWithFallback from '../../Common/Image'
import { Title2 } from '../../Common/Title'

function UnityReady() {
  return (
    <>
      <div className="w-full py-8 md:py-28 bg-[#202020]">
        <div className="container mx-auto">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-5 text-center mx-auto">
            <Title2 className="">Unity Ready</Title2>
            <div className="whitespace-pre-wrap mt-10">
              {
                'Soon, Gategame’s SDK will be available on Unity as a plugin. Currently, some of the external Unity games (such as the Stellaverse games) are already working with Gategame SDK Beta. After we launch the Unity Gategame API, we will start working on other popular game engines such as Unreal and others.                '
              }
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 relative h-96 md:p-14">
              <ImageWithFallback
                className="object-contain"
                layout="fill"
                src={'https://gategame.io/images/gate_game/unity.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnityReady
