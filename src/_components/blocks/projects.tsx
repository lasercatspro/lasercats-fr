/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider, ButtonNext, ButtonBack } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { Dispatch, SetStateAction, useState } from "react";
import { Client } from "@/types/items";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Container from "../container";
import { customBlue, customGreen } from "@/lib/constants";
import UseCarouselContext from "@/hooks/useCarouselContext";

type Props = {
  projects: Client[];
};

const SubProjet = ({
	projects,
	setBgColor,
}: {
  projects: Client[];
  setBgColor: Dispatch<SetStateAction<customBlue | customGreen | "transition">>;
}) => {
	const { currentSlide, slideRatio } = UseCarouselContext();
	return (
		<>
			<div className="flex justify-between items-center">
				<h2 className="text-zinc-50">Nos Projets</h2>
				<div className="flex justify-end items-start px-8 gap-8">
					<ButtonBack>
						<div className={`flex items-center justify-center border ${currentSlide === 0 ? "border-zinc-800" : "border-zinc-400"}  p-2 rounded-full`}>
							<ChevronLeftIcon className={`h-4 w-4 lg:h-6 lg:w-6  ${currentSlide === 0 ? "text-zinc-800" : "text-zinc-400"}`} />
						</div>
					</ButtonBack>
					<ButtonNext>
						<div className={`flex items-center justify-center border ${slideRatio === 1 ? "border-zinc-800" : "border-zinc-400"}  p-2 rounded-full`}>
							<ChevronRightIcon className={`h-4 w-4 lg:h-6 lg:w-6  ${slideRatio === 1 ? "text-zinc-800" : "text-zinc-400"}`} />
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
		</>
	);
};

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<
    customBlue | customGreen | "transition"
  >(customBlue);
	return (
		<div
			className={`px-4 py-32 md:px-16 relative bg-custom-dark backdrop-blur-xl z-10 
			`}
			style={{
				transition: "background-color 0.5s ease",
			}}
		>
			<div
				className={"h-full w-full relative"} >
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-[1] flex pt-32 blur-3xl">
					<div className={`!w-[50%] h-[20%] rotate-[12deg] ${bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary" : ""} transform skew-y-3 origin-bottom bg-opacity-65`} />
					<div className={`!w-[35%] h-[20%] -rotate-[23deg] ${bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary" : ""} transform skew-y-3 origin-bottom bg-opacity-65`} />
					<div className={`!w-[100%] h-[25%] rotate-[3deg] ${bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary" : ""} transform skew-y-3 origin-bottom bg-opacity-65`} />
					<div className={`absolute left-[200px] bottom-[50px] !w-[100px] h-[100px] rounded-full ${bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary" : ""} transform skew-y-3  bg-opacity-100`} />
				</div>
				<Container>
					<CarouselProvider
						naturalSlideWidth={300}
						naturalSlideHeight={100}
						totalSlides={projects?.length}
						visibleSlides={1}
						isIntrinsicHeight
					>
						<SubProjet projects={projects} setBgColor={setBgColor} />
					</CarouselProvider>
				</Container>
			</div>
		</div>
	);
};

export default Projects;
