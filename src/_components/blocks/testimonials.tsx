"use client";

import { CarouselProvider } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import useIsMobile from "@/hooks/useIsMobile";
import { quotes } from "../../lib/testimonials";
import Container from "../container";

const Testimonials = () => {
	const isMobile = useIsMobile({ forIpad: true });
	return (
		<div className="bg-custom-dark px-4 md:px-16 pt-12 md:py-32">
			<Container>
				<h2 className="text-primary hidden">Témoignages</h2>
				<p className="ml-2 lg:ml-0 text-2xl lg:text-5xl !text-zinc-50 leading-snug">
          Ils nous font confiance. <br /> Merci à eux !
				</p>
				<div className="mt-16 relative lg:-left-2 w-full" >
					<CarouselProvider
						naturalSlideWidth={480}
						naturalSlideHeight={480}
						totalSlides={4}
						visibleSlides={isMobile ? 1 : 2.2}
						isIntrinsicHeight
					>
						<div className={"hidden lg:block absolute top-0 left-full z-10 h-full w-full bg-gradient-to-r from-transparent to-custom-dark to-5%"} />
						<div className={"hidden lg:block absolute top-0 right-full z-10 h-full w-full bg-gradient-to-l from-transparent to-custom-dark to-5%"} />
						<CustomSlider items={quotes} type="quote" isOverflowOpacity/>
					</CarouselProvider>
				</div>
			</Container>
		</div>
	);
};

export default Testimonials;
