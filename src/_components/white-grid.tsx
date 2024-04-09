/* eslint-disable no-mixed-spaces-and-tabs */
"use client";

import React, { ReactNode } from "react";
import useIsMobile from "../app/hooks/useIsMobile";

type Props = {
  type: "exp" | "skill" | "challenges" | "vite"
  children: ReactNode;
};

const WhiteGrid = ({ children, type }: Props) => {
	const isMobile = useIsMobile({ forIpad: true });
	const tills = [
		// Bottom Left "bl"
		{ coord: `${isMobile ? 5 : 0 },7`, place: "bl", color: "green" }, 
		{ coord: `${isMobile ? 9 : 2 },1`, place: "bl", color: "green"  },
		{ coord: `${isMobile ? 9 : 2 },7`, place: "bl", color: "green"  },
		( isMobile ? { coord: "3,3", place: "bl", color: "green"  } : undefined),
		( isMobile ? { coord: "4,6", place: "bl", color: "green"  } : undefined),
		( isMobile ? { coord: "11,5", place: "bl", color: "green"  } : undefined),
		// Bottom Right "br"
		{ coord: `${isMobile ? 5 : 0 },1`, place: "br", color: "blue"  },
		{ coord: `${isMobile ? 5 : 0 },5`, place: "br", color: "blue"  },
		( isMobile ? { coord: "11,3", place: "br", color: "blue"  } : undefined),
		// Top Right "tr"
		{ coord: `${isMobile ? 10 : 3 },6`, place: "tr", color: "green"  },
		( isMobile ? { coord: "4,2", place: "tr", color: "green"  } : undefined),
		// Top Left "tl"
		{ coord: `${isMobile ? 7 : 1 },2`, place: "tl", color: "green"  },
		{ coord: `${isMobile ? 10 : 3 },2`, place: "tl", color: "blue" },
	];

	const rows = isMobile ? 15 : 4;
	const cols = 10;
	return (
		<div className="sticky bg-transparent top-0 left-0 h-screen overflow-x-hidden">
			<div className="absolute top-0 left-0 w-full mx-auto h-screen flex justify-center items-center">
				{children}
			</div>
			{/* Grid Structure */}
			<div style={{zIndex: -100}} className="absolute top-0 -left-4 lg:-left-10 bg-transparent w-[120vw] grid grid-cols-10 h-screen">
				{Array.from(Array(rows)).map((_row, rowIndex) =>
					Array.from(Array(cols).keys()).map((col, colIndex) => (
						<div
							key={col}
							style={{
								border: tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.color ? "none" : "",
								background: 
                (
                	(tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.color === "green") ? 
                		`linear-gradient(${
                  	tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "bl" &&"220deg" || 
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "br" &&"135deg" ||
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tl" &&"315deg" ||
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tr" &&"45deg"
                		}, rgba(255,255,255,0) 0%, rgba(0,198,94,0.02) 62%, rgba(0,198,94,0.3351541300113795) 100%)` 
                		:
                	(type === "skill" || type === "vite" &&  
                  tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.color === "blue") ? 
                		`linear-gradient(${
                  	tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "bl" &&"220deg" || 
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "br" &&"135deg" ||
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tl" &&"315deg" ||
                    tills.filter(i => i?.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tr" &&"45deg"
                		}, rgba(255,255,255,0) 0%, rgba(6,3,141,0.015) 62%, rgba(6,3,141,0.3351541300113795) 100%)`
                		: ""
                )
							}}
							className={"border border-gray-200 border-opacity-50"}
							// aspect-square if you want perfect squares
						 />
					))
				)}
			</div>
		</div>
	);
};

export default WhiteGrid;
