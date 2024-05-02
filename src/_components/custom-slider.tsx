"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import Quote from "./quote";
import { QuoteI } from "../lib/testimonials";
import Project from "./project";
import { Client } from "../types/items";
import { customBlue, customGreen } from "@/lib/constants";
import useIsMobile from "@/hooks/useIsMobile";
import UseCarouselContext from "@/hooks/useCarouselContext";

type Props = {
  items: QuoteI[] | Client[];
  type: "quote" | "projects";
  backBtn?: boolean;
  nextBtn?: boolean;
  dotsType?: "range" | "bullets";
	setBgColor?: Dispatch<SetStateAction<customBlue | customGreen | "transition">>;
	isOverflowOpacity?: boolean;
};

const CustomSlider = ({
	items,
	type,
	backBtn = true,
	nextBtn = true,
	dotsType = "range",
	setBgColor,
	isOverflowOpacity = false,
}: Props) => {
	const isMobile = useIsMobile({forIpad: true});
	const { currentSlide, slideRatio } = UseCarouselContext();
	
	useEffect(() => {
		if (setBgColor) {
			setBgColor("transition");
			const bgTimeOut = setTimeout(() => setBgColor(currentSlide % 2 === 0 ? customBlue : customGreen), 500);
			return () => clearTimeout(bgTimeOut);
		}
	}, [currentSlide]);
	
	return (
		<div className="relative">
			{isOverflowOpacity && <div className={"hidden lg:block absolute top-0 left-[90%] z-10 h-full w-[600px]  bg-gradient-to-r from-transparent to-custom-dark to-50%"} />}
			{isOverflowOpacity && <div className={"hidden lg:block absolute top-0 right-[90%] z-10 h-full w-[600px] bg-gradient-to-l from-transparent to-custom-dark to-50%"} />}
			<Slider className="relative mb-2 lg:mb-16" style={{overflow: isOverflowOpacity && !isMobile ? "visible" : ""}}>
				{type === "quote" && (items as QuoteI[]).map((quote, index) => (
					<Slide key={quote?.author} index={index}>
						<Quote quote={quote} />
					</Slide>
				))}
				{type === "projects" && (items as Client[]).map((project, index) => (
					<Slide key={project?.title} index={index}>
						<Project project={project} />
					</Slide>
				))}
			</Slider>
			{currentSlide > 0 && backBtn && (
				<ButtonBack className="hidden lg:block absolute z-10 top-1/2 -left-16 border border-zinc-50 border-opacity-10 hover:border-opacity-30 rounded-full p-4 bg-custom-dark">
					<ArrowLeftIcon className={"h-8 w-8 text-primary"} />
				</ButtonBack>
			)}
			{slideRatio < 1 && nextBtn && (
				<ButtonNext className="hidden lg:block absolute z-10 top-1/2 -right-16 border border-zinc-50 border-opacity-10 hover:border-opacity-30 rounded-full p-4 bg-custom-dark">
					<ArrowRightIcon className={"h-8 w-8 text-primary"} />
				</ButtonNext>
			)}

			{dotsType === "range" && (
				<div className="bg-zinc-800 flex justify-start mt-6 w-[95%] lg:w-[96%] mx-auto h-1 rounded-lg">
					<Dot
						slide={currentSlide}
						className={
							"bg-primary w-10 rounded-lg transition-all duration-500"
						}
						style={{ width: `${slideRatio * 100}%` }}
					/>
				</div>
			)}
			{dotsType === "bullets" && (
				<div className="flex justify-center items-center gap-4 lg:gap-8">
					{items.map((i, index) => (
						currentSlide === index ? 
							<img key={`index-${index}`} src="/assets/images/logos/laser-simple.svg" alt="lasercats logo" className="h-3 w-3 lg:h-4 lg:w-4"/>
							:
							<Dot
								key={`index-${index}`}
								slide={index}
								className={
									`h-3 w-3 lg:h-4 lg:w-4 rounded-full ${currentSlide === index ? "bg-primary" : "bg-zinc-800"}`
								}
							/>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSlider;
