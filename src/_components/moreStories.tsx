import { type ReactNode } from "react";
import { Client, type Post } from "../types/items";
import { Preview } from "./preview";

interface Props {
  items: Array<Post | Client | undefined>
	type: "client" | "post"
}

export function MoreStories ({ items, type }: Props): ReactNode {
	return (
		<section className="my-12">
			<div className="grid grid-cols-2 gap-16">
				{items?.map((item) => (
					<Preview key={item?.slug} article={item} type={type} />
				))}
			</div>
		</section>
	);
}
