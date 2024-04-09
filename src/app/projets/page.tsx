import Container from "@/_components/container";
import { Hero } from "@/_components/hero";
import { MoreStories } from "@/_components/moreStories";
import { getAllItems } from "../../lib/api";
import { Client, Post } from "../../types/items";
import { notFound } from "next/navigation";

const fetchClients: () => Promise<(Client | undefined)[]> = async () => {
	const data = await getAllItems("client");
	const filteredClients: [] | Client[] = data.filter(
		(n: Client | Post | undefined) => n != null || n !== undefined
	) as [] | Client[];
	if (filteredClients.length > 0) return filteredClients as Client[];
	return [];
};

export default async function Index(): Promise<JSX.Element> {
	const clients = await fetchClients();
	if (clients?.length === 0) {
		notFound();
	}

	const heroClient = clients?.at(0);
	const moreClients = clients?.slice(1);

	return (
		<Container classes="flex flex-col gap-10 py-8 max-w-xl lg:max-w-7xl mx-8 md:mx-auto">
			<h1 className="text-primary uppercase w-full">Nos Projets</h1>
			<>
				{heroClient && <Hero type={"client"} article={heroClient} />}
				{moreClients && moreClients?.length > 0 && (
					<MoreStories type={"client"} items={moreClients} />
				)}
			</>
		</Container>
	);
}
