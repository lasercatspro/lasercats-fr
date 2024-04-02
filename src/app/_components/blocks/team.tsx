import { Member } from "@/types/items";

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
	return (
		<div className="">
			<div className="bg-custom-dark mb-32">
				<div className="py-80 max-w-7xl mx-auto">
					<h2 className="md:text-5xl text-center !text-zinc-50">
						{
							"Votre succès est notre mission, et nous transformons chaque projet en une expérience digitale mémorable, reflétant l'excellence et l'innovation."
						}
					</h2>
				</div>
			</div>
			<div className="relative max-w-7xl mx-auto space-y-24 text-center leading-10">
				<h2>Nous sommes une équipe soudée, réactive et toujours présente</h2>
				<p>
          Nous sommes une équipe qui travaille dans un cadre coopératif où nous
          nous sentons bien. Nous travaillons sur les projets qui nous donne
          envie et si nous décidons de travailler avec vous, c’est toute
          l’équipe qui sera engagée pour réaliser votre projet. Nous avons des
          outils directs pour échanger avec vous et nous nous sommes organisés
          pour être toujours disponible.
				</p>
				<div className="grid grid-flow-col gap-8 max-w-7xl mx-auto w-full overflow-scroll h-full py-8">
					{randomMembers(members).map((member) => (
						<div
							key={member.name}
							className="flex flex-col justify-center items-center p-8 gap-4 bg-zinc-500 bg-opacity-10 rounded-md lg:w-[400px]"
						>
							<div className="h-24 w-24 bg-gray-400 rounded-full" />
							<p className=" !text-primary uppercase font-extrabold text-xl">
								{member.name}
							</p>
							<p className=" !text-custom-dark text-opacity-70 px-4 py-1 rounded-md text-xs">
								{member.role}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
