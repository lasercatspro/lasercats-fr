import { capitalize } from "../lib/utils";
import Link from "next/link";
import Image from "next/image";
import GrayLink from "./gray-link";
import useIsMobile from "../hooks/useIsMobile";
import { Client } from "../types/items";
import dayjs from "dayjs";
import { Disclosure, Transition } from "@headlessui/react";
import { ArrowDownIcon, ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  project: Client;
};

const Project = ({ project }: Props) => {
	const isMobile = useIsMobile({ forIpad: true });

	return (
		<div className="flex flex-col lg:flex-row justify-between gap-8">
			<div className="flex flex-col justify-end mb-10 gap-8 items-start lg:w-1/2">
				<div className="flex gap-4">
					<h3 className="text-[2rem] lg:text-[8rem] leading-snug text-zinc-50">
						{capitalize(project.title)}
					</h3>
					<p className="text-zinc-400 text-[0.80rem] lg:text-[1.5rem] lg:mt-8">
						{dayjs(project.date).format("YYYY") || project.date}
					</p>
				</div>
				{isMobile && (
					<Image
						width={800}
						height={600}
						alt={`Projet ${project.title}`}
						title={project.title}
						src={project.imagePreview}
						className="rounded-md w-full"
					/>
				)}
				<div className="grid grid-cols-2 lg:flex w-full gap-4 text-center">
					{project?.technos.map((tech) => (
						<p
							key={tech}
							className="text-xs lg:text-inherit rounded-md p-2 lg:px-6 lg:py-3 bg-zinc-50 bg-opacity-10 !text-zinc-50 font-bold"
						>
							{tech}
						</p>
					))}
				</div>
				<div className="mb-8">
					<Disclosure>
						{({ open }) => (
							<>
								<p className={`${!open ? "line-clamp-4" : "" } transform transition-all duration-1000 text-zinc-400  text-left`}>{project.description}</p>
								<Disclosure.Button className="flex gap-4 items-center py-2 justify-start relative">
									<ChevronDownIcon className={`z-10 h-6 w-6 text-zinc-400 ${open ? "rotate-180 transform" : ""}`} />
								</Disclosure.Button>
							</>
						)}
					</Disclosure>
				</div>
				<Link
					href={`/projets/${project.title.toLowerCase()}`}
					className=" no-underline hover:no-underline"
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
					className="rounded-md w-1/2 object-cover h-[400px]"
				/>
			)}
		</div>
	);
};

export default Project;
