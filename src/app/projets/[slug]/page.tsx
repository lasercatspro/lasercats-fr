import { PostLayout } from "@/_components/postLayout";
import Container from "@/_components/container";
import { getItemBySlug } from "../../../lib/api";
import { notFound } from "next/navigation";
import { Client } from "../../../types/items";

const fetchPost: (clientSlug: string) => Promise<Client | undefined> = async (
	clientSlug
) => {
	const client = await getItemBySlug("client", clientSlug) as Client | undefined;
	if (client === undefined) {
		return undefined;
	} else {
		return client;
	}
};

interface Props {
  params: { slug: string };
}

export const generateMetadata = async ({ params: { slug } }: Props) => {
	const client = await getItemBySlug("client", slug);
	return {
		title: `Lasercats Blog - ${client?.title}`,
		description: client?.description,
		author: client?.author,
	};
};

const ArticlePage = async ({
	params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> => {
	const client = await fetchPost(params.slug);
	if (client === undefined) {
		notFound();
	}
	return (
		<main>
			<Container classes="mx-auto mt-4 lg:mt-8">
				<PostLayout article={client} />
			</Container>
		</main>
	);
};

export default ArticlePage;
