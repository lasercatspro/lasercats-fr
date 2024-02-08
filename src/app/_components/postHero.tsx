import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/coverImage";
import Link from "next/link";
import DateFormatter from "./dateFormatter";
import { type Post } from "@/types/post";
import { type ReactNode } from "react";

interface Props {
  article: Post
}

export function HeroPost ({
	article
}: Props): ReactNode {
	return (
    
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage
					title={article.title}
					src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
					slug={article.slug}
				/>
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
						<Link
							as={`/blog/${article.slug}`}
							href="/blog/[slug]"
							className="hover:no-underline hover:text-primary"
						>
							{article.title}
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<DateFormatter dateString={article.date} />
					</div>
				</div>
				<div>
					{/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
					<Avatar name={article.author} />
				</div>
			</div>
		</section>
	);
}
