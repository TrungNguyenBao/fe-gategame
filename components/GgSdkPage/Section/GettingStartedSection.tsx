import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'

export default function GettingStartedSection() {
  return (
    <div className="w-full rounded-2xl flex flex-wrap text-white my-16 bg-[#495057] p-20">
      <div className="w-full md:w-1/2 xl:w-5/12 px-6">
        <Title2>Getting Started</Title2>
        <div className="py-10">
          <div className="text-16 mb-5 flex">
            <span className="text-20 text-blue-600 mr-3">◉</span> Apply for a
            Gategame developer account.
          </div>
          <div className="text-16 mb-5 flex">
            <span className="text-20 text-blue-600 mr-3">◉</span> Setting up the
            time configuration for the refresh_key and access_key.
          </div>
          <div className="text-16 mb-5 flex">
            <span className="text-20 text-blue-600 mr-3">◉</span> I ntegrate
            with the Gategame API. Start with /auth to gain the access_key and
            refresh_key.
          </div>
          <div className="text-16 mb-5 flex">
            <span className="text-20 text-blue-600 mr-3">◉</span> Within the
            Account Service, Inventory Service, and Achievement Service panels,
            game developers can focus only on the Player and Gameplay without
            worrying about Blockchain level logic.
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 xl:w-7/12 relative">
        <ImageWithFallback
          className="object-contain w-full"
          layout="fill"
          src={'https://gategame.io/images/gate_game/getting-started.png'}
        />
      </div>
    </div>
  )
}
