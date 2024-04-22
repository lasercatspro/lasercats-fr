/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider, ButtonNext, ButtonBack } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";
import { Client } from "@/types/items";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Container from "../container";
import { customBlue, customGreen } from "@/lib/constants";

type Props = {
  projects: Client[];
};

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<
    customBlue | customGreen | "transition"
  >(customBlue);
	return (
		<div
			className={`px-4 py-32 md:px-16 relative bg-custom-dark z-10 ${
				bgColor === customBlue &&
        "bg-cover bg-center bg-[url('/assets/images/backgrounds/svg-blue.svg')]"
			} ${
				bgColor === customGreen &&
        "bg-cover bg-center bg-[url('/assets/images/backgrounds/svg-green.svg')]"
			}
			
			`}
		>
			<Container>
				<CarouselProvider
					naturalSlideWidth={300}
					naturalSlideHeight={100}
					totalSlides={projects?.length}
					visibleSlides={1}
					isIntrinsicHeight
				>
					<div className="flex justify-between items-center">
						<h2 className="text-zinc-50">Nos Projets</h2>
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
					</div>
					<div className="mt-8 lg:mt-24">
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
			</Container>
		</div>
	);
};

export default Projects;
