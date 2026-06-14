import { createClient, type SanityClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

const isValidProjectId = (id?: string): boolean =>
  !!id && /^[a-z0-9-]+$/.test(id)

let _client: SanityClient | null = null

export function getSanityClient(): SanityClient | null {
  if (!isValidProjectId(projectId)) return null
  if (!_client) {
    _client = createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
      token: process.env.SANITY_API_TOKEN,
    })
  }
  return _client
}

export const sanityClient = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: async <T>(query: string, params?: any): Promise<T> => {
    const client = getSanityClient()
    if (!client) return [] as T
    return params ? client.fetch<T>(query, params) : client.fetch<T>(query)
  },
}
