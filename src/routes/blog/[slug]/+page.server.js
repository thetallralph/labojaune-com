import { error } from '@sveltejs/kit';
import { getPost, getRelatedPosts } from '$lib/server/blog.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const meta = getPost(params.slug);

	if (!meta) {
		throw error(404, `Article non trouvé: ${params.slug}`);
	}

	return {
		meta,
		related: getRelatedPosts(params.slug)
	};
}
