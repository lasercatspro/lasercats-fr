import { type Post } from "@/types/post";
import Head from "next/head";
import { Prose } from "./prose";
import { type ReactNode } from "react";

export function PostLayout ({ article }: { article: Post }): ReactNode {
	const mdx: any = article.component();
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
							<h1 className="mt-6 font-bold tracking-tight text-zinc-50 ">
								{article.title}
							</h1>
							<time
								dateTime={article.date}
								className="order-first flex items-center text-base text-zinc-50"
							>
								<span className="h-4 w-0.5 rounded-full bg-zinc-50" />
								<span className="ml-3">{new Date(article?.date).toLocaleDateString("fr")}</span>
							</time>
						</header>

						<Prose className={""}>
							{mdx}
						</Prose>
					</article>
				</div>
			</div>
		</>
	);
}
