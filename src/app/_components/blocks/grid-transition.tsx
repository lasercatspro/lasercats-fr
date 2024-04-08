"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GridTransition = () => {
	const gridRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const element = gridRef?.current;
		let squares: any[] = [];
		if (window !== undefined) {
			const s = window.document.querySelectorAll(".squares");
			squares = Array.from(s);
		}
		const thisGsap = gsap.timeline({repeat: 1});

		if (element && squares.length > 0) {
			squares.forEach((square) => {
				thisGsap.to(square, {
					opacity: 0,
					ease: "expo.inOut",
					duration: 0.25,
					stagger: function() {
						return Math.random() * 0.9;
					},
					scrollTrigger: {
						trigger: gridRef.current,
						start: "top 60%", 
						end: "bottom 60%",
						scrub: true,
						// markers: true
					}
				});
			});
		}
	}, []);

	const rows = 4;
	const cols = 10;
	const rowsMobile = 9;
	const colsMobile = 10;
	
	const isMobile = useIsMobile({ forIpad: true });
	
	return (
		<div>
			<div className="mb-32 overflow-x-hidden relative !bg-opacity-10">
				<div className=" relative">
					<div
						className="flex justify-center items-center h-[44vh] lg:h-screen"
					>
						<p className="md:text-5xl text-center !text-zinc-50 mix-blend-difference px-2 lg:px-8">
							{
								"Votre succès est notre mission, et nous transformons chaque projet en une expérience digitale mémorable, reflétant l'excellence et l'innovation."
							}
						</p>
						<div
							ref={gridRef}
							style={{ zIndex: -1 }}
							className="absolute top-0 -left-12 w-[120vw] grid grid-cols-10 h-fit"
						>
							
							{Array.from(Array(isMobile ? rowsMobile : rows)).map((_row, rowIndex) =>
								Array.from(Array(isMobile ? colsMobile : cols).keys()).map((_col, colIndex) => (
									<div
										key={`${colIndex}-${rowIndex}`}
										className={"aspect-square squares bg-custom-dark"}
									/>
								))
							)}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default GridTransition;
