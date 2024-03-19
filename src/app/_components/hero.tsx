import Avatar from "@/app/_components/avatar";
import Link from "next/link";
import DateFormatter from "./dateFormatter";
import { Client, type Post } from "@/types/items";
import { type ReactNode } from "react";
import Image from "next/image";
import cn from "classnames";

interface Props {
  article: Post | Client;
	type: "client" | "post"
}

export function Hero({ article, type }: Props): ReactNode {
	return (
		<section className="">
			<Link
				as={`/${type === "post" ? "blog" : "projets"}/${article?.slug}`}
				href={`/${type === "post" ? "blog" : "projets"}/[slug]`}
				aria-label={article?.title}
				className="lg:p-8 flex flex-col lg:gap-8 lg:border-2 lg:border-zinc-50 lg:border-opacity-20 hover:no-underline hover:bg-zinc-50 hover:bg-opacity-10"
			>
				<div className="flex gap-8">
					<div className="w-1/2">
						<h3 className="mb-4 leading-tight">{article?.title}</h3>
						<p className="text-lg leading-10">{article?.description}</p>
					</div>
					<Image
						src={ article.type === "client" && article?.image ? article.image :
							"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt={"Cover Image"}
						width={1200}
						height={800}
						className={cn("shadow-sm w-1/2", {
							"hover:shadow-lg transition-shadow duration-200 object-cover": article.slug,
						})}
					/>
				</div>
				<div className="lg:text-inherit lg:flex items-start flex-col justify-between col-span-9">
					
					<div className="flex justify-between items-center w-full !text-sm md:text-inherit">
						<Avatar name={article.author}/>
						<DateFormatter dateString={article.date} />
					</div>
				</div>
			</Link>
		</section>
	);
}
