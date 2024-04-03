"use client";

import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/blocks/header";
import Contact from "./_components/blocks/contact";
import Numbers from "./_components/blocks/numbers";
import Testimonials from "./_components/blocks/testimonials";
import Team from "./_components/blocks/team";
import WeHave from "./_components/blocks/we-have";
import { CarouselProvider } from "pure-react-carousel";
import useIsMobile from "./hooks/useIsMobile";

export default function Index (): ReactNode {
	const isMobile = useIsMobile({ forIpad: true });
	
	return (
		<main>
			<Container>
				<CarouselProvider
					naturalSlideWidth={300}
					naturalSlideHeight={100}
					totalSlides={3}
					visibleSlides={isMobile ? 1 : 2}
					isIntrinsicHeight
				>
					<Header />
					<Numbers />
					<WeHave />
					<Testimonials />
					<Team />
					<Contact />
				</CarouselProvider>
			</Container>
		</main>
	);
}
