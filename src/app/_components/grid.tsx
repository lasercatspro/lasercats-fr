/* eslint-disable no-mixed-spaces-and-tabs */
"use client";

import React, { ReactNode } from "react";

type Props = {
  type: "exp" | "skill"
  children: ReactNode;
};

const Grid = ({ children, type }: Props) => {
	
	const tills = [
		// Bottom Left "bl"
		{ coord: "0,7", place: "bl", color: "green" }, 
		{ coord: "2,1", place: "bl", color: "green"  },
		{ coord: "2,7", place: "bl", color: "green"  },
		// Bottom Right "br"
		{ coord: "0,1", place: "br", color: "blue"  },
		{ coord: "0,5", place: "br", color: "blue"  },
		// Top Right "tr"
		{ coord: "3,6", place: "tr", color: "green"  },
		// Top Left "tl"
		{ coord: "1,2", place: "tl", color: "green"  },
		{ coord: "3,2", place: "tl", color: "blue" },
	];

	const rows = 5;
	const cols = 10;
	return (
		<div className="sticky bg-transparent top-0 left-0 h-screen">
			<div className="absolute top-0 left-0 w-full mx-auto h-screen flex justify-center items-center">
				{children}
			</div>
			{/* Grid Structure */}
			<div style={{zIndex: -100}} className="absolute top-0 left-0 bg-transparent w-[120vw] -ml-12 overflow-x-hidden grid grid-cols-10 h-[100vh]">
				{Array.from(Array(rows)).map((_row, rowIndex) =>
					Array.from(Array(cols).keys()).map((col, colIndex) => (
						<div
							key={col}
							style={{
								border: tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.color ? "none" : "",
								background: 
                (
                	(tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.color === "green") ? 
                		`linear-gradient(${
                  	tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "bl" &&"220deg" || 
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "br" &&"135deg" ||
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tl" &&"315deg" ||
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tr" &&"45deg"
                		}, rgba(255,255,255,0) 0%, rgba(0,198,94,0.02) 62%, rgba(0,198,94,0.3351541300113795) 100%)` 
                		:
                	(type === "skill" &&  
                  tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.color === "blue") ? 
                		`linear-gradient(${
                  	tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "bl" &&"220deg" || 
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "br" &&"135deg" ||
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tl" &&"315deg" ||
                    tills.filter(i => i.coord === `${rowIndex},${colIndex}`)?.at(0)?.place === "tr" &&"45deg"
                		}, rgba(255,255,255,0) 0%, rgba(4,2,103,0.02) 62%, rgba(4,2,103,0.3351541300113795) 100%)`
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

export default Grid;
