import Container from "@/_components/container";
import { ItemsGrid } from "@/_components/items-grid";
import { getAllItems } from "../../lib/api";
import { Client, Post } from "../../types/items";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
	return {
		title: "Lasercats | Nos clients",
	};
};

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
	return (
		<Container classes="flex flex-col gap-10 py-20 lg:py-32 !max-w-[800px] lg:mx-auto mx-2">
			<h1 className="text-primary uppercase w-full">Nos Projets</h1>
			{clients !== null && (
				<ItemsGrid type={"client"} items={clients} />
			)}
		</Container>
	);
}
