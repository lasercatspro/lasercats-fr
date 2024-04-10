"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import Container from "../_components/container";
import Image from "next/image";

export default function NotFound(): ReactNode {
	return (
		<Container classes="min-h-[64vh] pt-32 flex justify-center items-center">
			<div className="flex flex-col gap-8">
				<h1 className="flex gap-2">Erreur 4
					<Image
						alt="logo Lasercats"
						src={"/assets/images/logos/laser-simple.svg"}
						width={50}
						height={50}
					/>
				4</h1>
				
				<p>{"La page que vous recherchez n'existe pas."}</p>
				<Link className="btn-primary hover:!no-underline" href="/">
					{"Retourner à la page d'accueil"}
				</Link>
			</div>
		</Container>
	);
}
