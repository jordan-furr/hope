import { client } from './client'

export type Post = {
  _id: string
  title?: string
  body?: string
  publishedAt: string
  mainImage?: {
    asset: { url: string }
    alt?: string
  }
}

export type Quote = {
  _id: string
  quoteText: string
  attribution: string
  publishedAt: string
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      body,
      publishedAt,
      mainImage {
        asset-> { url },
        alt
      }
    }`
  )
}

export async function getQuotes(): Promise<Quote[]> {
  return client.fetch(
    `*[_type == "quote"] | order(publishedAt desc) {
      _id,
      quoteText,
      attribution,
      publishedAt
    }`
  )
}