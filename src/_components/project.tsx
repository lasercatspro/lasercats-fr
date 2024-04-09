import { capitalize } from "../lib/utils";
import Link from "next/link";
import Image from "next/image";
import GrayLink from "./gray-link";
import useIsMobile from "../hooks/useIsMobile";
import { Client } from "../types/items";

type Props = {
  project: Client
}

const Project = ({ project }: Props) => {
	const isMobile = useIsMobile({forIpad: true});
	
	return ( 
		<div  className="flex flex-col lg:flex-row justify-between gap-8">
			<div className="flex flex-col justify-end mb-10 gap-8 items-start lg:w-1/2">
				<h3 className="text-[2rem] lg:text-[8rem] leading-snug text-zinc-50">
					{capitalize(project.title)}
				</h3>
				{isMobile && <Image
					width={800}
					height={600}
					alt={project.title}
					src={project.imagePreview}
					className="rounded-md w-full"
				/>}
				<div className="grid grid-cols-2 lg:flex w-full gap-4 text-center">
					{project?.technos.map((tech) => (
						<p
							key={tech}
							className="text-xs lg:text-inherit rounded-md p-2 lg:px-6 lg:py-3 bg-primary bg-opacity-10 !text-zinc-50"
						>
							{tech}
						</p>
					))}
				</div>
				<p className="text-zinc-50">{project.description}</p>
				<Link
					href={`/projets/${project.title.toLowerCase()}`}
					className=" no-underline hover:no-underline"
				>
					<GrayLink title="Découvrir le projet" isWhite/>
				</Link>
			</div>
			{!isMobile && <Image
				width={1000}
				height={800}
				alt={project.title}
				src={project.imagePreview}
				className="rounded-md w-1/2"
			/>}
		</div>
	);
};
 
export default Project;