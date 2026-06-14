export interface Article {
  _id: string
  title: string
  slug: { current: string }
  topicBadge: string
  description: string
  readingTime: number
  publishedAt: string
  body: PortableTextBlock[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface PortableTextBlock {
  _type: string
  _key: string
  style?: string
  children?: Array<{ _type: string; _key: string; text: string; marks?: string[] }>
  markDefs?: Array<{ _type: string; _key: string; href?: string }>
  asset?: { _ref: string; _type: string }
  alt?: string
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  location: string
  surveyType: string
  description: string
  completedAt: string
  image?: { asset: { _ref: string } }
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  state: string
  projectDetails: string
}

export interface EstimateFormData {
  surveyType: string
  area: number
  terrain: string
  name: string
  phone: string
}
