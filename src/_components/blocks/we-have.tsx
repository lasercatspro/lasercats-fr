"use client";

import { useEffect, useRef, useState } from "react";
import WhiteGrid from "../white-grid";
import { Transition } from "@headlessui/react";
import useIsMobile from "@/hooks/useIsMobile";

type Props = {
	isLikeContent?: boolean
}

const WeHave = ({ isLikeContent = false }: Props) => {
	const gridRef = useRef<HTMLDivElement | null>(null); 
	const [type, setType] = useState<"exp" | "skill" | "challenges" | "vite">(isLikeContent ? "challenges": "exp");
	const isMobile = useIsMobile({forIpad: false});

	useEffect(() => {
		const handleScroll = () => {
			if (gridRef?.current) {
				const gridTop = gridRef?.current.offsetTop;
				if (window.pageYOffset > (gridTop + 200) && !isLikeContent) {
					setType("skill");
				} else if (!isLikeContent) {
					setType("exp");
				}
				if (window.pageYOffset > (gridTop + 200) && isLikeContent) {
					setType("vite");
				} else if (isLikeContent) {
					setType("challenges");
				}
			}
			
		};
      
		window.addEventListener("scroll", handleScroll);
    
		return () => window.removeEventListener("scroll", handleScroll);
	}, [gridRef]);
  
	return (
		<div ref={gridRef} className={`relative h-[175vh] ${!isMobile && "text-center"}`}>
			<WhiteGrid type={type}>
				<div style={{background: "radial-gradient(closest-side, rgba(250,249,247,1) 50%, rgba(0,0,0,0) 100%)"}} className="mx-auto max-w-7xl py-24 px-12 lg:py-64 lg:px-32">
					<Transition
						show={type === "exp"}
						enter="transition duration-700 ease-out"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{!isLikeContent && type === "exp" && <div className="flex flex-col gap-8 max-w-5xl mx-auto">
							<h2 className="!text-3xl md:!text-5xl">Nous avons <br /><strong className="!text-3xl md:!text-5xl">{"l'expérience métier"}</strong></h2>
							<p className="text-xs lg:text-xl">Nous sommes d’anciens CTO et artisans du web depuis loooongtemps : dans les secteurs de l’édition, des startups, des marketplaces, de l’automation, de la protection des donnés, de l’open source. Nous connaissons probablement vos problématiques et saurons trouver comment construire ou améliorer votre produit.</p>
							<p className="font-extrabold text-sm lg:text-xl">Nous pourrons vous conseiller sur votre stratégie produit et développement logiciel global</p>
						</div>}
					</Transition>
					<Transition
						show={type === "skill"}
						enter="transition-opacity duration-700"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{!isLikeContent && type === "skill" && <div className="flex flex-col gap-8 max-w-5xl mx-auto">
							<h2 className="!text-3xl md:!text-5xl">Nous avons <br /><strong className="!text-3xl md:!text-5xl !text-custom-blue">{"les compétences"}</strong></h2>
							<p className="text-xs lg:text-xl">Nous maîtrisons tout ce qu’il faut pour construire n’importe quelle application web ou mobile. Nous avons toutes les compétences essentielles en interne et pouvons compter sur notre galaxie de partenaires fantastiques quand il faut pousser dans une direction : conseil en scalabilité, SEO, devops, dataviz, produit, sécurité, hardware, performance, accessibilité, écologie numérique, recherche UX…</p>
							<p className="font-extrabold text-sm lg:text-xl">Nous pouvons couvrir 100% de vos besoins pour votre projet</p>
						</div>}
					</Transition>
					{/* We Like */}
					<Transition
						show={type === "challenges"}
						enter="transition duration-700 ease-out"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{isLikeContent && type === "challenges" && <div className="flex flex-col gap-8 max-w-5xl mx-auto">
							<h2 className="!text-3xl md:!text-5xl">Nous aimons <br /><strong className="!text-3xl md:!text-5xl">{"les challenges"}</strong></h2>
							<p className="text-xs lg:text-xl">Nous adorons la stabilité des framework simples, mais aimons aussi quand les challenges sont fous et débordent du web : hardware, musique, blockchain, IA, sécurité et vie privée. Si vous projets ont besoin d’une tech inédite, c’est fort probable qu’on ait envie de faire un bout de chemin avec vous.</p>
							<p className="font-extrabold text-sm lg:text-xl">
							Nous pourrons réaliser votre produit, qu’elle qu’en soit, aussi fou soit-il son niveau de folie.
							</p>
						</div>}
					</Transition>
					<Transition
						show={type === "vite"}
						enter="transition-opacity duration-700"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{isLikeContent && type === "vite" && <div className="flex flex-col gap-8 max-w-5xl mx-auto">
							<h2 className="!text-3xl md:!text-5xl">Nous aimons <br /><strong className="!text-3xl md:!text-5xl !text-custom-blue">{"aller vite"}</strong></h2>
							<p className="text-xs lg:text-xl">
								Nous savons aller vite pour tester un produit ou une intuition en version beta et lui faire rencontrer son marché, puis travailler plus lentement quand il commence à avoir de la traction et qu’il a besoin d’une plus grande stabilité.Pour sommes expert de 3 frameworks que nous connaissons par coeur et qui n’ont rien à prouver:
							</p>
							<p className="font-extrabold text-sm lg:text-xl">
								Votre produit pourra être rapidement mis sur le marché
							</p>
						</div>}
					</Transition>
				</div>
			</WhiteGrid>
		</div>
	);
};

export default WeHave;