import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./coverImage";
import DateFormatter from "./dateFormatter";
import { type Post } from "@/types/post";
import { type ReactNode } from "react";

interface Props {
  article: Post | undefined
}

export function PostPreview ({
	article
}: Props): ReactNode {
	return (
		<div>
			<div className="mb-5">
				{(article != null) && <CoverImage slug={article?.slug} title={article?.title} src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />}
			</div>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link
					as={`/blog/${article?.slug}`}
					href="/blog/[slug]"
					className="hover:underline"
				>
					{article?.title}
				</Link>
			</h3>
			{((article?.date) != null) && <div className="text-lg mb-4">
				<DateFormatter dateString={article?.date} />
			</div>}
			<Avatar name={article?.author} />
		</div>
	);
}
