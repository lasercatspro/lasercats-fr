import Link from "next/link";
import CoverImage from "./coverImage";
import DateFormatter from "./dateFormatter";
import Image from "next/image";
import { Client, type Post } from "../types/items";
import { type ReactNode } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
  article: Post | Client | undefined;
  type: "client" | "post";
}

export function Preview({ article, type }: Props): ReactNode {
	return (
		<Link
			as={`/${type === "post" ? "blog" : "projets"}/${article?.slug}`}
			href={`/${type === "post" ? "blog" : "projets"}/[slug]`}
			className="flex flex-col gap-4 justify-between hover:no-underline group"
		>
			{article != null && type === "client" && (
				<CoverImage
					slug={article?.slug}
					title={article?.title}
					type={article?.type}
					src={
						article?.imagePreview ??
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			)}
			<div className="flex justify-between">
				<h3 className="text-3xl mb-3 leading-snug group-hover:text-primary font-bold">
					{article?.title}
				</h3>
				{type === "client" && (
					<div className="flex gap-4 h-10 items-center ">
						{(article as Client)?.technos.map((tech) => (
							<p
								key={tech}
								className="text-sm lg:text-inherit rounded-sm p-2 lg:px-4 lg:py-2 bg-primary bg-opacity-30  font-medium"
							>
								{tech}
							</p>
						))}
					</div>
				)}
			</div>
			<p>{article?.description}</p>

			<div className="flex items-center gap-4 justify-between">
				<div className="flex items-center gap-1 between group/laser">
					<p className="group-hover:text-primary font-bold px-2 py-1 rounded-sm border border-primary border-opacity-50">
						{type === "client" ? "Voir le projet" : "Lire la suite"}
					</p>
					<div className="opacity-0 duration-500 transition-all group-hover/laser:translate-x-3 group-hover/laser:text-primary h-4 group-hover/laser:opacity-100 flex justify-between gap-4">
						<Image
							alt="laser logo"
							src={"assets/images/logos/laser-simple.svg"}
							width={50}
							height={50}
							className="h-[1rem] w-[1rem] bg-blend-hue"
						/>
					</div>
					<ArrowRightIcon className="h-4 ml-4 opacity-0 group-hover:opacity-100 group-hover:text-primary" />
				</div>
				<div className="text-sm">
					<DateFormatter dateString={article?.date as string} color="grey" />
				</div>
			</div>
		</Link>
	);
}
