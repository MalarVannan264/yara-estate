import AboutPhilosophy from '../components/home/AboutPhilosophy'
import CuratedExperiences from '../components/home/CuratedExperiences'
import FeaturedCollections from '../components/home/FeaturedCollections'
import HeroSection from '../components/home/HeroSection'
import ImmersiveGallery from '../components/home/ImmersiveGallery'
import InvestmentExperience from '../components/home/InvestmentExperience'
import LifestyleEditorial from '../components/home/LifestyleEditorial'
import LocationsSection from '../components/home/LocationsSection'
import PrivateConsultation from '../components/home/PrivateConsultation'
import Testimonials from '../components/home/Testimonials'
import WhyYARA from '../components/home/WhyYARA'

const Home = () => (
  <>
    <HeroSection />
    <AboutPhilosophy />
    <FeaturedCollections />
    <CuratedExperiences />
    <WhyYARA />
    <ImmersiveGallery />
    <LifestyleEditorial />
    <InvestmentExperience />
    <LocationsSection />
    <Testimonials />
    <PrivateConsultation />
  </>
)

export default Home
