import { ButtonLinkPrimary } from 'components/Common/Button'
import ImageWithFallback from 'components/Common/Image'
import { Title2 } from 'components/Common/Title'
import { Radio } from 'antd'
import MapSection from './Section/MapSection'
import GettingStartedSection from './Section/GettingStartedSection'
import TabSection from './Section/TabSection'
import MergingSplitingSection from './Section/MergingSplitingSection'
import Achievement from './Section/Achievement'
import MultiTokenIntegration from './Section/MultiTokenIntegration'
import Multichain from './Section/Multichain'
import UnityReady from './Section/UnityReady'
import GlobalNFTDiagram from './Section/GlobalNFTDiagram'
import TellUs from './Section/TellUs'
const GgSdkPage = () => {
  return (
    <>
      <div className="container container mx-auto pt-10">
        <MapSection />

        <GettingStartedSection />

        <TabSection />
      </div>
      <MergingSplitingSection />
      <Achievement />
      <MultiTokenIntegration />
      <Multichain />
      <UnityReady />
      <GlobalNFTDiagram />
      <TellUs />
    </>
  )
}

export default GgSdkPage
