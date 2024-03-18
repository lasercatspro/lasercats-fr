import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/blocks/header";
import Contact from "./_components/blocks/contact";
import Numbers from "./_components/blocks/numbers";

export default function Index (): ReactNode {
	return (
		<main>
			<Container>
				<Header />
				<Numbers />
				<Contact />
			</Container>
		</main>
	);
}
