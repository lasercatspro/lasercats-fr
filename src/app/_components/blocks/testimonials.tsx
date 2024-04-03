"use client";

import { CarouselProvider } from "pure-react-carousel";
import CustomSlider from "../custom-slider";
import useIsMobile from "@/app/hooks/useIsMobile";
import { quotes } from "@/lib/testimonials";

const Testimonials = () => {
	const isMobile = useIsMobile({ forIpad: true });
	return (
		<div className="bg-custom-dark">
			<div className="mx-2 py-16 lg:mx-24">
				<div className="px-8 md:px-20">
					<h2 className="text-primary hidden">Témoignages</h2>
					<p className="text-2xl lg:text-5xl !text-zinc-50 leading-snug">
          Ils nous font confiance. <br /> Merci à eux !
					</p>
				</div>
				<div className="mt-16 relative md:px-12" >
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
			</div>
		</div>
	);
};

export default Testimonials;
