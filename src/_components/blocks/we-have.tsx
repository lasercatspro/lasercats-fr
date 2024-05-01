"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import WhiteGrid from "../white-grid";
import { Transition } from "@headlessui/react";

type Props = {
	isLikeContent?: boolean;
};

const WeHave = ({ isLikeContent = false }: Props) => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const [type, setType] = useState<"exp" | "skill" | "challenges" | "vite">(
		isLikeContent ? "challenges" : "exp"
	);

	useEffect(() => {
		const handleScroll = () => {
			if (gridRef?.current) {
				const gridTop = gridRef?.current.offsetTop;
				const scrollY = window.scrollY;
				if (!isLikeContent) {
					if (scrollY < gridTop && type !== "exp") {
						setType("exp");
					}
					if (scrollY > gridTop && type !== "skill") {
						setType("skill");
					}
				} else {
					if (scrollY < gridTop && type !== "challenges") {
						setType("challenges");
					}
					if (scrollY > gridTop && type !== "vite") {
						setType("vite");
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [gridRef, type]);

	const transition = useMemo(
		() => ({
			enter: "transform transition-all delay-300 ease-in-expo duration-[800ms]",
			enterFrom: "opacity-0",
			enterTo: "opacity-70",
			leave: "transform transition-all ease-out duration-200",
			leaveFrom: "opacity-0",
			leaveTo: "opacity-0",
		}),
		[type]
	);

	return (
		<div
			ref={gridRef}
			className={"relative h-[100vh] md:text-center"}
		>
			<WhiteGrid type={type}>
				<div
					style={{
						background:
							"radial-gradient(closest-side, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 100%)",
					}}
					className="mx-auto lg:max-w-7xl lg:w-screen h-[90vh] lg:h-auto lg:px-32 relative"
				>
					<div className="absolute flex flex-col w-full h-full justify-center -mt-24 max-w-5xl mx-auto" >
						{!isLikeContent && (
							<h2 className="!text-3xl md:!text-5xl">
								Nous avons <br />
							</h2>
						)}
						{isLikeContent && (
							<h2 className="!text-3xl md:!text-5xl">
								Nous aimons <br />
							</h2>
						)}
						<div className="space-y-4 flex justify-center w-full" >
							{/* We have */}
							<Transition show={type === "exp"} {...transition} className={"absolute w-full  lg:max-w-7xl"}>
								{!isLikeContent && (
									<>
										<p
											className="!text-3xl md:!text-5xl !text-primary"
										>
											{"l'expérience métier"}
										</p>
										<p className="mt-8 text-sm lg:text-xl">
											Nous sommes d’anciens CTO et artisans du web depuis
											loooongtemps : dans les secteurs de l’édition, des startups,
											des marketplaces, de l’automation, de la protection des
											donnés, de l’open source. Nous connaissons probablement vos
											problématiques et saurons trouver comment construire ou
											améliorer votre produit.
										</p>
										<p className="mt-8 font-extrabold text-sm lg:text-xl">
											Nous pourrons vous conseiller sur votre stratégie produit et
											développement logiciel global
										</p>
									</>
								)}
							</Transition>
							<Transition show={type === "skill"} {...transition} className={"absolute w-full  lg:max-w-7xl"}>
								{!isLikeContent && (
									<>
										<p
											className="!text-3xl md:!text-5xl !text-custom-blue"
										>
											{"les compétences"}
										</p>
										<p className="mt-8 text-sm lg:text-xl">
											Nous maîtrisons tout ce qu’il faut pour construire n’importe
											quelle application web ou mobile. Nous avons toutes les
											compétences essentielles en interne et pouvons compter sur
											notre galaxie de partenaires fantastiques quand il faut
											pousser dans une direction : conseil en scalabilité, SEO,
											devops, dataviz, produit, sécurité, hardware, performance,
											accessibilité, écologie numérique, recherche UX…
										</p>
										<p className="mt-8 font-extrabold text-sm lg:text-xl">
											Nous pouvons couvrir 100% de vos besoins pour votre projet
										</p>
									</>
								)}
							</Transition>
							{/* We Like */}
							<Transition show={type === "challenges"} {...transition} className={"absolute w-full  lg:max-w-7xl"}>
								{isLikeContent && (
									<>
										<p
											className="!text-3xl md:!text-5xl !text-primary"
										>
											{"les challenges"}
										</p>
										<p className="mt-8 text-sm lg:text-xl">
											Nous adorons la stabilité des framework simples, mais aimons
											aussi quand les challenges sont fous et débordent du web :
											hardware, musique, blockchain, IA, sécurité et vie privée.
											Si vous projets ont besoin d’une tech inédite, c’est fort
											probable qu’on ait envie de faire un bout de chemin avec
											vous.
										</p>
										<p className="mt-8 font-extrabold text-sm lg:text-xl">
											Nous pourrons réaliser votre produit, qu’elle qu’en soit,
											aussi fou soit-il son niveau de folie.
										</p>
									</>
								)}
							</Transition>
							<Transition show={type === "vite"} {...transition} className={"absolute w-full  lg:max-w-7xl"}>
								{isLikeContent && (
									<>
										<p
											className="!text-3xl md:!text-5xl !text-custom-blue"
										>
											{"aller vite"}
										</p>
										<p className="mt-8 text-sm lg:text-xl">
											Nous savons aller vite pour tester un produit ou une
											intuition en version beta et lui faire rencontrer son
											marché, puis travailler plus lentement quand il commence à
											avoir de la traction et qu’il a besoin d’une plus grande
											stabilité. Nous sommes expert de 3 frameworks que nous
											connaissons par coeur et qui n’ont rien à prouver:
										</p>
										<p className="mt-8 font-extrabold text-sm lg:text-xl">
											Votre produit pourra être rapidement mis sur le marché
										</p>
									</>
								)}
							</Transition>
						</div>
					</div>
				</div>
			</WhiteGrid>
		</div>
	);
};

export default WeHave;
