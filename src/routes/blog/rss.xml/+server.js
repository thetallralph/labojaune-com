import { getPublishedPosts } from '$lib/server/blog.js';

const SITE_URL = 'https://labojaune.com';
const TITLE = 'Le journal du Labo Jaune';
const DESCRIPTION =
	'Réflexions et retours de terrain sur le web, le design et les outils numériques pour les entreprises, depuis Cotonou.';

export const prerender = true;

/**
 * @param {string} value
 * @returns {string}
 */
function escapeXml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

/**
 * @param {string} date Date ISO (YYYY-MM-DD)
 * @returns {string}
 */
function toRfc822(date) {
	return new Date(`${date}T12:00:00Z`).toUTCString();
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = getPublishedPosts();
	const lastBuild = posts.length > 0 ? toRfc822(posts[0].date) : new Date(0).toUTCString();

	const items = posts
		.map(
			(post) => `		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${SITE_URL}${post.url}</link>
			<guid isPermaLink="true">${SITE_URL}${post.url}</guid>
			<description>${escapeXml(post.description)}</description>
			<category>${escapeXml(post.category)}</category>
			<dc:creator>${escapeXml(post.author)}</dc:creator>
			<pubDate>${toRfc822(post.date)}</pubDate>
		</item>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
	<channel>
		<title>${escapeXml(TITLE)}</title>
		<link>${SITE_URL}/blog</link>
		<description>${escapeXml(DESCRIPTION)}</description>
		<language>fr-FR</language>
		<lastBuildDate>${lastBuild}</lastBuildDate>
		<atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
	</channel>
</rss>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
