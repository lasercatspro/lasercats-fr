import { type Post } from "@/types/post";

export const getMetaFromArticle: (article: Post) => { title: string, description: string } = (article) => {
	return {
		title: article.title,
		description: article.description
	};
};
