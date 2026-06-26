import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Smart Cities & Urban GIS Survey',
  description:
    'GIS base mapping, utility surveys, digital twin data, and smart city infrastructure surveys across India.',
  alternates: { canonical: 'https://shubhamsurveyors.com/industries/smart-cities' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Cities & Urban GIS Survey Services',
  serviceType: 'Urban GIS Survey',
  description:
    'GIS base mapping, utility surveys, digital twin data, and smart city infrastructure surveys across India.',
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${SITE.url}/industries/smart-cities`,
}

export default function SmartCitiesPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <IndustryPageTemplate
      index="§ IND-05"
      sector="Smart Cities & Urban Planning"
      headline="THE DIGITAL TWIN OF THE REAL CITY."
      intro="Smart city infrastructure demands survey-grade spatial accuracy. From utility corridor mapping to digital twin base data, we provide the foundational geospatial intelligence for India's urban future."
      coordinate="12.9716° N, 77.5946° E"
      capabilities={[
        { title: 'GIS Base Mapping', desc: 'Comprehensive ground survey for city-scale GIS databases. Utility assets, road networks, and building footprints captured to centimeter accuracy.' },
        { title: 'Utility Mapping', desc: 'Underground and above-ground utility surveys — water, sewage, power, telecom. GPS-tagged asset inventories for municipal management systems.' },
        { title: 'Digital Twin Data Capture', desc: 'Survey-grade 3D data for building information modeling (BIM) and city-scale digital twin development platforms.' },
        { title: 'Urban Master Plan Support', desc: 'Topographic surveys and existing condition mapping for urban development authority master planning and zoning decisions.' },
      ]}
      steps={[
        { num: '01', title: 'Survey Planning', desc: 'Control network design, GIS schema definition, and data capture plan for the project area.' },
        { num: '02', title: 'Ground Survey', desc: 'Systematic field data capture using Total Station, RTK DGPS, and utility detection equipment.' },
        { num: '03', title: 'GIS Processing', desc: 'Data import, topology correction, attribute population, and quality control in ArcGIS/QGIS.' },
        { num: '04', title: 'Data Delivery', desc: 'GIS layers, attribute databases, and technical documentation in client-specified format.' },
      ]}
      deliverables={[
        { format: 'GIS Shapefiles (.SHP)', standard: 'EPSG 4326 / UTM', timeline: '14–21 days' },
        { format: 'KML/KMZ for Google Earth', standard: 'WGS84', timeline: '14–21 days' },
        { format: 'AutoCAD Base Map (.DWG)', standard: 'City Standard', timeline: '14–21 days' },
        { format: 'Asset Database (.CSV)', standard: 'Municipal Format', timeline: '14–21 days' },
      ]}
      advantages={[
        { title: 'Smart City Mission Experience', desc: 'Survey work delivered for Smart City Mission projects in Pune, Nashik, and Aurangabad.' },
        { title: 'GIS Integration Ready', desc: 'All data delivered in formats compatible with Esri ArcGIS, QGIS, and municipal ERP systems.' },
        { title: 'Survey-Grade Accuracy', desc: 'GIS data captured at survey grade — not from satellite imagery — ensuring accuracy for engineering decisions.' },
      ]}
      statValue="1cm"
      statLabel="GIS DATA ACCURACY"
    />
    </>
  )
}
