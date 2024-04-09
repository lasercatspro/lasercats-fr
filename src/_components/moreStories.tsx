import { type ReactNode } from "react";
import { Client, type Post } from "../types/items";
import { Preview } from "./preview";

interface Props {
  items: Array<Post | Client | undefined>
	type: "client" | "post"
}

export function MoreStories ({ items, type }: Props): ReactNode {
	return (
		<section>
			<h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
				{"Nos autres articles"}
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 lg:gap-y-32 mb-32">
				{items?.map((item) => (
					<Preview article={item} key={item?.slug} type={type} />
				))}
			</div>
		</section>
	);
}
