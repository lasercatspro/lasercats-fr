import { PostLayout } from "@/app/_components/postLayout";
import Container from "@/app/_components/container";
import { getItemBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { Client, type Post } from "@/types/items";

const fetchPost: (postSlug: string) => Promise<Post | Client | undefined> = async (
	postSlug
) => {
	const post = await getItemBySlug("post", postSlug);
	if (!post) {
		return undefined;
	} else {
		return post;
	}
};

interface Props {
  params: { slug: string };
}

export const generateMetadata = async ({ params: { slug } }: Props) => {
	const post = await getItemBySlug("post", slug);
	return {
		title: `Lasercats Blog - ${post?.title}`,
		description: post?.description,
		author: post?.author,
	};
};

const ArticlePage = async ({
	params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> => {
	const article = await fetchPost(params.slug);
	if (article === undefined) {
		notFound();
	}
	return (
		<Container classes="max-w-7xl mx-auto lg:mt-64">
			<PostLayout article={article} />
		</Container>
	);
};

export default ArticlePage;
