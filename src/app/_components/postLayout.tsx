import { Client, type Post } from "@/types/items";
import { Prose } from "./prose";
import { Suspense, type ReactNode } from "react";
import Avatar from "./avatar";
import DateFormatter from "./dateFormatter";
import Image from "next/image";
import { Skeleton } from "@mui/material";

export function PostLayout({ article }: { article: Post | Client }): ReactNode {
	const mdx: any = article?.component ? article?.component() : (() => <></>);
	return (
		<main>
			<div className="xl:relative">
				<div className="mx-8 lg:mx-auto max-w-7xl">
					<article>
						<header className="flex flex-col gap-8">
							<Suspense fallback={<Skeleton
								sx={{ bgcolor: "grey.800" }}
								variant="rectangular"
								width={"100%"}
								height={243}
							/>}
							>
								{article.type === "client" && article.image && (
									<Image
										alt={`logo ${article.slug}`}
										src={`/assets/images/png/${article.slug}.png`}
										width={800}
										height={243}
										className={`${article.slug === "citesia" && "flex justify-centers mx-auto w-full p-4"}`}
									/>
								)}
							</Suspense>
							<div className="flex flex-col items-start gap-8">
								<h1 className="mt-6 font-bold tracking-tight text-primary">
									{article.title}
								</h1>
								<div className="lg:flex grid grid-cols-2 place-content-stretch lg:flex-row gap-4">
									{article?.type === "client" && article?.technos.map((techno) => (
										<strong key={techno} className="text-center text-sm lg:text-inherit rounded-sm bg-zinc-50 bg-opacity-20 p-2 lg:px-4 lg:py-2">
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
							<hr className="!bg-custom-dark h-[2px]"/>
						</header>

						<Prose className={""}>{mdx}</Prose>
					</article>
				</div>
			</div>
		</main>
	);
}
