import { Client, type Post } from "@/types/items";
import { Prose } from "./prose";
import { type ReactNode } from "react";
import Avatar from "./avatar";
import DateFormatter from "./dateFormatter";
import Image from "next/image";

export function PostLayout({ article }: { article: Post | Client }): ReactNode {
	const mdx: any = article.component();
	return (
		<main>
			<div className="xl:relative">
				<div className="mx-auto max-w-7xl">
					<article>
						<header className="flex flex-col gap-8">
							{article.type === "client" && article.image && (
								<Image
									alt={`logo ${article.slug}`}
									src={`/assets/images/png/${article.slug}.png`}
									width={1200}
									height={800}
									className={`${article.slug === "citesia" && "flex justify-center bg-zinc-50 mx-auto w-full p-4"}`}
								/>
							)}
							<div className="flex flex-col items-start gap-8">
								<h1 className="mt-6 font-bold tracking-tight text-primary">
									{article.title}
								</h1>
								<div className="flex gap-4">
									{article?.type === "client" && article?.technos.map((techno) => (
										<strong key={techno} className="rounded-sm bg-zinc-50 bg-opacity-20 px-4 py-2">
											{techno}
										</strong>
									))}
								</div>
								<div className="">
									<p className="leading-10 text-lg font-medium">
										{article.description}
									</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<Avatar />
								<DateFormatter dateString={article.date} />
							</div>
							<hr />
						</header>

						<Prose className={""}>{mdx}</Prose>
					</article>
				</div>
			</div>
		</main>
	);
}
