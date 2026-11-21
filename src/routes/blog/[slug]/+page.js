import { error } from '@sveltejs/kit';

// Glob paresseux : chaque article est un chunk séparé, seul l'article demandé est chargé.
const articles = import.meta.glob('/src/lib/content/blog/*.md');

/** @type {import('./$types').PageLoad} */
export async function load({ params, data }) {
	const resolve = articles[`/src/lib/content/blog/${params.slug}.md`];

	if (!resolve) {
		throw error(404, `Article non trouvé: ${params.slug}`);
	}

	const article = /** @type {{ default: import('svelte').Component }} */ (await resolve());

	return {
		...data,
		content: article.default
	};
}
