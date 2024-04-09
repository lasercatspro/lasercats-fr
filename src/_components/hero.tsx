import Avatar from "@/_components/avatar";
import Link from "next/link";
import DateFormatter from "./dateFormatter";
import { Client, type Post } from "../types/items";
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
				className="flex flex-col lg:gap-8 border-2 border-primary border-opacity-20 hover:no-underline hover:bg-primary hover:bg-opacity-10"
			>
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="flex flex-col justify-between lg:w-2/3 p-4 lg:p-8">
						<h3 className="mb-4 leading-tight font-extrabold text-2xl">{article?.title}</h3>
						<p className="text-lg leading-10 line-clamp-6">{article?.description}</p>
						<div className="lg:text-inherit lg:flex items-start flex-col justify-between col-span-9">
							<div className="flex justify-between items-center w-full !text-sm md:text-inherit">
								<Avatar name={article.author}/>
								<DateFormatter dateString={article.date} />
							</div>
						</div>
					</div>
					<Image
						src={ article.type === "client" && article?.imagePreview ? article.imagePreview :
							"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt={"Cover Image"}
						width={1200}
						height={800}
						className={cn("shadow-sm lg:w-1/3", {
							"hover:shadow-lg transition-shadow duration-200 object-cover": article.slug,
						})}
					/>
				</div>
				
			</Link>
		</section>
	);
}
