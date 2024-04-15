import Container from "@/_components/container";
import { ItemsGrid } from "@/_components/items-grid";
import { getAllItems } from "../../lib/api";
import { type Post } from "../../types/items";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
	return {
		title: "Lasercats | Blog",
	};
};

const fetchPosts: () => Promise<Post[] | []> = async () => {
	const data = await getAllItems("post");
	const filteredPosts = data?.filter((n: any) => n != null || n !== undefined);
	if (filteredPosts.length > 0) return filteredPosts as Post[];
	return [];
};

export default async function Index(): Promise<JSX.Element> {
	const allPosts = await fetchPosts();
	
	if (allPosts?.length === 0) {
		notFound();
	}

	return (
		<Container classes="flex flex-col gap-10 py-32 !max-w-[800px] mx-auto">
			<h1 className="text-primary uppercase w-full">Blog</h1>
			{allPosts != null  && (
				<ItemsGrid items={allPosts} type={"post"} />
			)}
		</Container>
	);
}
