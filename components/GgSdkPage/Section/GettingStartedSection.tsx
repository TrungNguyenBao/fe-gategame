import ImageWithFallback from '../../../components/Common/Image'
import { Title2 } from '../../../components/Common/Title'

export default function GettingStartedSection() {
  return (
    <div className="container container mx-auto md:pt-10 px-2">
      <div className="w-full rounded-2xl flex flex-col-reverse lg:flex-row flex-wrap text-white my-10 sm:my-16 bg-[#495057] p-5 md:p-20">
        <div className="w-full lg:w-1/2 xl:w-5/12 md:px-6">
          <Title2>Getting Started</Title2>
          <div className="py-4 md:py-10">
            {[
              'Apply for a Gategame developer account.',
              ' Setting up the time configuration for the refresh_key and access_key.',
              'I ntegrate with the Gategame API. Start with /auth to gain the access_key and refresh_key.',
              'Within the Account Service, Inventory Service, and Achievement Service panels, game developers can focus only on the Player and Gameplay without worrying about Blockchain level logic.',
            ]?.map((text) => (
              <div className="text-16 mr-b md:mb-5 inline-block md:flex">
                <span className="text-15 md:text-20 text-blue-600 mr-1 md:mr-3">
                  ◉
                </span>{' '}
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-7/12 ">
          <div className="pb-3/4 relative">
            <ImageWithFallback
              className="object-contain w-full"
              layout="fill"
              src={'https://gategame.io/images/gate_game/getting-started.png'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
