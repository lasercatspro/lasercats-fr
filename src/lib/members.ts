import { Member } from "@/types/items";

export const members: Member[] = [
	{
		name: "Nico",
		role: "Co-gérant & Dev",
		imageSrc: "/assets/images/portraits/nicolas.jpg",
	},
	{
		name: "Anthonin",
		role: "Dev",
		imageSrc: "/assets/images/portraits/anthonin.png",
	},
	{
		name: "Antoine",
		role: "Dev",
		imageSrc: "/assets/images/portraits/antoine.png",
	},
	{
		name: "Thierry",
		role: "Lead Dev",
		imageSrc: "/assets/images/portraits/thierry.png",
	},
	{
		name: "Louis",
		role: "Co-gérant & Dev",
		imageSrc: "/assets/images/portraits/louis.png",
	},
	{
		name: "François",
		role: "Lead Dev",
		imageSrc: "/assets/images/portraits/francois.png",
	},
	{
		name: "Damien",
		role: "Dev",
		imageSrc: "/assets/images/portraits/damien.png",
	},
];

export function randomMembers(array: any[]) {
	const randomArray: any[] = [];
	const copiedArray = array.slice();

	array.forEach(() => {
		const randomIndex = Math.floor(Math.random() * copiedArray.length);
		randomArray.push(copiedArray.at(randomIndex));
		copiedArray.splice(randomIndex, 1);
	});
	return randomArray;
}