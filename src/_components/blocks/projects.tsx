/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { Dispatch, SetStateAction, useState } from "react";
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

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<
    customBlue | customGreen
  >(customBlue);
	const customTransition = "background-color 1.5s ease-in-out";
	return (
		<div
			className="px-4 py-32 md:px-16 relative bg-custom-dark z-10"
		>
			<div className="h-full w-full relative">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-[1] blur-[300px]">
					<div className="flex h-full w-full pt-28 relative">
						<div
							className={`!w-[50%] h-[25%] rounded-tr-full  ${
								bgColor === customBlue
									? "bg-custom-blue"
									: bgColor === customGreen
										? "bg-primary"
										: ""
							} transform origin-bottom bg-opacity-100`}
							style={{ transition: customTransition}}
						/>
						<div
							className={`!w-[35%] h-[25%] translate-y-[100%] transform scale-x-[200%] rounded-b-full  ${
								bgColor === customBlue
									? "bg-custom-blue"
									: bgColor === customGreen
										? "bg-primary"
										: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition}}
						/>
						<div
							className={`!w-[100%] h-[25%] rounded-t-full  ${
								bgColor === customBlue
									? "bg-custom-blue"
									: bgColor === customGreen
										? "bg-primary"
										: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition}}
						/>
						<div
							className={`!w-[100%] h-[25%] translate-y-[70%] -translate-x-[15%] rounded-b-full  ${
								bgColor === customBlue
									? "bg-custom-blue"
									: bgColor === customGreen
										? "bg-primary"
										: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition}}
						/>
						<div
							className={`!w-[100%] h-[25%] -translate-x-[35%] rounded-t-full  ${
								bgColor === customBlue
									? "bg-custom-blue"
									: bgColor === customGreen
										? "bg-primary"
										: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition}}
						/>
					</div>
				</div>
				<Container>
					<CarouselProvider
						naturalSlideWidth={300}
						naturalSlideHeight={100}
						totalSlides={projects?.length}
						visibleSlides={1}
						isIntrinsicHeight
						isPlaying={true}
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
