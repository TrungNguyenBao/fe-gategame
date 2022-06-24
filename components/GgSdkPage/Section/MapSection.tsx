import { ButtonLinkPrimary } from 'components/Common/Button'
import ImageWithFallback from 'components/Common/Image'

export default function MapSection() {
  return (
    <div className="w-full relative block text-white h-[400px] my-16">
      <ImageWithFallback
        className="object-contain w-full"
        layout="fill"
        src={'https://gategame.io/images/gate_game/sdk-banner.png'}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <ButtonLinkPrimary href="#">Get Started</ButtonLinkPrimary>
      </div>
    </div>
  )
}
