import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Agriculture & Land Survey Services',
  description:
    'Precision land surveys for agricultural land demarcation, irrigation planning, soil surveys, and land consolidation in India.',
  alternates: { canonical: 'https://www.shubhamsurveyors.in/industries/agriculture' },
}

export default function AgriculturePage() {
  return (
    <IndustryPageTemplate
      index="§ IND-04"
      sector="Agriculture & Land"
      headline="PRECISION FOR EVERY ACRE."
      intro="Agricultural land surveys require the same precision as any engineering project — water follows terrain, boundary disputes destroy livelihoods, and crop planning depends on accurate contour data."
      coordinate="20.7002° N, 77.0082° E"
      capabilities={[
        { title: 'Agricultural Land Demarcation', desc: 'Precise boundary marking for agricultural parcels as per 7/12 extract and village maps. Essential for land purchase, consolidation, and dispute resolution.' },
        { title: 'Irrigation Channel Layout', desc: 'Topographic surveys and contour mapping for gravity-fed irrigation design. Ensures optimal water flow and minimal earthwork cost.' },
        { title: 'Land Leveling Surveys', desc: 'Precision surveys for field leveling — critical for uniform water distribution, reduced erosion, and higher crop yield.' },
        { title: 'Land Acquisition Support', desc: 'Joint measurement surveys, area calculation, and compensation documentation for government land acquisition processes.' },
      ]}
      steps={[
        { num: '01', title: 'Village Map Study', desc: 'Analysis of Gat map, 7/12 extract, and revenue records.' },
        { num: '02', title: 'Field Survey', desc: 'RTK DGPS boundary survey and topographic mapping of the agricultural land.' },
        { num: '03', title: 'Data Processing', desc: 'Contour map generation, area calculation, and boundary plan drafting.' },
        { num: '04', title: 'Revenue Report', desc: 'Signed survey report accepted by Taluka Revenue Office.' },
      ]}
      deliverables={[
        { format: 'Land Demarcation Plan', standard: 'Revenue Compliant', timeline: '3–5 days' },
        { format: 'Contour Map (0.5m interval)', standard: 'IS Standard', timeline: '5–7 days' },
        { format: 'Area Calculation Statement', standard: 'Taluka Office Format', timeline: '3–5 days' },
        { format: 'Irrigation Layout Plan', standard: 'Irrigation Dept Format', timeline: '7–10 days' },
      ]}
      advantages={[
        { title: 'Revenue Department Recognized', desc: 'Our agricultural survey reports are accepted by Taluka offices across Maharashtra without objection.' },
        { title: 'Village Map Expertise', desc: 'Deep expertise in Gat maps, village cadastral records, and historical boundary documentation.' },
        { title: 'Dispute Resolution', desc: 'Court-admissible survey evidence that has resolved hundreds of agricultural boundary disputes.' },
      ]}
      statValue="7/12"
      statLabel="EXTRACT COMPLIANT SURVEYS"
    />
  )
}
