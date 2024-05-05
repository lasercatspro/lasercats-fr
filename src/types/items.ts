import { type MDXContent } from "mdx/types";

export interface Post {
  slug: string
  author: string
  date: string
  title: string
  type: "post"
  description: string
  imagePreview?: string
  component?: () => MDXContent
}
export interface Client {
  slug: string
  author: string
  date: string
  title: string
  description: string
  technos: string[]
  type: "client"
  imagePreview: string
  logo: string
  component?: () => MDXContent
  href: string
  rank?: number
}

export interface Member {
  name: string,
  role: string,
  imageSrc: string,
} 
