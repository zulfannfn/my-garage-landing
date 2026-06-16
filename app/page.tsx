import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import FeaturesSection from './components/FeaturesSection'
import ScreenshotsSection from './components/ScreenshotsSection'
import WhyChooseSection from './components/WhyChooseSection'
import RoadmapSection from './components/RoadmapSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <WhyChooseSection />
      <RoadmapSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
