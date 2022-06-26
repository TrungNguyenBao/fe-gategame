import { ButtonLinkPrimary } from '../../Common/Button'
import ImageWithFallback from '../../Common/Image'

export default function MapSection() {
  return (
    <div className="container container mx-auto md:pt-10 px-2">
      <div className="w-full relative pb-9/16 text-white md:my-16">
        <ImageWithFallback
          className="object-contain"
          layout="fill"
          src={'https://gategame.io/images/gate_game/sdk-banner.png'}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <ButtonLinkPrimary href="#">Get Started</ButtonLinkPrimary>
        </div>
      </div>
    </div>
  )
}
