import { Client, type Post } from "../types/items";
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/_posts");
const clientsDirectory = join(process.cwd(), "src/_clients");

export function getItemSlugs (type: "post"|"client"  = "post"): string[] {
	if (type === "post") return fs.readdirSync(postsDirectory);
	if (type === "client") return fs.readdirSync(clientsDirectory);
	return fs.readdirSync(postsDirectory);
}

export async function getItemBySlug (type: "post"|"client"  = "post", slug: string): Promise<Post | Client |undefined > {
	try {
		const { meta, default: component } = await import(`../_${type}s/${slug}.mdx`);
		return {
			slug: slug.replace(/(\/index)?\.mdx$/, ""),
			...meta,
			component
		} satisfies Post;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export async function getAllItems (type: "post"|"client" = "post"): Promise<Array<Post | Client | undefined>> {
	const slugs = getItemSlugs(type);
	const items = Promise.all(slugs.map(async (slug) => await getItemBySlug(type, slug.replace(/(\/index)?\.mdx$/, ""))));
	return await items;
}
