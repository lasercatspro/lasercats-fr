import { PostLayout } from "@/app/_components/postLayout";
import Container from "@/app/_components/container";
import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { type Post } from "@/types/post";

const fetchPost: (postSlug: string) => Promise<Post | undefined> = async (
	postSlug
) => {
	const post = await getPostBySlug(postSlug);
	if (post === undefined) {
		return undefined;
	} else {
		return post;
	}
};

interface Props {
  params: { slug: string };
}

export const generateMetadata = async ({ params: { slug } }: Props) => {
	const post = await getPostBySlug(slug);
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
		<Container classes="max-w-7xl mx-auto mt-64">
			<PostLayout article={article} />
		</Container>
	);
};

export default ArticlePage;
