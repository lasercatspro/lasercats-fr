"use client";

import CustomSlider from "../custom-slider";

export interface QuoteI {
  author: string;
  authorStatus: string;
  content: string;
  name: string;
}

const quotes: QuoteI[] = [
	{
		author: "Jean Damien Cerisier",
		authorStatus: "Président chez Citesia",
		content:
      "Lasercats nous accompagne depuis 2 ans au quotidien dans le développement et la maintenance de notre plateforme de crowdfunding immobilier. Ils ont transformé notre MVP dans une plateforme rapide, stable et capable de gérer des millions d’euros de transactions. La partie backoffice a été sensiblement optimisée assurant un gain de temps significatif pour la partie relance Compliance mais également la gestion et le traitement des opérations. Les équipes sont très réactives pour la partie maintenance et forces de proposition pour l'amélioration continue de notre plateforme d'investissement.",
		name: "citesia",
	},
	{
		author: "Hugues de Calbiac",
		authorStatus: "CFO chez Splio",
		content:
      "Grâce à l'association de Scalizer pour la dimension conseil à impact et Lasercats pour la partie expertise et réalisation technique, nous avons pu mettre en place une interco data absolument nécessaire à nos différentes activités. Le tout fonctionnant en temps réel nous pouvons mieux collaborer en interne et mieux servir nos clients.",
		name: "splio",
	},
	{
		author: "Harry Haplin",
		authorStatus: "CEO chez Nym Technologies",
		content:
      "Nym had a good experience working with this awesome team: They helped us with web design and jargon-free messaging for our privacy-first tech project, all on very short notice.",
		name: "nym",
	},
];

const Testimonials = () => {

	return (
		<div className="bg-custom-dark">
			<div className="mx-2 py-16 lg:mx-24">
				<div className="px-8 md:px-20">
					<h2 className="text-primary hidden">Témoignages</h2>
					<p className="text-2xl lg:text-5xl !text-zinc-50 leading-snug">
          Ils nous font confiance. <br /> Merci à eux !
					</p>
				</div>
				<div className="mt-16 relative md:px-12" >
					<CustomSlider items={quotes} type="quote" />
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
