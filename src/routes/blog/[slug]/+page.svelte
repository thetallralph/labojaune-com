<script>
	import { fly } from '$lib/utils/transitions';
	import BlogCard from '$lib/components/molecules/BlogCard.svelte';

	let { data } = $props();

	const SITE_URL = 'https://labojaune.com';

	let meta = $derived(data.meta);
	let Content = $derived(data.content);
	let canonical = $derived(`${SITE_URL}${meta.url}`);
	let ogImage = $derived(
		meta.cover
			? meta.cover.startsWith('http')
				? meta.cover
				: `${SITE_URL}${meta.cover}`
			: `${SITE_URL}/og-image.jpg`
	);

	// Données structurées Article. Les `<` sont échappés en \u003c : aucun contenu
	// d'article ne peut sortir de la balise.
	let jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: meta.title,
			description: meta.description,
			datePublished: meta.date,
			dateModified: meta.date,
			image: ogImage,
			articleSection: meta.category,
			inLanguage: 'fr-FR',
			author: {
				'@type': meta.author === 'Le Labo Jaune' ? 'Organization' : 'Person',
				name: meta.author
			},
			publisher: {
				'@type': 'Organization',
				name: 'Le Labo Jaune',
				logo: {
					'@type': 'ImageObject',
					url: `${SITE_URL}/logo-labojaune.svg`
				}
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': canonical
			}
		}).replace(/</g, '\\u003c')
	);

	// Balise assemblée par concaténation : écrire la balise fermante en toutes lettres
	// ici couperait le bloc de script du composant.
	const LD_OPEN = '<script type="application/ld+json">';
	const LD_CLOSE = '</' + 'script>';
	let jsonLdTag = $derived(LD_OPEN + jsonLd + LD_CLOSE);
</script>

<svelte:head>
	<title>{meta.title} - Le Labo Jaune</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={canonical} />
	<meta name="author" content={meta.author} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="article:published_time" content={meta.date} />
	<meta property="article:section" content={meta.category} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={meta.title} />
	<meta property="twitter:description" content={meta.description} />
	<meta property="twitter:image" content={ogImage} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdTag}
</svelte:head>

<article class="min-h-screen bg-blanc">
	<!-- En-tête -->
	<header class="pb-12 pt-24 md:pt-32">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-3xl" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<a
					href="/blog"
					class="mb-10 inline-flex items-center gap-2 text-sm font-medium text-noir/60 transition-colors hover:text-noir"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="none"
						viewBox="0 0 16 16"
						class="rotate-180"
						aria-hidden="true"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
						/>
					</svg>
					Tous les articles
				</a>

				<div class="mb-5 flex flex-wrap items-center gap-3">
					<span class="rounded-full border border-noir px-4 py-1.5 text-sm font-medium text-noir">
						{meta.category}
					</span>
					{#if meta.published === false}
						<span class="rounded-full bg-noir px-4 py-1.5 text-sm font-medium text-blanc">
							Brouillon
						</span>
					{/if}
				</div>

				<h1 class="mb-6 font-display text-4xl font-bold leading-tight text-noir md:text-6xl">
					{meta.title}
				</h1>

				{#if meta.description}
					<p class="mb-8 text-xl text-noir/70 md:text-2xl">{meta.description}</p>
				{/if}

				<div
					class="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-noir/10 pt-6 text-sm text-noir/60"
				>
					<span class="font-medium text-noir">{meta.author}</span>
					<span aria-hidden="true">·</span>
					<time datetime={meta.date}>{meta.dateLabel}</time>
					<span aria-hidden="true">·</span>
					<span>{meta.readingTime} min de lecture</span>
				</div>
			</div>
		</div>
	</header>

	<!-- Visuel de couverture -->
	{#if meta.cover}
		<div class="pb-12">
			<div class="container mx-auto px-6">
				<div class="mx-auto max-w-4xl overflow-hidden rounded-2xl">
					<img src={meta.cover} alt={meta.coverAlt || meta.title} class="h-auto w-full" />
				</div>
			</div>
		</div>
	{/if}

	<!-- Corps de l'article -->
	<div class="pb-20">
		<div class="container mx-auto px-6">
			<div class="article-prose mx-auto max-w-3xl">
				<Content />
			</div>
		</div>
	</div>

	<!-- CTA -->
	<section class="pb-24">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-3xl rounded-2xl bg-noir p-10 md:p-14">
				<h2 class="mb-4 font-display text-3xl font-bold text-blanc md:text-4xl">
					Un projet dans les tuyaux ?
				</h2>
				<p class="mb-8 text-lg text-blanc/70">
					On regarde ensemble ce qui est faisable, dans quel délai et à quel budget.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 rounded-full bg-jaune px-8 py-4 font-semibold text-noir transition-all hover:scale-105"
				>
					Discutons de votre projet
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="none"
						viewBox="0 0 16 16"
						aria-hidden="true"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Articles liés -->
	{#if data.related.length > 0}
		<section class="pb-32">
			<div class="container mx-auto px-6">
				<div class="mx-auto max-w-7xl">
					<div class="mb-12 border-t border-noir/10 pt-8">
						<h2 class="text-sm font-medium uppercase tracking-wider text-noir/60">
							À lire ensuite
						</h2>
					</div>
					<div class="grid gap-x-12 gap-y-16 md:grid-cols-2">
						{#each data.related as post (post.slug)}
							<BlogCard {post} />
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/if}
</article>

<style>
	/* Mise en forme du Markdown rendu par mdsvex.
	   `:global()` est nécessaire : le HTML vient d'un composant enfant. */

	.article-prose :global(p) {
		margin-bottom: 1.6rem;
		font-size: 1.125rem;
		line-height: 1.8;
		color: rgba(0, 0, 0, 0.8);
	}

	.article-prose :global(h2) {
		margin-top: 3.5rem;
		margin-bottom: 1.25rem;
		font-family: 'Instrument Serif', Georgia, serif;
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.2;
		color: #000;
	}

	.article-prose :global(h3) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-size: 1.375rem;
		font-weight: 700;
		line-height: 1.3;
		color: #000;
	}

	.article-prose :global(h4) {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: #000;
	}

	.article-prose :global(ul),
	.article-prose :global(ol) {
		margin-bottom: 1.6rem;
		padding-left: 1.5rem;
		font-size: 1.125rem;
		line-height: 1.8;
		color: rgba(0, 0, 0, 0.8);
	}

	.article-prose :global(ul) {
		list-style: disc;
	}

	.article-prose :global(ol) {
		list-style: decimal;
	}

	.article-prose :global(li) {
		margin-bottom: 0.5rem;
		padding-left: 0.25rem;
	}

	.article-prose :global(li::marker) {
		color: rgba(0, 0, 0, 0.4);
	}

	.article-prose :global(a) {
		color: #000;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
		transition: color 200ms;
	}

	.article-prose :global(a:hover) {
		color: #ffd700;
	}

	.article-prose :global(strong) {
		font-weight: 700;
		color: #000;
	}

	.article-prose :global(blockquote) {
		margin: 2.5rem 0;
		border-left: 4px solid #ffd700;
		padding: 0.25rem 0 0.25rem 1.5rem;
		font-family: 'Instrument Serif', Georgia, serif;
		font-size: 1.5rem;
		line-height: 1.45;
		color: #000;
	}

	.article-prose :global(blockquote p) {
		margin-bottom: 0;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
	}

	.article-prose :global(code) {
		border-radius: 0.25rem;
		background: #f5f5f5;
		padding: 0.15em 0.4em;
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 0.9em;
	}

	.article-prose :global(pre) {
		margin: 2rem 0;
		overflow-x: auto;
		border-radius: 1rem;
		background: #1a1a1a;
		padding: 1.5rem;
		color: #fff;
		line-height: 1.6;
	}

	.article-prose :global(pre code) {
		background: transparent;
		padding: 0;
		color: inherit;
		font-size: 0.875rem;
	}

	.article-prose :global(img) {
		margin: 2.5rem 0;
		width: 100%;
		height: auto;
		border-radius: 1rem;
	}

	.article-prose :global(hr) {
		margin: 3rem 0;
		border: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.article-prose :global(table) {
		margin: 2rem 0;
		width: 100%;
		border-collapse: collapse;
		font-size: 1rem;
	}

	.article-prose :global(th),
	.article-prose :global(td) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 0.75rem 1rem 0.75rem 0;
		text-align: left;
	}

	.article-prose :global(th) {
		font-weight: 700;
		color: #000;
	}

	.article-prose :global(td) {
		color: rgba(0, 0, 0, 0.8);
	}

	@media (min-width: 768px) {
		.article-prose :global(h2) {
			font-size: 2.5rem;
		}

		.article-prose :global(h3) {
			font-size: 1.625rem;
		}
	}
</style>
