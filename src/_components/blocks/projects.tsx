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
// jouer sur le nombre de segments, le -mx-[n%] et le w-1/n h-1/n du demi cercle noir pour changer la courbe
const PipeSegment = ({ classes = "", transition, reverse = false, color }) => <div className="relative !w-[100%] h-[12%] xl:h-[25%] lg:-mx-[2%] -mx-[3%] xl:-mx-[3%]">
	<div
		className={`w-full h-full ${reverse ? "translate-y-[100%] rounded-b-full" : "rounded-t-full"} ${color} ${classes} transform  origin-bottom bg-opacity-100`}
		style={{ transition }}
	/>
	<div className={`bottom-0 transform left-1/2  -translate-x-1/2 ${reverse ? " translate-y-[99%] rounded-b-full" : "rounded-t-full"}  absolute w-1/2 lg:w-2/3 xl:w-1/2 h-1/2 bg-black`} style={{ transition }} />
</div>;

const Projects = ({ projects }: Props) => {
	const [bgColor, setBgColor] = useState<
		customBlue | customGreen
	>(customBlue);
	const customTransition = "all 1.5s ease-in-out";
	const color = bgColor === customBlue ? "bg-custom-blue" : bgColor === customGreen ? "bg-primary bg-opacity-80" : "";
	return (
		<div
			className="px-4 py-32 md:px-16 relative bg-custom-dark z-10"
		>
			<div className="h-full w-full relative">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-[1] blur-[300px]">
					<div className="flex h-full w-full pt-28 relative">

						<PipeSegment reverse={bgColor === customBlue} color={color} transition={customTransition} />
						<PipeSegment reverse={bgColor === customGreen} color={color} transition={customTransition} />
						<PipeSegment reverse={bgColor === customBlue} color={color} transition={customTransition} />
						<PipeSegment reverse={bgColor === customGreen} color={color} transition={customTransition} />
						<PipeSegment reverse={bgColor === customBlue} color={color} transition={customTransition} />
						{/* <div
							className={`!w-[50%] h-[25%] rounded-tr-full  ${bgColor === customBlue
								? "bg-custom-blue"
								: bgColor === customGreen
									? "bg-primary"
									: ""
							} transform origin-bottom bg-opacity-100`}
							style={{ transition: customTransition }}
						/>
						<div
							className={`!w-[100%] h-[25%] translate-y-[100%] -mx-[5%] transform rounded-b-full  ${bgColor === customBlue
								? "bg-custom-blue"
								: bgColor === customGreen
									? "bg-primary"
									: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition }}
						/>
						<div
							className={`!w-[100%] h-[25%] rounded-t-full  ${bgColor === customBlue
								? "bg-custom-blue"
								: bgColor === customGreen
									? "bg-primary"
									: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition }}
						/>
						<div
							className={`!w-[100%] h-[25%] translate-y-[70%] -translate-x-[15%] rounded-b-full  ${bgColor === customBlue
								? "bg-custom-blue"
								: bgColor === customGreen
									? "bg-primary"
									: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition }}
						/>
						<div
							className={`!w-[100%] h-[25%] -translate-x-[35%] rounded-t-full  ${bgColor === customBlue
								? "bg-custom-blue"
								: bgColor === customGreen
									? "bg-primary"
									: ""
							} transform  origin-bottom bg-opacity-100`}
							style={{ transition: customTransition }}
						/> */}
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
