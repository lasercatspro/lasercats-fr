"use client";

import { projects } from "@/lib/projets";
import GrayLink from "../gray-link";
import { CarouselProvider, ButtonNext } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";

const Projects = () => {
	const [bgColor, setBgColor] = useState<"blue" | "green">("blue");
	console.log(bgColor);
	return (
		<div className={`p-12 bg-gradient-to-br from-custom-dark ${bgColor === "blue"? "via-custom-blue" : "via-primary"}  to-custom-dark transition-colors duration-500`}>
			<CarouselProvider
				naturalSlideWidth={300}
				naturalSlideHeight={100}
				totalSlides={projects.length}
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
