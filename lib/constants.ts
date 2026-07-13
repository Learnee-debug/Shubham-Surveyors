export const SITE = {
  name: 'Shubham Surveyors',
  tagline: 'Precision surveys. Proven results. Trusted by India since 1994.',
  phone: '+91 98506 77816',
  phoneAlt: '+91 94225 44212',
  whatsappNumber: '919850677816',
  email: 'shubhamsurveyors12@gmail.com',
  address: 'B 1 Wing, Flat No. 211, Forest Castle, Vetal Nagar, Ambegaon (Bk), Pune - 411046',
  addressLonavala: 'Shop.13,14,15, Municipal Complex, Siddharth Nagar, Lonavala, Maharashtra 410401',
  founded: '1994',
  yearsActive: 30,
  projectsDelivered: 5000,
  statesCovered: 29,
  url: 'https://shubhamsurveyors.com',
  sameAs: [
    'https://www.justdial.com/Pune/Shubham-Surveyors-Near-Bhairavnath-Temple-Ambegaon-Budruk/020PXX20-XX20-141128182743-V7E4_BZDET',
    'https://www.indiamart.com/shubham-surveyors/',
    'https://share.google/JKLJvPtG0oYyN5k8y',
  ],
} as const

export const NAV_LINKS = [
  { label: 'Services',   href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Knowledge',  href: '/knowledge' },
  { label: 'About',      href: '/about' },
] as const

export const PRICING = {
  boundary:      { min: 5000,  max: 10000, unit: 'acre' as const, label: 'Boundary Survey' },
  total_station: { min: 5000,  max: 20000, unit: 'acre' as const, label: 'Total Station' },
  rtk_dgps:      { min: 8000,  max: 30000, unit: 'acre' as const, label: 'RTK DGPS' },
  highway:       { min: 2500,  max: 4000,  unit: 'km'   as const, label: 'Highway Corridor' },
  layout_rera:   { min: 10000, max: 25000, unit: 'acre' as const, label: 'Layout / RERA' },
  gis:           { min: 15000, max: 40000, unit: 'acre' as const, label: 'GIS Mapping' },
}

export const SERVICES = [
  {
    index: 'SRV-01',
    title: 'Boundary & Land Surveys',
    description: 'Precise demarcation of property lines ensuring zero encroachment and full legal clarity.',
    tags: ['RERA COMPLIANT', 'COURT READY', '.DWG .DXF'],
    href: '/services#boundary',
    coordinate: '18.5204° N',
  },
  {
    index: 'SRV-02',
    title: 'Topographic Surveys',
    description: 'High-density elevation mapping for architectural planning and hydrological analysis.',
    tags: ['CONTOUR MAPS', 'AUTOCAD', 'BIM READY'],
    href: '/services#topo',
    coordinate: '73.8567° E',
  },
  {
    index: 'SRV-03',
    title: 'RTK DGPS Surveys',
    description: 'Real-Time Kinematic satellite navigation for vast area surveys with sub-centimeter fixes.',
    tags: ['SUB-CM ACCURACY', 'GOVT GRADE', '.SHP .DEM'],
    href: '/services#dgps',
    coordinate: '±0.5cm',
  },
  {
    index: 'SRV-04',
    title: 'Infrastructure & Highway',
    description: 'Linear mapping for routing, cross-sections, and profile leveling. NHAI/PWD standards.',
    tags: ['NHAI STANDARD', 'RAILWAY', 'CORRIDOR MAPS'],
    href: '/services#highway',
    coordinate: '50km/day',
  },
  {
    index: 'SRV-05',
    title: 'Regulatory & Mojani',
    description: 'TILR guidelines, Mojani procedures, Zone Certificates, Part Plans. 30 years of regulatory depth.',
    tags: ['TILR', 'MOJANI', '7/12 EXTRACT'],
    href: '/services#regulatory',
    coordinate: 'MH REG',
  },
  {
    index: 'SRV-06',
    title: 'GIS & Digital Mapping',
    description: 'GIS data capture, digital terrain models, base data for smart city infrastructure.',
    tags: ['GIS LAYERS', 'DIGITAL TWIN', '.SHP .KML'],
    href: '/services#gis',
    coordinate: 'WGS84',
  },
] as const

export const INDUSTRIES = [
  {
    index: '§ 03.1',
    slug: 'infrastructure',
    title: 'Infrastructure & Highways',
    description: 'RTK DGPS corridor mapping, railway alignments, bridge surveys. NHAI and PWD certified deliverables.',
    points: ['Highway corridor mapping', 'Railway alignment surveys', 'Bridge & structural surveys', 'NHAI/PWD standard outputs'] as const,
    href: '/industries/infrastructure',
    coordinate: '19.0760° N, 72.8777° E',
  },
  {
    index: '§ 03.2',
    slug: 'real-estate',
    title: 'Real Estate & RERA',
    description: 'RERA-compliant layout plans, boundary demarcation, topographic surveys for developers and builders.',
    points: ['RERA-compliant layout plans', 'Township boundary surveys', 'Contour surveys for earthworks', 'Municipal submission packages'] as const,
    href: '/industries/real-estate',
    coordinate: '18.5204° N, 73.8567° E',
  },
  {
    index: '§ 03.3',
    slug: 'mining',
    title: 'Mining & Earthworks',
    description: 'Precise volumetric measurement, stockpile surveys, and haul road geometry for mining operations.',
    points: ['Stockpile volume measurement', 'Open-cast mine mapping', 'Haul road geometry surveys', 'Earthwork calculations'] as const,
    href: '/industries/mining',
    coordinate: '21.2514° N, 81.6296° E',
  },
  {
    index: '§ 03.4',
    slug: 'agriculture',
    title: 'Agriculture & Land',
    description: 'Large-area farm boundary demarcation, irrigation channel surveys, revenue record alignment.',
    points: ['Farm boundary demarcation', 'Irrigation channel surveys', 'Revenue record alignment', 'Crop area measurement'] as const,
    href: '/industries/agriculture',
    coordinate: '20.7002° N, 77.0082° E',
  },
  {
    index: '§ 03.5',
    slug: 'smart-cities',
    title: 'Urban Planning & Smart Cities',
    description: 'City-scale topographic surveys, BIM-ready data packages, and digital twin base surveys.',
    points: ['City-scale topographic surveys', 'BIM-ready deliverables', 'Digital twin base surveys', 'Master plan support'] as const,
    href: '/industries/smart-cities',
    coordinate: '12.9716° N, 77.5946° E',
  },
  {
    index: '§ 03.6',
    slug: 'utilities',
    title: 'Oil, Gas & Utilities',
    description: 'Pipeline corridor surveys, powerline easement mapping, and utility network documentation.',
    points: ['Pipeline corridor surveys', 'Easement boundary mapping', 'Transmission line surveys', 'Utility network documentation'] as const,
    href: '/industries/utilities',
    coordinate: '23.0225° N, 72.5714° E',
  },
] as const

export const KNOWLEDGE_ARTICLES = [
  {
    slug: 'mojani-process',
    badge: 'MAHARASHTRA · TILR',
    title: 'What Is the Mojani Process?',
    description: 'The complete step-by-step guide to the official land measurement procedure in Maharashtra — documentation, timeline, and how to navigate the TILR office.',
  },
  {
    slug: 'rera-requirements',
    badge: 'RERA · REAL ESTATE',
    title: 'RERA Survey Requirements for Developers',
    description: 'A complete breakdown of RERA-mandated survey standards for residential and commercial layouts — what documents are required and common compliance errors.',
  },
  {
    slug: 'boundary-disputes',
    badge: 'LAND RECORDS · LEGAL',
    title: 'How to Resolve a Land Boundary Dispute',
    description: 'The complete legal process from commissioning a certified survey to presenting court-admissible evidence in property boundary disputes.',
  },
] as const

export const TESTIMONIALS = [
  {
    initials: 'RK',
    name: 'R. Kumar',
    role: 'Project Manager, Infrastructure Contractor',
    quote: 'Shubham Surveyors delivered our highway corridor mapping for a 48km stretch. Their DGPS data was accepted by NHAI on the first submission — no revisions required.',
  },
  {
    initials: 'AS',
    name: 'A. Shah',
    role: 'Director, Real Estate Developer, Pune',
    quote: 'Our township project needed RERA-compliant boundary surveys for 200+ plots. Shubham Surveyors handled field work, AutoCAD drawings, and submission documentation flawlessly.',
  },
  {
    initials: 'MP',
    name: 'M. Patil',
    role: 'Property Owner, Maharashtra',
    quote: 'Their court-admissible survey report was the key evidence that resolved our land boundary case. 30 years of expertise — you feel it in every deliverable.',
  },
  {
    initials: 'RP',
    name: 'Rajesh P.',
    role: 'Property Owner',
    quote: 'Accurate measurements, timely delivery, and excellent support throughout the project.',
  },
  {
    initials: 'AD',
    name: 'Amit D.',
    role: 'Civil Contractor',
    quote: 'Professional team with outstanding surveying expertise. Highly recommended.',
  },
  {
    initials: 'PK',
    name: 'Priya K.',
    role: 'Landowner',
    quote: 'Fast, reliable, and precise. Made our land documentation process stress-free.',
  },
  {
    initials: 'SJ',
    name: 'Sandeep J.',
    role: 'Builder & Developer',
    quote: 'Detailed survey reports and great communication from start to finish.',
  },
  {
    initials: 'VS',
    name: 'Vikram S.',
    role: 'Project Manager',
    quote: "Exceptional service and accuracy. We'll definitely work with them again.",
  },
] as const
