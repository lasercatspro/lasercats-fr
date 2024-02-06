import Container from '@/app/_components/container'
import { HeroPost } from '@/app/_components/postHero'
import { MoreStories } from '@/app/_components/moreStories'
import { getAllPosts } from '../../lib/api'

export default async function Index (): Promise<JSX.Element> {
  const allPosts = await getAllPosts()

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <main>
      <Container>
        <HeroPost article={heroPost} />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  )
}
