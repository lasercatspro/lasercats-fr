/* eslint-disable react/no-unknown-property */
"use client";

import { CarouselProvider, ButtonNext, ButtonBack } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import { useState } from "react";
import { Client } from "@/types/items";
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
				<div className="absolute -z-10 left-0 transition-opacity duration-300 ease-in-out">
					{bgColor === "#00C65E" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1920"
							height="1080"
							fill="none"
							className=""
						>
							<g clipPath="url(#a)" filter="url(#b)" opacity=".66">
								<path
									// stroke="#06038D" // green => "#00C65E"
									stroke={"#00C65E"}
									strokeLinecap="round"
									strokeWidth="500"
									d="M2542.02 599.942c-16.04 23.212-134.67 36.634-184.85 47.667-104.23 22.923-238.69 33.585-368.67 36.843-262.78 6.586-539.03 2.048-811.97-20.958-166.94-14.072-357.264-62.607-510.503-94.797-159.102-33.422-332.267-54.425-497.919-78.557-153.307-22.333-343.906-43.172-494.623-38.189-106.284 3.514-196.822 17.702-255.686 47.144-43.253 21.635-36.175 51.753-38.511 79.463"
								/>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h1920v1080H0z" />
								</clipPath>
								<filter
									id="b"
									width="4310.77"
									height="1384"
									x="-1194.73"
									y="-122.787"
									colorInterpolationFilters="sRGB"
									filterUnits="userSpaceOnUse"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feBlend
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									/>
									<feGaussianBlur
										result="effect1_foregroundBlur_3364_12433"
										stdDeviation="162"
									/>
								</filter>
							</defs>
						</svg>
					)}

					{bgColor === "#06038D" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1920"
							height="1080"
							fill="none"
							className=""
						>
							<g clipPath="url(#a)" filter="url(#b)" opacity=".66">
								<path
									// stroke="#06038D" // green => "#00C65E"
									stroke={"#06038D"}
									strokeLinecap="round"
									strokeWidth="500"
									d="M2542.02 599.942c-16.04 23.212-134.67 36.634-184.85 47.667-104.23 22.923-238.69 33.585-368.67 36.843-262.78 6.586-539.03 2.048-811.97-20.958-166.94-14.072-357.264-62.607-510.503-94.797-159.102-33.422-332.267-54.425-497.919-78.557-153.307-22.333-343.906-43.172-494.623-38.189-106.284 3.514-196.822 17.702-255.686 47.144-43.253 21.635-36.175 51.753-38.511 79.463"
								/>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h1920v1080H0z" />
								</clipPath>
								<filter
									id="b"
									width="4310.77"
									height="1384"
									x="-1194.73"
									y="-122.787"
									colorInterpolationFilters="sRGB"
									filterUnits="userSpaceOnUse"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feBlend
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									/>
									<feGaussianBlur
										result="effect1_foregroundBlur_3364_12433"
										stdDeviation="162"
									/>
								</filter>
							</defs>
						</svg>
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
