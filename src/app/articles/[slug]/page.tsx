import { PostLayout } from '@/app/_components/postLayout'
import Container from '@/app/_components/container'
import { getPostBySlug } from '@/lib/api'

const ArticlePage = async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const article = await getPostBySlug(params.slug)
  return <Container><PostLayout article={article}/></Container>
}

export default ArticlePage
