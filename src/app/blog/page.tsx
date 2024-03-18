import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/postHero";
import { MoreStories } from "@/app/_components/moreStories";
import { getAllPosts } from "../../lib/api";
import { type Post } from "@/types/post";
import { notFound } from "next/navigation";

const fetchPosts: () => Promise<Array<Post | undefined>> = async () => {
	const data = await getAllPosts();
	const filteredPosts = data.filter((n) => n != null || n !== undefined);
	if (filteredPosts.length > 0) return filteredPosts;
	return [];
};

export default async function Index(): Promise<JSX.Element> {
	const allPosts = await fetchPosts();
	if (allPosts.length === 0) {
		notFound();
	}

	const heroPost = allPosts?.at(0);
	const morePosts = allPosts?.slice(1);

	return (
		<main className="py-8 max-w-xl lg:max-w-7xl mx-8 md:mx-auto">
			<Container classes="flex flex-col gap-10">
				<h1 className="text-primary uppercase w-full">Lasercats<span className="text-zinc-50 transform translate-x-10 -translate-y-7 hover:-translate-y-16 hover:translate-x-28 duration-700">Blog</span></h1>
				{heroPost != null && morePosts != null && (
					<>
						<HeroPost article={heroPost} />
						<MoreStories posts={morePosts} />
					</>
				)}
			</Container>
		</main>
	);
}
