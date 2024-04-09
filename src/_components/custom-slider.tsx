"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Dot,
	CarouselContext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import Quote from "./quote";
import { QuoteI } from "../lib/testimonials";
import Project from "./project";
import { Client } from "../types/items";

type Props = {
  items: QuoteI[] | Client[];
  type: "quote" | "projects";
  backBtn?: boolean;
  nextBtn?: boolean;
  dotsType?: "range" | "bullets";
	setBgColor?: Dispatch<SetStateAction<"#06038D" | "#00C65E" | "transition">>
};

const CustomSlider = ({
	items,
	type,
	backBtn = true,
	nextBtn = true,
	dotsType = "range",
	setBgColor
}: Props) => {
	const carouselContext = useContext(CarouselContext);
	const [currentSlide, setCurrentSlide] = useState(
		carouselContext.state.currentSlide
	);
	// Return a float with to numbers after point
	// Float between 0.00 and 1.00
	// ex: 0.66
	const slideRatio: number = useMemo(() => {
		return Number(
			(
				(carouselContext.state.visibleSlides + currentSlide) /
        carouselContext.state.totalSlides
			).toFixed(2)
		);
	}, [carouselContext, currentSlide]);

	useEffect(() => {
		if (setBgColor) {
			setBgColor("transition");
			setTimeout(() => setBgColor(currentSlide % 2 === 0 ? "#06038D" : "#00C65E"), 500);
		}
	}, [currentSlide]);

	useEffect(() => {
		function onChange() {
			setCurrentSlide(carouselContext.state.currentSlide);
		}
		carouselContext.subscribe(onChange);
		return () => carouselContext.unsubscribe(onChange);
	}, [carouselContext]);
	
	return (
		<>
			<Slider className="relative mb-8">
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
				<ButtonBack className="hidden lg:block absolute top-1/2 -left-5 border border-white border-opacity-25 rounded-full p-4 bg-custom-dark">
					<ArrowLeftIcon className={"h-8 w-8 text-primary"} />
				</ButtonBack>
			)}
			{slideRatio < 1 && nextBtn && (
				<ButtonNext className="hidden lg:block absolute top-1/2 -right-5 border border-white border-opacity-25 rounded-full p-4 bg-custom-dark">
					<ArrowRightIcon className={"h-8 w-8 text-primary"} />
				</ButtonNext>
			)}

			{dotsType === "range" && (
				<div className="bg-gray-500 flex justify-start mt-6 w-[83%] lg:w-[96%] mx-auto h-1 rounded-lg">
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
				<div className="flex justify-center gap-8">
					{items.map((i, index) => (
						<Dot
							key={`index-${index}`}
							slide={index}
							className={
								`h-4 w-4 rounded-full ${currentSlide === index ? "bg-primary" : "bg-zinc-600"}`
							}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default CustomSlider;