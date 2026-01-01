import HeroAnimated from '@/components/home/HeroAnimated'
import FeatureGrid from '@/components/home/FeatureGrid'
import StatsCounter from '@/components/home/StatsCounter'
import CaseStudies from '@/components/home/CaseStudies'
import LogoWall from '@/components/home/LogoWall'
import LocationSection from '@/components/home/LocationSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroAnimated />
      <FeatureGrid />
      <StatsCounter />
      <CaseStudies />
      <LogoWall />
      <LocationSection />
      <CTASection />
    </>
  )
}
