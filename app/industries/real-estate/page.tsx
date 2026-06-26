import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Real Estate & RERA Survey Services',
  description:
    'RERA-compliant boundary demarcation, layout surveys, and carpet area certification for developers across India.',
  alternates: { canonical: 'https://shubhamsurveyors.com/industries/real-estate' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Real Estate & Township Survey Services',
  serviceType: 'RERA & Real Estate Survey',
  description:
    'RERA-compliant boundary demarcation, layout surveys, and carpet area certification for developers across India.',
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${SITE.url}/industries/real-estate`,
}

export default function RealEstatePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <IndustryPageTemplate
      index="§ IND-02"
      sector="Real Estate & Township Development"
      headline="THE GEOMETRY OF VALUE."
      intro="In real estate, millimeters translate to marketable square footage. Our dual-frequency RTK GNSS and robotic total stations eliminate spatial ambiguity, ensuring legal boundaries and carpet areas are documented with unimpeachable accuracy."
      coordinate="18.5204° N, 73.8567° E"
      capabilities={[
        { title: 'Topographic Mapping', desc: 'High-density terrain modeling for optimal master planning. Detailed contour generation to inform drainage, grading, and infrastructure layout.' },
        { title: 'Layout Demarcation', desc: 'Transposing CAD masterplans onto physical terrain. Pinpoint pegging of plots, roads, and utilities prior to earthworks commencement.' },
        { title: 'RERA Compliance Surveys', desc: 'Statutory boundary verification, built-area calculation, and carpet area certification aligning strictly with RERA standards.' },
        { title: 'Encroachment Detection', desc: 'Precise comparison of registered plan vs. physical reality. Court-admissible documentation of any encroachment.' },
      ]}
      steps={[
        { num: '01', title: 'Document Review', desc: 'Analysis of 7/12 extract, property card, and approved layout plan.' },
        { num: '02', title: 'Boundary Survey', desc: 'DGPS-controlled field survey of all boundary pillars and corners.' },
        { num: '03', title: 'Layout Demarcation', desc: 'Physical pegging of all plot corners and road edges per approved plan.' },
        { num: '04', title: 'RERA Certificate', desc: 'Signed area statement and layout plan submitted to RERA authority.' },
      ]}
      deliverables={[
        { format: 'Boundary Survey Report', standard: 'RERA Compliant', timeline: '5–7 days' },
        { format: 'Carpet Area Statement', standard: 'ISO 9001:2015', timeline: '3–5 days' },
        { format: 'Layout Demarcation Plan', standard: 'AutoCAD .DWG', timeline: '7–10 days' },
        { format: 'As-Built Verification', standard: 'Court Admissible', timeline: '10–14 days' },
      ]}
      advantages={[
        { title: 'RERA Specialist', desc: '100% of our RERA survey reports have been accepted by state RERA authorities without objection.' },
        { title: '± 2mm Precision', desc: 'Carpet area calculations accurate to ± 2mm — well within RERA tolerance requirements.' },
        { title: 'Legal Standing', desc: 'All survey reports carry legal standing for property registration, court proceedings, and bank valuation.' },
      ]}
      statValue="±2MM"
      statLabel="CARPET AREA PRECISION"
    />
    </>
  )
}
