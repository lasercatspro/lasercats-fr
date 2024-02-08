import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/header";
import Contact from "./_components/contact";

export default function Index (): ReactNode {
	return (
		<main>
			<Container>
				<Header />
				<Contact />
			</Container>
		</main>
	);
}
