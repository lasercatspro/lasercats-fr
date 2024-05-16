import { capitalize } from "../lib/utils";
import Link from "next/link";
import Image from "next/image";
import GrayLink from "./gray-link";
import useIsMobile from "../hooks/useIsMobile";
import { Client } from "../types/items";
import dayjs from "dayjs";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
	project: Client;
};

const Project = ({ project }: Props) => {
	const isMobile = useIsMobile({ forIpad: true });

	return (
		<div className="flex flex-col lg:flex-row justify-between lg:min-h-[500px]">
			<div className="flex flex-col justify-between gap-2 md:gap-8 items-start lg:w-1/2 min-h-[450px] lg:min-h-auto mb-4">
				<div>
					<div className="flex gap-4">
						<h3 className="text-[2rem] lg:text-[6rem] leading-snug text-zinc-50 mb-4 lg:mb-0">
							{capitalize(project.title)}
						</h3>
						<p className="text-zinc-400 text-[0.80rem] lg:text-[1.5rem] lg:mt-8">
							{dayjs(project.date).format("YYYY") || project.date}
						</p>
					</div>
					<div className="flex w-full gap-2 lg:gap-4 flex-wrap">
						{project?.technos.map((tech) => (
							<p
								key={tech}
								className="text-xs lg:text-inherit rounded-md p-2 lg:px-6 lg:py-3 bg-zinc-50 bg-opacity-10 !text-zinc-50 font-bold"
							>
								{tech}
							</p>
						))}
					</div>
					<div className="mt-4 lg:mt-8">
						{(isMobile && project.description.length > 343) || (isMobile && project.description.length > 120) ? <Disclosure>
							{({ open }) => (
								<>
									<p className={`${!open ? "line-clamp-2 lg:line-clamp-4" : ""} transform transition-all duration-1000 text-zinc-400 text-left text-xs lg:text-base`}>{project.description}</p>
									<Disclosure.Button className="flex items-center py-2 justify-start relative">
										<ChevronDownIcon className={`z-10 h-6 w-6 text-zinc-400 ${open ? "rotate-180 transform" : ""}`} />
									</Disclosure.Button>
								</>
							)}
						</Disclosure> : <p className={"whitespace-pre-wrap text-zinc-400 text-left text-xs lg:text-base inline-block"}>{project.description}</p>}
					</div>
				</div>
				{isMobile && (
					<Image
						width={800}
						height={600}
						alt={`Projet ${project.title}`}
						title={project.title}
						src={project.imagePreview}
						className="rounded-md w-full h-[180px] object-contain md:h-auto"
						quality={90}
						priority={true}
						loading="eager"
					/>
				)}

				<Link
					href={project.href ?? "/"}
					className=" no-underline hover:no-underline"
					target="_blank"
				>
					<GrayLink title="Découvrir le projet" isWhite />
				</Link>
			</div>
			{!isMobile && (
				<Image
					alt={`Projet ${project.title}`}
					title={project.title}
					width={800}
					height={600}
					src={project.imagePreview}
					className="rounded-md w-1/2 object-contain h-[400px]"
					quality={90}
					priority={true}
					loading="eager"
				/>
			)}
		</div>
	);
};

export default Project;
