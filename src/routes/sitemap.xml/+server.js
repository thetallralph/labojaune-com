import { getPublishedPosts } from '$lib/server/blog.js';
import { projectsData } from '$lib/data/projects.js';

const SITE_URL = 'https://labojaune.com';

export const prerender = true;

/** Pages statiques du site. */
const staticPages = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/about', changefreq: 'monthly', priority: '0.8' },
	{ path: '/projects', changefreq: 'weekly', priority: '0.9' },
	{ path: '/blog', changefreq: 'weekly', priority: '0.9' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.8' }
];

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const urls = [
		...staticPages.map(
			(page) => `	<url>
		<loc>${SITE_URL}${page.path}</loc>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
		),
		...Object.keys(projectsData).map(
			(id) => `	<url>
		<loc>${SITE_URL}/projects/${id}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
		),
		...getPublishedPosts().map(
			(post) => `	<url>
		<loc>${SITE_URL}${post.url}</loc>
		<lastmod>${post.date}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
		)
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
