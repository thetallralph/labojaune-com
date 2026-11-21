<script>
	import { fly, fadeScale } from '$lib/utils/transitions';
	import BlogCard from '$lib/components/molecules/BlogCard.svelte';

	let { data } = $props();

	let featured = $derived(data.posts[0]);
	let rest = $derived(data.posts.slice(1));
</script>

<svelte:head>
	<title>Journal - Le Labo Jaune | Tech, design et business au Bénin</title>
	<meta
		name="description"
		content="Le journal du Labo Jaune : nos réflexions et retours de terrain sur le web, le design et les outils numériques pour les entreprises au Bénin et en Afrique de l'Ouest."
	/>
	<link rel="canonical" href="https://labojaune.com/blog" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Journal - Le Labo Jaune"
		href="https://labojaune.com/blog/rss.xml"
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/blog" />
	<meta property="og:title" content="Journal - Le Labo Jaune" />
	<meta
		property="og:description"
		content="Nos réflexions et retours de terrain sur le web, le design et les outils numériques pour les entreprises."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Journal - Le Labo Jaune" />
	<meta
		property="twitter:description"
		content="Nos réflexions et retours de terrain sur le web, le design et les outils numériques pour les entreprises."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />
</svelte:head>

<div class="min-h-screen bg-blanc">
	<!-- Hero -->
	<section class="pb-16 pt-32 md:pb-24">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-4xl text-center" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h1 class="mb-6 font-display text-5xl font-bold text-noir md:text-7xl">Le journal</h1>
				<p class="mx-auto max-w-2xl text-lg text-noir/70 md:text-xl">
					Ce qu'on apprend en construisant des sites, des applications et des marques depuis
					Cotonou. Sans jargon, avec des exemples concrets.
				</p>
			</div>
		</div>
	</section>

	{#if data.posts.length === 0}
		<!-- Aucun article publié -->
		<section class="pb-32">
			<div class="container mx-auto px-6">
				<div
					class="mx-auto max-w-2xl rounded-2xl border border-noir/10 bg-gris-clair p-12 text-center"
				>
					<p class="mb-2 text-xl font-bold text-noir">Le premier article arrive bientôt.</p>
					<p class="text-noir/70">
						En attendant, jetez un œil à <a
							href="/projects"
							class="underline decoration-2 underline-offset-4 hover:text-jaune">nos projets</a
						>.
					</p>
				</div>
			</div>
		</section>
	{:else}
		<!-- Article à la une -->
		<section class="pb-20">
			<div class="container mx-auto px-6">
				<div class="mx-auto max-w-7xl" in:fadeScale={{ duration: 600, delay: 200 }}>
					<BlogCard post={featured} featured />
				</div>
			</div>
		</section>

		{#if rest.length > 0}
			<!-- Les autres articles -->
			<section class="pb-32">
				<div class="container mx-auto px-6">
					<div class="mx-auto max-w-7xl">
						<div class="mb-12 border-t border-noir/10 pt-8">
							<h2 class="text-sm font-medium uppercase tracking-wider text-noir/60">
								Tous les articles
							</h2>
						</div>

						<div class="grid gap-x-12 gap-y-16 md:grid-cols-2">
							{#each rest as post, i (post.slug)}
								<div in:fadeScale={{ duration: 600, delay: 100 + i * 50 }}>
									<BlogCard {post} />
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>
		{/if}
	{/if}
</div>
