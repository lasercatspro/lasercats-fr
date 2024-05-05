/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../_components/blocks/header";
import Numbers from "../_components/blocks/numbers";
import Testimonials from "../_components/blocks/testimonials";
import WeHave from "../_components/blocks/we-have";
import Projects from "../_components/blocks/projects";
import { getAllItems } from "../lib/api";
import { Client } from "../types/items";
import GridTransition from "../_components/blocks/grid-transition";
import Team from "../_components/blocks/team";
import LaserGame from "../_components/game/lasergame";
import ContactUs from "@/_components/blocks/contact-us";

export default async function Index() {
	// sort by rank, less is better, nil is 10
	const projects = (await getAllItems("client")).sort((a, b) => (a?.rank || 10) > (b?.rank || 10) ? 1 : -1).map(c => {
		if (c?.component) delete c?.component;
		return c;
	});

	return (
		<main>
			<Header />
			<Numbers />
			<WeHave />
			<Testimonials />
			<Projects projects={projects as Client[]} />
			<GridTransition />
			<Team />
			{/* <LaserGame /> */}
			<WeHave isLikeContent />
			<ContactUs />
		</main>
	);
}
