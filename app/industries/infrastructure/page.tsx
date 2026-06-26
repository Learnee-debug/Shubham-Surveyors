import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Infrastructure & Highway Survey',
  description:
    'NHAI, PWD and railway corridor surveys. Precision linear mapping, cross-sections, and profile leveling for India\'s critical infrastructure.',
  alternates: { canonical: 'https://shubhamsurveyors.com/industries/infrastructure' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Infrastructure & Highway Survey Services',
  serviceType: 'Highway & Infrastructure Survey',
  description:
    'NHAI, PWD and railway corridor surveys. Precision linear mapping, cross-sections, and profile leveling for India\'s critical infrastructure.',
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${SITE.url}/industries/infrastructure`,
}

export default function InfrastructurePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <IndustryPageTemplate
      index="§ IND-01"
      sector="Infrastructure & Highways"
      headline="MAPPING INDIA'S MODERN FOUNDATIONS."
      intro="Delivering sub-centimeter topographical precision for the nation's most critical highway corridors, railway alignments, and structural marvels. Engineering truth, codified."
      coordinate="28.6139° N, 77.2090° E"
      capabilities={[
        { title: 'Highway Corridor Mapping', desc: 'End-to-end linear surveys for NHAI and PWD projects. Alignment, cross-sections, longitudinal profiles, and earthwork calculations.' },
        { title: 'Railway Alignment Surveys', desc: 'Track geometry surveys, level crossing mapping, and station area topography for Indian Railways and Metro Rail projects.' },
        { title: 'Bridge & Structure Surveys', desc: 'Foundation surveys, settlement monitoring, and as-built verification for bridges, flyovers, and elevated corridors.' },
        { title: 'Earthwork Volume Calculations', desc: 'Cut-and-fill analysis for road construction. Accurate volume estimates that prevent budget overruns and contractor disputes.' },
      ]}
      steps={[
        { num: '01', title: 'Alignment Reconnaissance', desc: 'Initial site walkthrough, control point establishment, and survey plan finalization.' },
        { num: '02', title: 'Corridor Survey', desc: 'Total Station and RTK DGPS field surveys along the entire project corridor.' },
        { num: '03', title: 'Data Processing', desc: 'Point cloud processing, cross-section generation, and volume calculations in AutoCAD.' },
        { num: '04', title: 'Report Delivery', desc: 'NHAI/PWD-compliant drawings, earthwork reports, and digital files delivered.' },
      ]}
      deliverables={[
        { format: 'Longitudinal Profile Drawings', standard: 'NHAI Standard', timeline: '7–14 days' },
        { format: 'Cross-Section Drawings @ 20m', standard: 'PWD Standard', timeline: '7–14 days' },
        { format: 'Earthwork Volume Report', standard: 'IS Code', timeline: '10–15 days' },
        { format: '.DWG / .PDF Files', standard: 'AutoCAD 2020+', timeline: 'Included' },
      ]}
      advantages={[
        { title: 'NHAI Empaneled', desc: 'Directly empaneled with NHAI for project surveys. Reports accepted without third-party verification.' },
        { title: '1,200+ km Mapped', desc: 'Over 1,200 km of highway corridors surveyed to sub-centimeter accuracy across India.' },
        { title: 'Court & DPR Ready', desc: 'All reports structured for use in Detailed Project Reports and legal dispute resolution.' },
      ]}
      statValue="1,200+"
      statLabel="KM OF HIGHWAYS MAPPED"
    />
    </>
  )
}
