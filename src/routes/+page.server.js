import { getPosts } from '$lib/server/blog.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		latestPosts: getPosts({ limit: 3 })
	};
}
