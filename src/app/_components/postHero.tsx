import Avatar from "@/app/_components/avatar";
import Link from "next/link";
import DateFormatter from "./dateFormatter";
import { type Post } from "@/types/post";
import { type ReactNode } from "react";
import Image from "next/image";
import cn from "classnames";

interface Props {
  article: Post;
}

export function HeroPost({ article }: Props): ReactNode {
	return (
		<section className="">
			<Link
				as={`/blog/${article.slug}`}
				href="/blog/[slug]"
				aria-label={article.title}
				className="lg:p-8 flex flex-col lg:gap-8 lg:border-2 lg:border-zinc-50 lg:border-opacity-20 hover:no-underline hover:bg-zinc-50 hover:bg-opacity-10"
			>
				<Image
					src={
						"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt={"Cover Image"}
					width={1200}
					height={800}
					className={cn("shadow-sm w-full md:h-[35vh]", {
						"hover:shadow-lg transition-shadow duration-200 object-cover": article.slug,
					})}
				/>
				<div className="lg:text-inherit lg:flex items-start flex-col justify-between col-span-9">
					<div>
						<h3 className="mb-4 leading-tight">{article.title}</h3>
					</div>
					<div className="flex justify-between items-center w-full !text-sm md:text-inherit">
						<Avatar name={article.author}/>
						<DateFormatter dateString={article.date} />
					</div>
				</div>
			</Link>
		</section>
	);
}
