import { type ReactNode } from "react";
import { Client, type Post } from "../types/items";
import { Preview } from "./preview";

interface Props {
  items: Array<Post | Client | undefined>
	type: "client" | "post"
}

export function ItemsGrid ({ items, type }: Props): ReactNode {
	return (
		<section className="my-12">
			<div className="space-y-24">
				{items?.map((item) => (
					<Preview key={item?.slug} article={item} type={type} />
				))}
			</div>
		</section>
	);
}
