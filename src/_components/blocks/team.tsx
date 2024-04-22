"use client";

import { Member } from "../../types/items";
import Container from "../container";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { members } from "@/lib/members";

const Team = () => {
	const isMobile = useIsMobile({ forIpad: true });
	return (
		<Container classes="mb-[50px] lg:mb-[150px]">
			<div className="relative px-4 md:px-16 space-y-12 overflow-visible">
				<div className="flex flex-col lg:flex-row gap-4 justify-between !tracking-wide !leading-8">
					<h2 className="lg:w-1/2">
            Nous sommes une équipe soudée, réactive et toujours présente
					</h2>
					<p className="lg:w-1/2 ">
            Nous sommes une équipe qui travaille dans un cadre coopératif où
            nous nous sentons bien. Nous travaillons sur les projets qui nous
            donne envie et si nous décidons de travailler avec vous, c’est toute
            l’équipe qui sera engagée pour réaliser votre projet. Nous avons des
            outils directs pour échanger avec vous et nous nous sommes organisés
            pour être toujours disponible.
					</p>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-7 gap-y-4 gap-x-1 justify-center relative">
					{!isMobile && <div className="flex relative col-span-7 gap-1 overflow-hidden">
						<Image
							alt="blue background"
							title="blue svg"
							src="/assets/images/backgrounds/svg-blue.svg"
							className="absolute z-10 -top-96 -left-32 opacity-50 w-[150vw] -rotate-[20deg]"
							width={2800}
							height={200}
						/>
						<Image
							alt="green background"
							title="green svg"
							src="/assets/images/backgrounds/svg-green.svg"
							className="absolute z-10 top-20 -right-32 opacity-70 -rotate-[20deg]"
							width={2800}
							height={200}
						/>
						{members.map((member: Member) => (
							!(member.name === "Nico") ? <Image
								key={`img-${member.name}`}
								alt={`portait of ${member.name}`}
								title={member.name}
								src={member.imageSrc}
								width={400}
								height={400}
								className="h-[200px] lg:h-[300px] w-full object-cover object-center"
							/>
								:
								<div key={member.name} className="h-[200px] lg:h-[300px] w-full bg-zinc-200"/>
						))}
					</div>}
					{members.map((member: Member) => (
						<div
							key={member.name}
							className="flex flex-col items-center w-full gap-1 mb-4"
						>
							{isMobile && (
								<Image
									alt={`portait of ${member.name}`}
									title={member.name}
									src={member.imageSrc}
									width={400}
									height={400}
									className="h-[200px] lg:h-[300px] w-full object-cover object-center"
								/>
							)}
							<div className="flex flex-col text-center gap-2">
								<p className=" !text-custom-dark uppercase font-extrabold text-base md:text-xl">
									{member.name}
								</p>
								<p className=" !text-custom-dark text-opacity-70 text-xs">
									{member.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Team;
