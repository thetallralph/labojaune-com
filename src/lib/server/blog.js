import matter from 'gray-matter';

/**
 * Index des articles du blog.
 *
 * Les articles sont des fichiers Markdown dans `src/lib/content/blog/`.
 * Ce module est côté serveur uniquement ($lib/server) : le contenu brut des
 * articles ne part jamais dans le bundle client, seules les métadonnées
 * sérialisées par les fonctions `load` sont envoyées au navigateur.
 *
 * Voir `src/lib/content/blog/_GUIDE.md` pour le format du frontmatter.
 */

const WORDS_PER_MINUTE = 200;
const DEFAULT_AUTHOR = 'Le Labo Jaune';

// Fichiers bruts : `?raw` court-circuite mdsvex, on ne compile aucun composant ici.
const files = import.meta.glob('/src/lib/content/blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});

/**
 * @param {string} path
 * @returns {string}
 */
function slugFromPath(path) {
	return (path.split('/').pop() || '').replace(/\.md$/, '');
}

/**
 * Normalise la date du frontmatter (Date via YAML, ou chaîne) en ISO court.
 * @param {unknown} value
 * @returns {string}
 */
function toIsoDate(value) {
	if (value instanceof Date && !isNaN(value.getTime())) {
		return value.toISOString().slice(0, 10);
	}
	if (typeof value === 'string') {
		const parsed = new Date(value);
		if (!isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
	}
	return '';
}

/**
 * Temps de lecture en minutes, à partir du corps Markdown.
 * @param {string} body
 * @returns {number}
 */
function readingTime(body) {
	const words = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[#>*_`|-]/g, ' ')
		.split(/\s+/)
		.filter(Boolean).length;

	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * @typedef {Object} BlogPost
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {string} author
 * @property {string} [cover]
 * @property {string} [coverAlt]
 * @property {string} date        Date ISO (YYYY-MM-DD)
 * @property {string} dateLabel   Date formatée en français
 * @property {number} readingTime Minutes
 * @property {boolean} published
 * @property {string} url
 */

/** @type {BlogPost[]} */
const allPosts = Object.entries(files)
	.filter(([path]) => !slugFromPath(path).startsWith('_'))
	.map(([path, raw]) => {
		const slug = slugFromPath(path);
		const { data, content } = matter(/** @type {string} */ (raw));
		const date = toIsoDate(data.date);

		return {
			slug,
			title: data.title || slug,
			description: data.description || '',
			category: data.category || 'Article',
			author: data.author || DEFAULT_AUTHOR,
			cover: data.cover || undefined,
			coverAlt: data.coverAlt || data.title || '',
			date,
			dateLabel: date ? dateFormatter.format(new Date(`${date}T12:00:00Z`)) : '',
			readingTime: readingTime(content),
			published: data.published !== false,
			url: `/blog/${slug}`
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

// En développement, les brouillons restent visibles (badge « Brouillon » dans l'UI).
const visiblePosts = import.meta.env.DEV ? allPosts : allPosts.filter((post) => post.published);

/**
 * Tous les articles visibles, du plus récent au plus ancien.
 * @param {{ limit?: number }} [options]
 * @returns {BlogPost[]}
 */
export function getPosts({ limit } = {}) {
	return limit ? visiblePosts.slice(0, limit) : visiblePosts;
}

/**
 * Articles publiés uniquement (RSS, sitemap) — jamais de brouillon.
 * @returns {BlogPost[]}
 */
export function getPublishedPosts() {
	return allPosts.filter((post) => post.published);
}

/**
 * @param {string} slug
 * @returns {BlogPost | undefined}
 */
export function getPost(slug) {
	return visiblePosts.find((post) => post.slug === slug);
}

/**
 * Articles liés : même catégorie en priorité, complétés par les plus récents.
 * @param {string} slug
 * @param {number} [limit]
 * @returns {BlogPost[]}
 */
export function getRelatedPosts(slug, limit = 2) {
	const current = getPost(slug);
	if (!current) return [];

	const others = visiblePosts.filter((post) => post.slug !== slug);
	const sameCategory = others.filter((post) => post.category === current.category);
	const rest = others.filter((post) => post.category !== current.category);

	return [...sameCategory, ...rest].slice(0, limit);
}
