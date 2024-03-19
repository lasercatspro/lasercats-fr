import Container from "@/app/_components/container";
import { Hero } from "@/app/_components/hero";
import { MoreStories } from "@/app/_components/moreStories";
import { getAllItems } from "../../lib/api";
import { type Post } from "@/types/items";
import { notFound } from "next/navigation";

const fetchPosts: () => Promise<Post[] | []> = async () => {
	const data = await getAllItems("post");
	const filteredPosts = data?.filter((n) => n != null || n !== undefined);
	if (filteredPosts.length > 0) return filteredPosts as Post[];
	return [];
};

export default async function Index(): Promise<JSX.Element> {
	const allPosts = await fetchPosts();
	console.log(allPosts);
	
	if (allPosts?.length === 0) {
		notFound();
	}

	const heroPost = allPosts?.at(0);
	const morePosts = allPosts?.slice(1);

	return (
		<div className="py-8 max-w-xl lg:max-w-7xl mx-8 md:mx-auto">
			<Container classes="flex flex-col gap-10">
				<h1 className="text-primary uppercase w-full">Blog</h1>
				{heroPost != null && morePosts != null && (
					<>
						<Hero article={heroPost} type="post" />
						<MoreStories items={morePosts} type={"post"} />
					</>
				)}
			</Container>
		</div>
	);
}
