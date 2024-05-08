"use client";

import React, { ReactNode } from "react";
import useIsMobile from "../hooks/useIsMobile";
import Container from "./container";

type Props = {
	type: "exp" | "skill" | "challenges" | "vite";
	children: ReactNode;
};

const WhiteGrid = ({ children, type }: Props) => {
	const isMobile = useIsMobile({ forIpad: true });

	const desktop = [
		["nul", "gbr", "nul", "nul", "nul", "bbl", "nul"],
		["nul", "nul", "nul", "nul", "nul", "nul", "nul"],
		["nul", "nul", "nul", "nul", "nul", "nul", "gbl"],
		["nul", "btr", "nul", "nul", "nul", "gtr", "nul"],
	];

	const mobile = [
		["nul", "nul", "nul", "nul"],
		["bbr", "nul", "gbr", "nul"],
		["nul", "nul", "nul", "gtl"],
		["nul", "nul", "nul", "nul"],
		["nul", "nul", "nul", "nul"],
		["nul", "nul", "nul", "bbr"],
		["gtr", "nul", "nul", "nul"],
	];
	const array = isMobile ? mobile : desktop;
	const rows = array.length;
	const cols = array[0].length;

	return (
		<div className="sticky bg-transparent top-0 left-0 h-screen overflow-x-hidden">
			<div className="absolute top-0 left-0 w-full mx-auto h-screen flex justify-center items-center ">
				<Container classes="w-full">{children}</Container>
			</div>
			{/* Grid Structure */}
			<div
				style={{ zIndex: -100, gridTemplateColumns: `repeat(${cols}, 1fr)` }}
				className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-transparent w-full h-full xl:h-5/6 xl:w-5/6 grid grid-cols-10 "

			>

				{array.map(
					(row, rowIndex) => row.map(
						(col, colIndex): ReactNode => {
							const color = col.slice(0, 1);
							const active = color === "g" || color === "b" && ["skill", "vite"].includes(type);
							let gradient = "";
							if (color === "g") {
								gradient = "rgba(255,255,255,0) 0%, rgba(0,198,94,0.02) 62%, rgba(0,198,94,0.33) 100%";
							} else if (col.slice(0, 1) === "b") {
								gradient = "rgba(255,255,255,0) 0%, rgba(6,3,141,0.015) 62%, rgba(6,3,141,0.33) 100%";
							}
							let orientation = "";
							switch (col.slice(1, 3)) {
							case "bl":
								orientation = "220deg"; break;
							case "br":
								orientation = "135deg"; break;
							case "tl":
								orientation = "315deg"; break;
							case "tr":
								orientation = "45deg"; break;
							}

							return <div
								key={`${rowIndex}-${colIndex}`}
								data-orientation={orientation}
								data-color={color}
								id={`${rows}/${rowIndex} ${col}`}
								style={orientation && color ? { background: `linear-gradient(${orientation}, ${gradient})`, opacity: active ? 1 : 0 } : {}}
								className="transition-opacity delay-500 duration-500 ease-in bg-opacity-0 "
							/>;
						})
				)}

			</div>
		</div>
	);
};

export default WhiteGrid;
