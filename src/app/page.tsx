import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/blocks/header";
import Contact from "./_components/blocks/contact";
import Numbers from "./_components/blocks/numbers";
import Testimonials from "./_components/blocks/testimonials";
import Team from "./_components/blocks/team";

export default function Index (): ReactNode {
	return (
		<main>
			<Container>
				<Header />
				<Numbers />
				<Testimonials />
				<Team />
				<Contact />
			</Container>
		</main>
	);
}
