import { CarouselContext } from "pure-react-carousel";
import { useContext, useEffect, useMemo, useState } from "react";

const UseCarouselContext = () => {
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
		function onChange() {
			setCurrentSlide(carouselContext.state.currentSlide);
		}
		carouselContext.subscribe(onChange);
		return () => carouselContext.unsubscribe(onChange);
	}, [carouselContext]);
	
	return {currentSlide, slideRatio};
};

export default UseCarouselContext;
