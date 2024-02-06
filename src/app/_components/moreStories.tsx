import { type ReactNode, useId } from 'react'
import { type Post } from '../../types/post'
import { PostPreview } from './postPreview'

interface Props {
  posts: Post[]
}

export function MoreStories ({ posts }: Props): ReactNode {
  const id = useId()
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview article={post} key={id}/>
        ))}
      </div>
    </section>
  )
}
