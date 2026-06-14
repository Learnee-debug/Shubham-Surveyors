import { sanityClient } from './client'
import type { Article, Project } from '@/types'

export async function getAllArticles(): Promise<Article[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "article"] | order(publishedAt desc) {
        _id, title, slug, topicBadge, description, readingTime, publishedAt
      }`
    )
  } catch {
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const results = await sanityClient.fetch<Article[]>(
      `*[_type == "article" && slug.current == "${slug}"][0...1] {
        _id, title, slug, topicBadge, description, readingTime, publishedAt, body, seo
      }`
    )
    return Array.isArray(results) && results.length > 0 ? results[0] : null
  } catch {
    return null
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const results = await sanityClient.fetch<Array<{ slug: { current: string } }>>(
      `*[_type == "article"] { slug }`
    )
    if (!Array.isArray(results)) return []
    return results.map((r) => r.slug.current)
  } catch {
    return []
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "project"] | order(completedAt desc) {
        _id, title, slug, category, location, surveyType, description, completedAt
      }`
    )
  } catch {
    return []
  }
}
