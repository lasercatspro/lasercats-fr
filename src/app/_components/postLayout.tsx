import { type Post } from "@/types/post";
import { Prose } from "./prose";
import { type ReactNode } from "react";
import Avatar from "./avatar";
import DateFormatter from "./dateFormatter";

export function PostLayout ({ article }: { article: Post }): ReactNode {
	const mdx: any = article.component();
	return (
		<main>
			<div className="xl:relative">
				<div className="mx-auto max-w-4xl">
					<article>
						<header className="flex flex-col gap-8">
							<h1 className="mt-6 font-bold tracking-tight text-zinc-50 ">
								{article.title}
							</h1>
							<div className="flex justify-between items-center">
								<Avatar />
								<DateFormatter dateString={article.date} />
							</div>
							<hr />
						</header>

						<Prose className={""}>
							{mdx}
						</Prose>
					</article>
				</div>
			</div>
		</main>
	);
}
