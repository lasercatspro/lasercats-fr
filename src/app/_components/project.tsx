import { ProjectI } from "@/lib/projets";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import GrayLink from "./gray-link";

type Props = {
  project: ProjectI
}

const Project = ({project}: Props) => {
	return ( 
		<div  className="flex justify-between w-[80%]">
			<div className="flex flex-col justify-end mb-10 gap-8 items-start">
				<h3 className="text-[8rem] leading-snug text-zinc-50">
					{capitalize(project.name)}
				</h3>
				<div className="flex w-full gap-4">
					{project.stack.map((tech) => (
						<p
							key={tech}
							className="rounded-md px-6 py-3 bg-primary bg-opacity-10 text-zinc-50"
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
			<Image
				width={800}
				height={600}
				alt={project.name}
				src={`/assets/images/jpg/${project.name}.jpg`}
				className="rounded-md"
			/>
		</div>
	);
};
 
export default Project;