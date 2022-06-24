import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'

function TellUs() {
  return (
    <>
      <div className="w-full py-28 ">
        <div className="flex container flex-wrap mx-auto items-center">
          <div className="w-full md:w-7/12 p-8">
            <Title2 classname="text-gray-800">
              Tell us about your project
            </Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`Through the API system, GateGame allows users and game makers to sell a variety of their in-game items: avatars, items, skins... and accounts. All with the support of The Calculator pricing system.`}
            </div>
            <textarea
              placeholder="Write your message here..."
              className="rounded-md w-2/3 border-gray-600 background-black mt-8 p-4"
            />
            <div className="flex mt-10">
              <div className=" bg-[#0a94f2] p-5 px-10 rounded-[12px] flex dark:text-white text-gray-700 text-center justify-center items-center">
                CONNECT WALLET
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 p-8">
            <ImageWithFallback
              className="object-contain"
              width="100%"
              height={'100%'}
              layout="responsive"
              src={'	https://gategame.io/images/gate_game/project.png'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TellUs
