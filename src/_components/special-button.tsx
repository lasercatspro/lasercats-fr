"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { customDark } from "@/lib/constants";

interface Props {
  title: string;
}

const SpecialButton = ({ title }: Props) => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const thisGsap = useMemo(() => gsap.timeline({ paused: true }), []);
	const [isHover, setIsHover] = useState(false);

	const animateSquares = useCallback(
		(squares: any) => {
			thisGsap.clear(); // Efface les animations précédentes
			// thisGsap.pause(0); // Remet la timeline à son début

			squares?.forEach((square: any, index: number) => {
				thisGsap.to(square, {
					backgroundColor: customDark, // Couleur finale
					ease: "expo.inOut",
					duration: 0.01,
					delay: 0.04 * (index / 100), // Ajoute un délai pour chaque carré
				});
			});

			thisGsap.play(); // Lance l'animation
		},
		[thisGsap]
	);

	useEffect(() => {
		if (gridRef.current) {
			const squares = Array.from(
				gridRef.current.querySelectorAll(".mini-squares")
			);
			if (isHover) {
				animateSquares(squares);
			} else {
				thisGsap.reverse(); // Inverse l'animation si la souris quitte la zone du bouton
			}
		}
	}, [gridRef, isHover, animateSquares, thisGsap]);

	const rows = 2;
	const cols = 8;

	return (
		<div
			className="relative w-[180px] h-[2.8rem] rounded-sm group "
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className="border-2 border-primary h-full w-full flex justify-center items-center rounded-sm">
				<p className="text-custom-dark group-hover:text-primary font-semibold">{title}</p>
				<div
					ref={gridRef}
					style={{ zIndex: -1 }}
					className="absolute inset-0 grid grid-cols-8 grid-rows-2"
				>
					{Array.from(Array(rows)).map((_row, rowIndex) =>
						Array.from(Array(cols).keys()).map((_col, colIndex) => (
							<div
								key={`${colIndex}-${rowIndex}`}
								id={`${rows}/${rowIndex}`}
								className={`aspect-square mini-squares bg-primary ${
									rowIndex === 0 && colIndex === 0 && "rounded-tl-sm"
								} 
              ${rowIndex === 0 && colIndex === 7 && "rounded-tr-sm"}
              ${rowIndex === 1 && colIndex === 0 && "rounded-bl-sm"}
              ${rowIndex === 1 && colIndex === 7 && "rounded-br-sm"}
              `}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default SpecialButton;
