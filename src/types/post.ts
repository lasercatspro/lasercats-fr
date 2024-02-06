import { type MDXContent } from 'mdx/types'

export interface Post {
  slug: string
  author: string
  date: string
  title: string
  description: string
  component: () => MDXContent
}
