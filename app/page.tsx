import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import MarqueeStrip from '@/components/sections/MarqueeStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CostEstimator from '@/components/sections/CostEstimator'
import GroundTruth from '@/components/sections/GroundTruth'
import IndustriesGrid from '@/components/sections/IndustriesGrid'
import ProjectsPortfolio from '@/components/sections/ProjectsPortfolio'
import KnowledgePreview from '@/components/sections/KnowledgePreview'
import Testimonials from '@/components/sections/Testimonials'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Land Surveyor India | DGPS & Total Station Surveys | Shubham Surveyors',
  description:
    "India's most trusted land surveying firm since 1994. DGPS, Total Station, topographic, and RERA-compliant surveys across all India. Government certified.",
  alternates: { canonical: 'https://shubhamsurveyors.com' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesGrid />
      <CostEstimator />
      <GroundTruth />
      <IndustriesGrid />
      <ProjectsPortfolio />
      <KnowledgePreview />
      <Testimonials />
      <ContactSection />
    </>
  )
}
