"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { useEffect, useMemo, useRef, useState } from "react";

const GridTransition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const gridRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
		};

		// Ajouter un écouteur d'événements pour détecter le défilement
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Nettoyer l'écouteur d'événements lors du démontage du composant
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // exécuté une seule fois lors du montage

	const rows = 4;
	const cols = 10;
	
	const targetsCoord = useMemo(
		() => [
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
			{col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows)},
		],
		[]
	);
	// const targetsCoord = useMemo(
	// 	() => [
	// 		{col: 6, row: 0},
	// 		{col: 7, row: 1},
	// 		{col: 4, row: 1},
	// 		{col: 5, row: 2},
	// 		{col: 6, row: 2},
	// 		{col: 2, row: 2},
	// 		{col: 1, row: 3},
	// 		{col: 4, row: 3},
	// 		{col: 5, row: 3},
	// 		{col: 6, row: 3},
	// 		{col: 7, row: 3},
	// 		{col: 8, row: 3},
	// 	],
	// 	[]
	// );

	const isMobile = useIsMobile({ forIpad: true });
	
	return (
		<div>
			<div className="mb-32 overflow-x-hidden relative !bg-opacity-10">
				<div className="px-8 lg:px-24 relative">
					<div
						style={{ zIndex: 20 }}
						className="flex justify-center items-center h-[60vh] lg:h-[80vh]"
					>
						<p className="md:text-5xl text-center !text-zinc-50 mix-blend-difference">
							{
								"Votre succès est notre mission, et nous transformons chaque projet en une expérience digitale mémorable, reflétant l'excellence et l'innovation."
							}
						</p>
						<div
							ref={gridRef}
							style={{ zIndex: -1 }}
							className="absolute top-0 -left-12 w-[120vw] grid grid-cols-10 h-[60vh] lg:h-auto"
						>
							
							{Array.from(Array(rows)).map((_row, rowIndex) =>
								Array.from(Array(cols).keys()).map((col, colIndex) => (
									<div
										key={`${colIndex}-${rowIndex}`}
										className={"lg:aspect-square"}
										style={{
											background:
                          scrollPosition >
														((gridRef?.current?.offsetHeight as number) * (isMobile ? 10.3: 6.6)  + (rowIndex * 120)) &&
															(
																// // On rend transparent les div pour chaque ligne
																targetsCoord.filter(obj => obj.col === colIndex && obj.row === rowIndex).length > 0 || (
																	// Si on scroll vraiment, la dernière ligne disparaît
																	(scrollPosition > (gridRef?.current?.offsetHeight as number) * 7.9) && (rowIndex === (rows - (rows - rowIndex)))
																)
															) ? "transparent" : "black"
										}}
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
