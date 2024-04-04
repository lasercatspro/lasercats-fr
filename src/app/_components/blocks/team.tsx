"use client";

import { Member } from "@/types/items";
import { useMemo } from "react";

const members: Member[] = [
	{
		name: "Nico",
		role: "Dev",
	},
	{
		name: "Thierry",
		role: "Dev",
	},
	{
		name: "Louis",
		role: "Dev",
	},
	{
		name: "François",
		role: "Dev",
	},
	{
		name: "Antoine",
		role: "Dev",
	},
	{
		name: "Damien",
		role: "Dev",
	},
	{
		name: "Anthonin",
		role: "Dev",
	},
];

function randomMembers(array: any[]) {
	const randomArray: any[] = [];
	const copiedArray = array.slice();

	array.forEach(() => {
		const randomIndex = Math.floor(Math.random() * copiedArray.length);
		randomArray.push(copiedArray.at(randomIndex));
		copiedArray.splice(randomIndex, 1);
	});
	return randomArray;
}

const Team = () => {
	const thisTimeMembers = useMemo(() => randomMembers(members), []);
	return ( 
		<div className="relative px-4 md:px-16 space-y-12 leading-10">
			<div className="flex justify-between">
				<h2 className="w-1/2">
            Nous sommes une équipe soudée, réactive et toujours présente
				</h2>
				<p className="w-1/2">
            Nous sommes une équipe qui travaille dans un cadre coopératif où
            nous nous sentons bien. Nous travaillons sur les projets qui nous
            donne envie et si nous décidons de travailler avec vous, c’est toute
            l’équipe qui sera engagée pour réaliser votre projet. Nous avons des
            outils directs pour échanger avec vous et nous nous sommes organisés
            pour être toujours disponible.
				</p>
			</div>
			<div className="flex gap-1 justify-center w-full overflow-x-scroll">
				{thisTimeMembers.map((member) => (
					<div
						key={member.name}
						className="flex flex-col items-center w-full justify-center"
					>
						<div className="h-[300px] w-full bg-gray-400" />
						<div className="flex flex-col justify-center items-center p-8 gap-4">
							<p className=" !text-custom-dark uppercase font-extrabold text-xl">
								{member.name}
							</p>
							<p className=" !text-custom-dark text-opacity-70 px-4 py-1 rounded-md text-xs">
								{member.role}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
 
export default Team;