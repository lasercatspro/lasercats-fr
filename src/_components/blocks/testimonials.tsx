"use client";

import { CarouselProvider } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import useIsMobile from "@/hooks/useIsMobile";
import { quotes } from "../../lib/testimonials";
import Container from "../container";

const Testimonials = () => {
	const isMobile = useIsMobile({ forIpad: true });
	return (
		<div className="bg-custom-dark px-4 md:px-16 py-32">
			<Container>
				<h2 className="text-primary hidden">Témoignages</h2>
				<p className="text-2xl lg:text-5xl !text-zinc-50 leading-snug">
          Ils nous font confiance. <br /> Merci à eux !
				</p>
				<div className="mt-16 relative lg:-left-7 w-full" >
					<CarouselProvider
						naturalSlideWidth={300}
						naturalSlideHeight={100}
						totalSlides={3}
						visibleSlides={isMobile ? 1 : 2.2}
						isIntrinsicHeight
					>
						<CustomSlider items={quotes} type="quote" />
					</CarouselProvider>
				</div>
			</Container>
		</div>
	);
};

export default Testimonials;
