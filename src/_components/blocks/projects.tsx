/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider, ButtonNext, ButtonBack } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";
import { Client } from "../../types/items";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  projects: Client[];
};

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<"#06038D" | "#00C65E" | "transition">("#06038D");
	return (
		<div
			className={"px-4 py-16 md:px-16 bg-cover relative bg-custom-dark z-10"}
		>
			<CarouselProvider
				naturalSlideWidth={300}
				naturalSlideHeight={100}
				totalSlides={projects?.length}
				visibleSlides={1}
				isIntrinsicHeight
			>
				<div className="absolute -z-10 left-0 w-screen h-auto">
					{bgColor === "#00C65E" && (
						<img src="/assets/images/svg/svg-green.svg" className="w-screen"/>
					)}

					{bgColor === "#06038D" && (
						<img src="/assets/images/svg/svg-blue.svg" className="w-screen"/>
					)}
				</div>
				<h2 className="text-zinc-50 pb-12">Nos Projets</h2>
				<div className="flex justify-end items-start px-8 gap-8">
					<ButtonBack>
						<div className="flex items-center justify-center border border-zinc-400 p-2 rounded-full">
							<ChevronLeftIcon className="h-4 w-4 lg:h-6 lg:w-6 text-zinc-400" />
						</div>
					</ButtonBack>
					<ButtonNext>
						<div className="flex items-center justify-center border border-zinc-400 p-2 rounded-full">
							<ChevronRightIcon className="h-4 w-4 lg:h-6 lg:w-6 text-zinc-400" />
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
