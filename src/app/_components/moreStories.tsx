import { type ReactNode } from "react";
import { type Post } from "../../types/post";
import { PostPreview } from "./postPreview";

interface Props {
  posts: Array<Post | undefined>
}

export function MoreStories ({ posts }: Props): ReactNode {
	return (
		<section className="mx-8 md:mx-0">
			<h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
				{"Nos autres articles"}
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 lg:gap-y-32 mb-32">
				{posts?.map((post) => (
					<PostPreview article={post} key={post?.slug}/>
				))}
			</div>
		</section>
	);
}
