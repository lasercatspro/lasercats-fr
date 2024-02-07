import { type Post } from '@/types/post'
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'src/_posts')

export function getPostSlugs (): string[] {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug (slug: string): Promise<Post | undefined> {
  try {
    const { meta, default: component } = await import(`../_posts/${slug}.mdx`)
    return {
      slug: slug.replace(/(\/index)?\.mdx$/, ''),
      ...meta,
      component
    } satisfies Post
  } catch (e) {
    console.log(e)
  }
}

export async function getAllPosts (): Promise<Array<Post | undefined>> {
  const slugs = getPostSlugs()
  const posts = Promise.all(slugs.map(async (slug) => await getPostBySlug(slug.replace(/(\/index)?\.mdx$/, ''))))
  return await posts
}
