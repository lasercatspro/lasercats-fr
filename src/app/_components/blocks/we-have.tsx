"use client";

import { useEffect, useRef, useState } from "react";
import Grid from "../grid";
import { Transition } from "@headlessui/react";

const WeHave = () => {
	const gridRef = useRef<HTMLDivElement | null>(null); 
	const [type, setType] = useState<"exp" | "skill">("exp");

	useEffect(() => {
		const handleScroll = () => {
			if (gridRef?.current) {
				const gridTop = gridRef?.current.offsetTop;
				if (window.pageYOffset > (gridTop + 200)) {
					setType("skill");
				} else {
					setType("exp");
				}
			}
			
		};
      
		window.addEventListener("scroll", handleScroll);
    
		return () => window.removeEventListener("scroll", handleScroll);
	}, [gridRef]);
  
	return (
		<div ref={gridRef} className="relative h-[150vh]">
			<Grid type={type}>
				<div   style={{background: "radial-gradient(closest-side, rgba(250,249,247,1) 50%, rgba(0,0,0,0) 100%)"}} className="mx-auto max-w-7xl py-24 px-12 lg:py-64 lg:px-32">
					<Transition
						show={type === "exp"}
						enter="transition duration-100 ease-out"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{type === "exp" && <div className="flex flex-col gap-8 text-center max-w-5xl mx-auto">
							<h2>Nous avons <strong className="text-2xl md:text-5xl">{"l'expérience métier"}</strong></h2>
							<p className="text-xs lg:text-xl">Nous sommes d’anciens CTO et artisans du web depuis loooongtemps : dans les secteurs de l’édition, des startups, des marketplaces, de l’automation, de la protection des donnés, de l’open source. Nous connaissons probablement vos problématiques et saurons trouver comment construire ou améliorer votre produit.</p>
							<p className="font-extrabold text-xs lg:text-xl">Nous pourrons vous conseiller sur votre stratégie produit et développement logiciel global</p>
						</div>}
					</Transition>
					<Transition
						show={type === "skill"}
						enter="transition-opacity duration-75"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{type === "skill" && <div className="flex flex-col gap-8 text-center max-w-5xl mx-auto">
							<h2>Nous avons <strong className="text-2xl md:text-5xl !text-blue-700">{"les compétences"}</strong></h2>
							<p className="text-xs lg:text-xl">Nous maîtrisons tout ce qu’il faut pour construire n’importe quelle application web ou mobile. Nous avons toutes les compétences essentielles en interne et pouvons compter sur notre galaxie de partenaires fantastiques quand il faut pousser dans une direction : conseil en scalabilité, SEO, devops, dataviz, produit, sécurité, hardware, performance, accessibilité, écologie numérique, recherche UX…</p>
							<p className="font-extrabold text-xs lg:text-xl">Nous pouvons couvrir 100% de vos besoins pour votre projet</p>
						</div>}
					</Transition>
				</div>
			</Grid>
		</div>
	);
};

export default WeHave;