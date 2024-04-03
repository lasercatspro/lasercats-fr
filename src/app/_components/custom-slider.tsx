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
import { useContext, useEffect, useMemo, useState } from "react";
import Quote from "./quote";
import { QuoteI } from "./blocks/testimonials";

type Props = {
	items: QuoteI[]
	type: "quote"
}

const CustomSlider = ({items, type}: Props) => {
	const carouselContext = useContext(CarouselContext);
	const [currentSlide, setCurrentSlide] = useState(
		carouselContext.state.currentSlide
	);
	// Return a float with to numbers after point
	// Float between 0 and 1
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
		function onChange() {
			setCurrentSlide(carouselContext.state.currentSlide);
		}
		carouselContext.subscribe(onChange);
		return () => carouselContext.unsubscribe(onChange);
	}, [carouselContext]);
	return ( 
		<>
			<Slider className="relative">
				{items.map((quote, index) => (
					<Slide key={quote.author} index={index}>
						{type === "quote" &&  <Quote quote={quote} />}
					</Slide>
				))}
			</Slider>
			{currentSlide > 0 && (
				<ButtonBack
					className="hidden lg:block absolute top-1/2 -left-5 border border-white border-opacity-25 rounded-full p-4 bg-custom-dark"
				>
					<ArrowLeftIcon className={"h-8 w-8 text-primary"} />
				</ButtonBack>
			)}
			{slideRatio < 1 && (
				<ButtonNext
					className="hidden lg:block absolute top-1/2 -right-5 border border-white border-opacity-25 rounded-full p-4 bg-custom-dark"
				>
					<ArrowRightIcon className={"h-8 w-8 text-primary"} />
				</ButtonNext>
			)}

			<div className="bg-gray-500 flex justify-start mt-6 w-[83%] lg:w-[96%] mx-auto h-2 rounded-lg">
				<Dot
					slide={currentSlide}
					className={
						"bg-primary w-10 rounded-lg transition-all duration-500 "
					}
					style={{ width: `${slideRatio * 100}%` }}
				/>
			</div>
		</>
	);
};

export default CustomSlider;