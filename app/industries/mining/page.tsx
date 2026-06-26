import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mining & Earthworks Survey Services',
  description:
    'Volumetric measurements, stockpile analysis, lease boundary verification, and mine plan support for India\'s mineral sector.',
  alternates: { canonical: 'https://shubhamsurveyors.com/industries/mining' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mining & Earthworks Volumetric Survey Services',
  serviceType: 'Mining Volumetric Survey',
  description:
    'Volumetric measurements, stockpile analysis, lease boundary verification, and mine plan support for India\'s mineral sector.',
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${SITE.url}/industries/mining`,
}

export default function MiningPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <IndustryPageTemplate
      index="§ IND-03"
      slug="mining"
      sector="Mining & Earthworks"
      headline="MINING & EARTHWORKS VOLUMETRIC PRECISION."
      intro="Delivering absolute geometric control for India's mineral and extraction sectors. Rigorous data capture for resource management and regulatory compliance."
      coordinate="21.2514° N, 81.6296° E"
      capabilities={[
        { title: 'Volumetric Measurements', desc: 'High-density point cloud generation for accurate cut and fill calculations. Critical for royalty computation and extraction reporting.' },
        { title: 'Stockpile Analysis', desc: 'Periodic inventory reconciliation using drone-assisted and terrestrial scanning. Accurate to ± 0.1% of true volume.' },
        { title: 'Lease Boundary Verification', desc: 'Statutory boundary demarcation adhering to government guidelines. Essential for avoiding illegal extraction penalties.' },
        { title: 'Mine Plan Support', desc: 'Topographical mapping for extraction strategy and safety planning. Progressive survey updates as extraction advances.' },
      ]}
      steps={[
        { num: '01', title: 'Control Establishment', desc: 'Setup of permanent survey control monuments across the mining lease area.' },
        { num: '02', title: 'Field Survey', desc: 'Total Station and DGPS survey of all active extraction faces and stockpiles.' },
        { num: '03', title: 'Volume Computation', desc: 'DTM comparison and cross-section analysis for accurate volume computation.' },
        { num: '04', title: 'Statutory Report', desc: 'Government-accepted volumetric report for royalty calculation and compliance.' },
      ]}
      deliverables={[
        { format: '3D Digital Terrain Models', standard: 'IBM Format', timeline: '5–7 days' },
        { format: 'Triangulated Irregular Networks', standard: 'Mining Standard', timeline: '5–7 days' },
        { format: 'Detailed Cross-Sections', standard: 'Statutory Compliant', timeline: '7–10 days' },
        { format: 'Contour Mapping @ 0.5m', standard: 'Govt Accepted', timeline: '7–10 days' },
      ]}
      advantages={[
        { title: '30 Years Mining Experience', desc: 'Surveying active mines in Chhattisgarh, Odisha, Jharkhand, and Rajasthan since 1994.' },
        { title: 'Statutory Compliance', desc: 'All volumetric reports stand up to scrutiny from IBM (Indian Bureau of Mines) inspectors.' },
        { title: 'Safety Planning', desc: 'Survey data used directly for slope stability analysis and safety planning by mine engineers.' },
      ]}
      statValue="±0.001"
      statLabel="MM PRECISION STANDARD"
    />
    </>
  )
}
