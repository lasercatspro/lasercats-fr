import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/blocks/header";
import Contact from "./_components/blocks/contact";
import Numbers from "./_components/blocks/numbers";
import Testimonials from "./_components/blocks/testimonials";
import WeHave from "./_components/blocks/we-have";
import Projects from "./_components/blocks/projects";
import { getAllItems } from "@/lib/api";
import { Client } from "@/types/items";
import GridTransition from "./_components/blocks/grid-transition";
import Team from "./_components/blocks/team";
import LaserGame from "./_components/game/lasergame";

export default async function Index (): Promise<ReactNode> {
	const projects = (await getAllItems("client")).map(c => {
		if (c?.component) delete c?.component;
		return c;
	});
	
	return (
		<main>
			<Container>
				<Header />
				<Numbers />
				<WeHave />
				<Testimonials />
				<Projects projects={projects as Client[]}/>
				<GridTransition />
				<Team />
				<LaserGame />
				<WeHave isLikeContent />
				<Contact />
			</Container>
		</main>
	);
}
