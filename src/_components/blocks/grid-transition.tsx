"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../container";

gsap.registerPlugin(ScrollTrigger);

const GridTransition = () => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const thisGsap = useMemo(() => gsap.timeline({ repeat: 1 }), []);
	const isMobile = useIsMobile({ forIpad: true });
	const [gridHeight, setGridHeight] = useState<number | null>(null);
	useEffect(() => {
		if (gridRef.current) {
			// Mettez à jour la hauteur de la grille lorsqu'elle est montée ou lorsque isMobile change
			setGridHeight(gridRef.current.offsetHeight);
		}
	}, [gridRef, isMobile]);
	const animeSquares = useCallback((squares: any) => {
		squares?.forEach((square: any) => {
			thisGsap.to(square, {
				opacity: 0,
				ease: "expo.inOut",
				duration: 0.25,
				stagger: function() {
					const colsArray = square.id.split("/");
					return Math.random() * (Number(colsArray.at(0)) - Number(colsArray.at(-1)));
				},
				scrollTrigger: {
					trigger: gridRef.current,
					start: isMobile ? "top 150%" : "top 200%",
					end: isMobile ? "bottom 50%" : "bottom 90%",
					scrub: true,
					// markers: true
				}
			});
		});
	}, [gridRef, isMobile]);

	useEffect(() => {
		if (window !== undefined) {
			const element = gridRef?.current;
			const squares = Array.from(window.document.querySelectorAll(".squares"));
			if (element && squares?.length > 0) {
				animeSquares(squares);
			}
		}
	}, [gridRef, gridHeight, isMobile]);

	const rows = 3;
	const cols = 10;
	const rowsMobile = 3;
	const colsMobile = 5;

	return (
		<div className={"mb-16 overflow-x-hidden relative !bg-opacity-10"} style={{ height: `${gridHeight}px` }}>
			<Container classes="h-full flex flex-col justify-end pb-12 lg:pb-24 items-center">
				<h2 className="md:text-5xl text-center !text-zinc-50 mix-blend-difference px-2 lg:px-8">
					{
						"N’importe quelle machine peut faire un site, mais il faut une vraie équipe pour développer votre produit."
					}
				</h2>
			</Container>
			<div
				ref={gridRef}
				style={{ zIndex: -1, gridTemplateColumns: `repeat(${isMobile ? colsMobile : cols}, 1fr)` }}
				className="absolute top-0 -left-3 lg:-left-12 w-[120vw] grid grid-cols-10 h-fit"
			>
				{Array.from(Array(isMobile ? rowsMobile : rows)).map((_row, rowIndex) =>
					Array.from(Array(isMobile ? colsMobile : cols).keys()).map((_col, colIndex) => (
						<div
							key={`${colIndex}-${rowIndex}`}
							id={`${isMobile ? rowsMobile : rows}/${rowIndex}`}
							className={"aspect-square squares bg-custom-dark"}
						/>
					))
				)}
			</div>
		</div >

	);
};

export default GridTransition;
