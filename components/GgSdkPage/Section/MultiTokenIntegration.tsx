import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'

function MultiTokenIntegration() {
  return (
    <>
      <div className="w-full py-20 bg-[#495057]">
        <div className="container mx-auto">
          <div className="w-1/3 p-5 text-center mx-auto">
            <Title2 classname="">Multi Token Integration</Title2>
            <div className="whitespace-pre-wrap mt-10 text-gray-900">
              {
                'The Gategame website and SDK have been built to provide every piece of functionality that a game developer will need to manage their gaming economy. This includes the ability to work with multiple tokens (both in-game tokens and public chain tokens).'
              }
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-5">
              <ImageWithFallback
                className="object-contain"
                width="100%"
                height="100%"
                layout="responsive"
                src={'https://gategame.io/images/gate_game/multi-token.png'}
              />
            </div>
            <div className="w-full md:w-1/2 p-5">
              <ImageWithFallback
                className="object-contain"
                width="100%"
                height="100%"
                layout="responsive"
                src={'https://gategame.io/images/gate_game/multi-token-2.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiTokenIntegration
