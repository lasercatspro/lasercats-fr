/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { Dispatch, SetStateAction, useEffect, useState, useMemo, useRef } from "react";
import { Client } from "@/types/items";
import Container from "../container";
import { customBlue, customGreen } from "@/lib/constants";

type Props = {
	projects: Client[];
};

const SubProjet = ({
	projects,
	setBgColor,
}: {
	projects: Client[];
	setBgColor: Dispatch<SetStateAction<customBlue | customGreen>>;
}) => {
	return (
		<>
			<h2 className="text-zinc-50">Nos Projets</h2>
			<div className="mt-12 lg:mt-24">
				<CustomSlider
					items={projects}
					type="projects"
					dotsType="bullets"
					setBgColor={setBgColor}
				/>
			</div>
		</>
	);
};
// jouer sur le nombre de segments, le -mx-[n%] et le w-1/n h-1/n du demi cercle noir pour changer la courbe
const PipeSegment = ({ reverse = false, color }: { reverse: boolean, color: string }) => <div className="relative !w-[100%] h-[12%] xl:h-[25%] lg:-mx-[2%] -mx-[3%] xl:-mx-[3%]">
	<div
		className={`w-full h-full ${reverse ? "translate-y-[100%] rounded-b-full" : "rounded-t-full"} ${color} transform  origin-bottom bg-opacity-100`}
		style={{ transition: "all 1.5s ease-in-out" }}
	/>
	<div className={`bottom-0 transform left-1/2  -translate-x-1/2 ${reverse ? " translate-y-[99%] rounded-b-full" : "rounded-t-full"}  absolute w-1/2 lg:w-2/3 xl:w-1/2 h-1/2 bg-black`} style={{ transition: "all 1.5s ease-in-out" }} />
</div>;

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<
		customBlue | customGreen
	>(customBlue);

	// autoplay starts when projects comes into view (we don't want user to miss our best customers)
	const [autoplay, setAutoplay] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const observer = useMemo(() => {
		return typeof window !== "undefined" ? new IntersectionObserver(
			([entry]) => setAutoplay(entry.isIntersecting)
		) : null;
	}, [ref]);
	useEffect(() => {
		if (ref.current) { observer?.observe(ref.current); }
		return () => observer?.disconnect();
	}, []);

	const color = bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary bg-opacity-80" : "";
	return (
		<div
			ref={ref}
			className="px-4 py-32 md:px-16 relative bg-custom-dark z-10"
		>
			<div className="h-full w-full relative">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-[1] blur-[300px]">
					<div className="flex h-full w-full pt-28 relative">
						<PipeSegment reverse={bgColor === customBlue} color={color} />
						<PipeSegment reverse={bgColor === customGreen} color={color} />
						<PipeSegment reverse={bgColor === customBlue} color={color} />
						<PipeSegment reverse={bgColor === customGreen} color={color} />
						<PipeSegment reverse={bgColor === customBlue} color={color} />
					</div>
				</div>
				<Container>
					<CarouselProvider
						naturalSlideWidth={300}
						naturalSlideHeight={100}
						totalSlides={projects?.length}
						visibleSlides={1}
						isIntrinsicHeight
						isPlaying={autoplay}
						interval={6000}
					>
						<SubProjet projects={projects} setBgColor={setBgColor} />
					</CarouselProvider>
				</Container>
			</div>
		</div>
	);
};

export default Projects;
