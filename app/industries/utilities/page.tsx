import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Oil, Gas & Utilities Survey Services',
  description:
    'Pipeline corridor mapping, Right-of-Way surveys, utility asset management, and transmission line surveys across India.',
  alternates: { canonical: 'https://shubhamsurveyors.com/industries/utilities' },
}

export default function UtilitiesPage() {
  return (
    <IndustryPageTemplate
      index="§ IND-06"
      sector="Oil, Gas & Utilities"
      headline="PRECISION FOR CRITICAL INFRASTRUCTURE."
      intro="Oil, gas, and utility infrastructure cannot tolerate positional errors. Our surveys provide the spatial certainty required for pipeline routing, Right-of-Way acquisition, and long-term asset management."
      coordinate="23.0225° N, 72.5714° E"
      capabilities={[
        { title: 'Pipeline Corridor Mapping', desc: 'End-to-end route surveys for oil, gas, and water pipeline projects. Alignment alternatives analysis and optimal route selection support.' },
        { title: 'Right-of-Way Surveys', desc: 'Precise ROW boundary demarcation, land parcel identification, and compensation area calculation for all affected landowners.' },
        { title: 'Transmission Line Surveys', desc: 'Tower foundation surveys, line profiling, and clearance calculations for high-voltage transmission infrastructure.' },
        { title: 'As-Built Surveys', desc: 'Post-construction verification surveys for pipeline and cable infrastructure. Critical for operations, maintenance, and future expansion planning.' },
      ]}
      steps={[
        { num: '01', title: 'Route Study', desc: 'Desktop study of proposed corridor using satellite data and cadastral records.' },
        { num: '02', title: 'Corridor Survey', desc: 'Field survey of proposed and alternate routes with cross-section profiles.' },
        { num: '03', title: 'ROW Calculation', desc: 'Land parcel intersection analysis and compensation area computation.' },
        { num: '04', title: 'Report Delivery', desc: 'Pipeline profile, ROW report, and land acquisition documentation.' },
      ]}
      deliverables={[
        { format: 'Pipeline Alignment Sheets', standard: 'PNGRB Format', timeline: '10–14 days' },
        { format: 'ROW Strip Map', standard: 'National Standard', timeline: '10–14 days' },
        { format: 'Land Acquisition Statement', standard: 'Revenue Format', timeline: '14–21 days' },
        { format: 'As-Built Survey Records', standard: 'Client Standard', timeline: 'Variable' },
      ]}
      advantages={[
        { title: 'PNGRB Experience', desc: 'Surveys delivered for GAIL, GSPC, and private sector pipeline projects across Gujarat, Maharashtra, and Rajasthan.' },
        { title: 'Sensitive Corridor Expertise', desc: 'Experience navigating survey logistics through forest land, revenue land, and private holdings simultaneously.' },
        { title: 'Compensation Documentation', desc: 'Comprehensive land acquisition documentation that minimizes legal challenge from affected landowners.' },
      ]}
      statValue="500+"
      statLabel="KM PIPELINE CORRIDORS SURVEYED"
    />
  )
}
