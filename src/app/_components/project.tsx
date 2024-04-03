import { ProjectI } from "@/lib/projets";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import GrayLink from "./gray-link";
import useIsMobile from "../hooks/useIsMobile";

type Props = {
  project: ProjectI
}

const Project = ({project}: Props) => {
	const isMobile = useIsMobile({forIpad: true});
	return ( 
		<div  className="flex flex-col lg:flex-row justify-between lg:w-[90%]">
			<div className="flex flex-col justify-end mb-10 gap-8 items-start">
				<h3 className="text-[2rem] lg:text-[8rem] leading-snug text-zinc-50">
					{capitalize(project.name)}
				</h3>
				{isMobile && <Image
					width={800}
					height={600}
					alt={project.name}
					src={`/assets/images/jpg/${project.name}.jpg`}
					className="rounded-md"
				/>}
				<div className="flex w-full gap-4">
					{project.stack.map((tech) => (
						<p
							key={tech}
							className="text-sm lg:text-inherit rounded-md p-2 lg:px-6 lg:py-3 bg-primary bg-opacity-10 !text-zinc-50"
						>
							{tech}
						</p>
					))}
				</div>
				<p className="text-zinc-50">{project.description}</p>
				<Link
					href={`/projets/${project.name}`}
					className=" no-underline"
				>
					<GrayLink title="Découvrir le projet" isWhite/>
				</Link>
			</div>
			{!isMobile && <Image
				width={800}
				height={600}
				alt={project.name}
				src={`/assets/images/jpg/${project.name}.jpg`}
				className="rounded-md"
			/>}
		</div>
	);
};
 
export default Project;