export interface ProjectI {
  name: string,
  description: string,
  stack: string[],
  date: number,
}

export const projects = [
	{
		name: "citesia",
		description: "Rails application for a lorem ipsum dolor",
		stack: ["Ruby on Rails", "React", "NextJs"],
		date: 2021,
	},
	{
		name: "splio",
		description: "Rails application for a lorem ipsum dolor",
		stack: ["Ruby on Rails"],
		date: 2020,
	},
];