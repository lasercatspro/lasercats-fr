export interface QuoteI {
	author: string;
	authorStatus: string;
	content: string;
	name: string;
}

export const quotes: QuoteI[] = [
	{
		author: "Jean Damien Cerisier",
		authorStatus: "Président - Citesia",
		content:
			"Lasercats nous accompagne depuis 3 ans au quotidien dans le développement et la maintenance de notre plateforme de crowdfunding immobilier. Ils ont transformé notre MVP dans une plateforme rapide, stable et capable de gérer des millions d’euros de transactions. La partie backoffice a été sensiblement optimisée assurant un gain de temps significatif pour la partie relance Compliance mais également la gestion et le traitement des opérations. Les équipes sont très réactives pour la partie maintenance et forces de proposition pour l'amélioration continue de notre plateforme d'investissement.",
		name: "citesia",
	},
	{
		author: "Colin Lecordier",
		authorStatus: "Fondateur COO - Scalizer",
		content:
			"Lasercats nous accompagne depuis 4 ans sur des développements d’outils informatiques B2B soit sur la création d’outil spécifique (pour des besoins métiers très précis), soit sur des interfaçage de solutions (CRM (Hubspot), ERP (Odoo, Netsuite), e-commerce). Au de-là de leur polyvalence associée à un niveau de compétences élevé, ce que nous apprécions tout particulièrement c’est leur capacité de bien comprendre et challenger le besoin métier exprimé. Nous ne pouvons que recommander de travailler avec Lasercats si vous souhaitez bénéficier d’une expertise technique qui accompagne le développement de votre entreprise.",
		name: "scalizer",
	},
	{
		author: "Hugues de Calbiac",
		authorStatus: "Chief Financial Officer - Splio",
		content:
			"Grâce à l'association de Scalizer pour la dimension conseil à impact et Lasercats pour la partie expertise et réalisation technique, nous avons pu mettre en place une interco data absolument nécessaire à nos différentes activités. Le tout fonctionnant en temps réel nous pouvons mieux collaborer en interne et mieux servir nos clients.",
		name: "splio",
	},
	{
		author: "Harry Haplin",
		authorStatus: "CEO - Nym Technologies",
		content:
			"Nym had a good experience working with this awesome team: They helped us with web design and jargon-free messaging for our privacy-first tech project, all on very short notice.",
		name: "nym",
	},
];
