import CollectionsGallery from '../components/latest/collections/CollectionsGallery'
import LookingAhead from '../components/common/LookingAhead'
import CollectionsHero from '../components/latest/collections/CollectionsHero'
import CollectionsTabsIntro from '../components/latest/collections/CollectionsTabsIntro'
import PremiumResidential from '../components/latest/collections/PremiumResidential'

const Collections = () => (
  <>
    <CollectionsHero />
    <CollectionsTabsIntro />
    <PremiumResidential />
    <CollectionsGallery />
    <LookingAhead />
  </>
)

export default Collections
