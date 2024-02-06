import { type Post } from '@/types/post'
import Head from 'next/head'
import { Prose } from './prose'
import { type ReactNode } from 'react'
import { type MDXContent } from 'mdx/types'

export function PostLayout ({ article }: { article: Post }): ReactNode | MDXContent {
  const mdx: any = article.component()
  return (
    <>
      <Head>
        <title>{`${article.title} - Collectif Lasercats`}</title>
        <meta name="description" content={article.description} />
      </Head>
        <div className="xl:relative">
          <div className="mx-auto max-w-4xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {article.title}
                </h1>
                <time
                  dateTime={article.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{new Date(article?.date).toLocaleDateString('fr')}</span>
                </time>
              </header>

              <Prose className={''}>
                {mdx}
              </Prose>
            </article>
          </div>
        </div>
    </>
  )
}
