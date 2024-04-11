import Link from "next/link";
import Container from "../container";

const Numbers = () => {
	return ( 
		<div className="px-4 md:px-8 py-8 lg:py-32 bg-black">
			<Container>
				<div className="flex justify-between flex-col mx-2 md:grid lg:grid-cols-3 gap-8">
					<div className="flex flex-col text-center">
						<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">50M</p>
						<p className="!text-lg !text-zinc-100">Nous avons construit une <Link href={"https://citesia.fr"}>plate-forme de crowdfunding</Link> qui a fait 50M d’euros de transactions en 3 ans.</p>
					</div>
					<div className="flex flex-col text-center">
						<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">1M</p>
						<p className="!text-lg !text-zinc-100">Pour un des <Link href={"https://splio.com"}>leader des marketing automation</Link>, nous avons construit un outil de multi-postage sur les réseaux sociaux pour que des centaines de PME envoient plus d’un million de messages sur tiktok, pinterest, facebook, linkedin et twitter (mais pas myspace).</p>
					</div>
					<div className="flex flex-col text-center">
						<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">11M</p>
						<p className="!text-lg !text-zinc-100">Nous avons soutenu l’équipe technique d’un <Link href={"https://www.futura-sciences.com/"}>média scientifique national</Link> qui fait 11.4M de visites par mois (c’est 5x moins que le plus gros site de sport, mais c’est le plus gros pour la science 🤓 ).</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Numbers;