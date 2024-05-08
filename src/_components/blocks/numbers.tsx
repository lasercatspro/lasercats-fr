import Link from "next/link";
import Container from "../container";

const Numbers = () => {
	return (
		<Container>
			<div className="flex justify-between flex-col mx-2 md:grid lg:grid-cols-3 gap-8">
				<div className="flex flex-col text-center">
					<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">50M</p>
					<p className="!text-base !text-zinc-100">
						Nous avons construit une{" "}
						<Link
							href={"https://citesia.fr"}
							className="text-primary hover:underline"
							target="_blank"
						>
							plate-forme de crowdfunding
						</Link>{" "}
						qui a fait 50M d’euros de transactions en 3 ans.
					</p>
				</div>
				<div className="flex flex-col text-center">
					<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">1M</p>
					<p className="!text-base !text-zinc-100">
						Pour un des{" "}
						{/*<Link
							href={"https://apibots.io"}
							className="text-primary hover:underline"
							target="_blank"
						>
							leader du marketing automation
						</Link>*/}
						<span className="text-primary">leader du marketing automation</span>
						, nous avons construit un outil de multi-postage sur les réseaux
						sociaux pour que des centaines de PME envoient plus d’un million
						de messages sur tiktok, pinterest, facebook, linkedin et twitter
						(mais pas myspace).
					</p>
				</div>
				<div className="flex flex-col text-center">
					<p className="text-[6rem] lg:!text-[12rem] !text-zinc-100">11M</p>
					<p className="!text-base !text-zinc-100">
						Nous avons soutenu l’équipe technique d’un{" "}
						<Link
							href={"https://www.futura-sciences.com/"}
							className="text-primary hover:underline"
							target="_blank"
						>
							média scientifique national
						</Link>{" "}
						qui fait 11.4M de visites par mois (c’est 5x moins que lequipe.fr, mais c’est le plus gros pour la science 🤓 ).
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Numbers;
