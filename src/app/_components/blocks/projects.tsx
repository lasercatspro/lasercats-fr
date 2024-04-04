"use client";

import GrayLink from "../gray-link";
import { CarouselProvider, ButtonNext } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";
import { Client } from "@/types/items";

type Props = {
	projects: Client[]
}

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<"blue" | "green">("blue");
	return (
		<div className={`p-12 bg-cover ${bgColor === "blue"? "bg-[url('/assets/images/jpg/bg-blue.jpg')]" : "bg-[url('/assets/images/jpg/bg-green.jpg')]"} transition-colors duration-500`}>
			<CarouselProvider
				naturalSlideWidth={300}
				naturalSlideHeight={100}
				totalSlides={projects?.length}
				visibleSlides={1}
				isIntrinsicHeight
			>
				<div className="flex justify-between">
					<h2 className="text-zinc-50">Nos Projets</h2>
					<ButtonNext>
						<GrayLink title={"Projet suivant"} />
					</ButtonNext>
				</div>
				<div className="my-8">
					<CustomSlider 
						items={projects} 
						type="projects" 
						backBtn={false} 
						nextBtn={false} 
						dotsType="bullets"
						setBgColor={setBgColor}
					/>
				</div>
			</CarouselProvider>
		</div>
	);
};

export default Projects;
