"use client";

import { CarouselProvider, ButtonNext, ButtonBack } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";
import { Client } from "@/types/items";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
	projects: Client[]
}

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<"blue" | "green">("blue");
	return (
		<div className={`px-4 py-16 md:px-16 bg-cover ${bgColor === "blue"? "bg-[url('/assets/images/jpg/bg-blue.jpg')]" : "bg-[url('/assets/images/jpg/bg-green.jpg')]"} transition-colors duration-500`}>
			<CarouselProvider
				naturalSlideWidth={300}
				naturalSlideHeight={100}
				totalSlides={projects?.length}
				visibleSlides={1}
				isIntrinsicHeight
			>
				<h2 className="text-zinc-50 pb-12">Nos Projets</h2>
				<div className="flex justify-end items-start px-8 gap-8">
					<ButtonBack>
						<div className="flex items-center justify-center border border-zinc-400 p-2 rounded-full">
							<ChevronLeftIcon className="h-6 w-6 text-zinc-400" />	
						</div>
					</ButtonBack>
					<ButtonNext>
						<div className="flex items-center justify-center border border-zinc-400 p-2 rounded-full">
							<ChevronRightIcon className="h-6 w-6 text-zinc-400" />
						</div>
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