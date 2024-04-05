"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { useEffect, useMemo, useRef, useState } from "react";

const GridTransition = () => {
	const [gridPosition, setGridPosition] = useState<DOMRect | null>(null);
	const gridRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (gridRef.current) {
				const element = gridRef.current.getBoundingClientRect();
				console.log(element);
				setGridPosition(element);
			}
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
	const rowsMobile = 4;
	const colsMobile = 4;
	
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
			{col: Math.floor(Math.random() * cols), row: rows - 1},
			{col: Math.floor(Math.random() * cols), row: rows - 1},
			{col: Math.floor(Math.random() * cols), row: rows - 1},
		],
		[]
	);
	const targetsCoordMobile = useMemo(
		() => [
			{col: Math.floor(Math.random() * colsMobile), row: Math.floor(Math.random() * rowsMobile)},
			{col: Math.floor(Math.random() * colsMobile), row: Math.floor(Math.random() * rowsMobile)},
			{col: Math.floor(Math.random() * colsMobile), row: Math.floor(Math.random() * rowsMobile)},
			{col: Math.floor(Math.random() * colsMobile), row: Math.floor(Math.random() * rowsMobile)},
			{col: Math.floor(Math.random() * colsMobile), row: Math.floor(Math.random() * rowsMobile)},
			{col: Math.floor(Math.random() * colsMobile), row: rowsMobile -1},
			{col: Math.floor(Math.random() * colsMobile), row: rowsMobile -1},
			{col: Math.floor(Math.random() * colsMobile), row: rowsMobile -1},
		],
		[]
	);

	const isMobile = useIsMobile({ forIpad: true });
	
	return (
		<div>
			<div className="mb-32 overflow-x-hidden relative !bg-opacity-10">
				<div className="px-8 lg:px-24 relative">
					<div
						// style={{ zIndex: 20 }}
						className="flex justify-center items-center h-[55vh] lg:h-screen"
					>
						<p className="md:text-5xl text-center !text-zinc-50 mix-blend-difference">
							{
								"Votre succès est notre mission, et nous transformons chaque projet en une expérience digitale mémorable, reflétant l'excellence et l'innovation."
							}
						</p>
						<div
							ref={gridRef}
							style={{ zIndex: -1 }}
							className="absolute top-0 -left-12 w-[120vw] grid grid-cols-4 lg:grid-cols-10 h-[50vh] lg:h-[95vh]"
						>
							
							{Array.from(Array(isMobile ? rowsMobile : rows)).map((_row, rowIndex) =>
								Array.from(Array(isMobile ? colsMobile : cols).keys()).map((col, colIndex) => (
									<div
										key={`${colIndex}-${rowIndex}`}
										className={"lg:aspect-square"}
										style={{
											background:
                          ((gridPosition?.bottom as number) < (gridPosition?.height as number) + (isMobile ? 70 : 40) * (isMobile ? (rowsMobile - rowIndex) : (rows - rowIndex))) &&
															(
																// // On rend transparent les div pour chaque ligne
																(isMobile ? targetsCoordMobile : targetsCoord).filter(obj => obj.col === colIndex && obj.row === rowIndex).length > 0 
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
