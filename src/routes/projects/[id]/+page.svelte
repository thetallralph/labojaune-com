<script>
	import { fly, fadeScale } from '$lib/utils/transitions';

	/** @type {import('./$types').PageData} */
	export let data;

	$: project = data.project;
</script>

<svelte:head>
	<title>{project.title} - Projets | Labo Jaune</title>
	<meta name="description" content={project.description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://labojaune.com/projects/{project.id}" />
	<meta property="og:title" content="{project.title} - Projets | Labo Jaune" />
	<meta property="og:description" content={project.description} />
	<meta property="og:image" content="https://labojaune.com{project.image}" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/projects/{project.id}" />
	<meta property="twitter:title" content="{project.title} - Projets | Labo Jaune" />
	<meta property="twitter:description" content={project.description} />
	<meta property="twitter:image" content="https://labojaune.com{project.image}" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-blanc pb-16 pt-32">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<a
					href="/projects"
					class="mb-8 inline-flex items-center gap-2 text-base font-medium text-noir/60 transition-colors hover:text-jaune md:text-lg"
				>
					← Retour aux projets
				</a>
			</div>

			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<div class="mb-6 flex flex-wrap items-center gap-4">
					<span class="rounded-full bg-jaune px-4 py-2 text-xs font-semibold uppercase tracking-wider text-noir">
						{project.category}
					</span>
					<p class="text-sm text-noir/60">
						{project.year}
					</p>
				</div>

				<h1 class="mb-4 font-display text-5xl font-bold leading-tight text-noir md:text-6xl lg:text-7xl">
					{project.title}
				</h1>

				<p class="mb-4 text-xl text-noir/70 md:text-2xl">
					{project.client}
				</p>

				<h2 class="font-serif text-2xl italic text-noir/80 md:text-3xl">
					{project.tagline}
				</h2>
			</div>
		</div>
	</div>
</section>

<!-- Featured Image -->
<section class="bg-blanc mb-16">
	<div class="container mx-auto px-6">
		<div
			class="aspect-video overflow-hidden rounded-3xl bg-gris-clair"
			in:fadeScale={{ duration: 600, delay: 300 }}
		>
			<img
				src={project.image}
				alt="Aperçu du projet {project.title}"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<!-- Content -->
<section class="bg-blanc pb-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl space-y-16">
			<!-- Le Défi -->
			<div in:fly={{ y: 20, duration: 600, delay: 400 }}>
				<h2 class="mb-6 font-display text-4xl font-bold md:text-5xl">Le Défi</h2>
				<p class="text-xl text-noir/80 md:text-2xl">
					{project.challenge}
				</p>
			</div>

			<!-- Notre Solution -->
			<div in:fly={{ y: 20, duration: 600, delay: 500 }}>
				<h2 class="mb-6 font-display text-4xl font-bold md:text-5xl">Notre Solution</h2>
				<p class="mb-8 text-xl text-noir/80 md:text-2xl">
					{project.solution}
				</p>

				{#if project.features}
					<div class="space-y-3">
						{#each project.features as feature}
							<div class="flex items-start gap-3">
								<div class="mt-2 h-2 w-2 flex-shrink-0 bg-jaune"></div>
								<p class="text-lg text-noir/80">
									{feature}
								</p>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Résultats -->
			{#if project.results}
				<div in:fly={{ y: 20, duration: 600, delay: 600 }}>
					<h2 class="mb-8 font-display text-4xl font-bold md:text-5xl">Résultats</h2>
					<div class="grid gap-6 md:grid-cols-2">
						{#each Object.entries(project.results) as [key, value]}
							<div class="rounded-3xl border-2 border-noir/10 bg-blanc p-8">
								<h3 class="mb-2 font-display text-3xl font-bold text-noir md:text-4xl">
									{value}
								</h3>
								<p class="capitalize text-noir/70">
									{key.replace(/_/g, ' ')}
								</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Awards -->
			{#if project.awards}
				<div in:fly={{ y: 20, duration: 600, delay: 700 }}>
					<h2 class="mb-8 font-display text-4xl font-bold md:text-5xl">Reconnaissance</h2>
					<div class="rounded-3xl bg-gris-clair p-8">
						<ul class="space-y-3">
							{#each project.awards as award}
								<li class="flex items-start gap-3">
									<span class="mt-1 font-bold text-jaune">•</span>
									<p class="text-lg text-noir">
										{award}
									</p>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}

			<!-- Deliverables -->
			{#if project.deliverables}
				<div in:fly={{ y: 20, duration: 600, delay: 700 }}>
					<h2 class="mb-8 font-display text-4xl font-bold md:text-5xl">Livrables</h2>
					<div class="space-y-3">
						{#each project.deliverables as deliverable}
							<div class="flex items-start gap-3">
								<div class="mt-2 h-2 w-2 flex-shrink-0 bg-jaune"></div>
								<p class="text-lg text-noir/80">
									{deliverable}
								</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Note -->
			{#if project.note}
				<div
					in:fly={{ y: 20, duration: 600, delay: 800 }}
					class="rounded-3xl bg-gris-clair p-8"
				>
					<p class="italic text-noir/80">
						{project.note}
					</p>
				</div>
			{/if}

			<!-- Testimonial -->
			{#if project.testimonial}
				<div in:fly={{ y: 20, duration: 600, delay: 800 }}>
					<div class="rounded-3xl border-2 border-noir/10 bg-blanc p-12">
						<h3 class="mb-6 font-serif text-2xl italic text-noir md:text-3xl">
							"{project.testimonial.quote}"
						</h3>
						<p class="text-right font-medium text-noir/80">— {project.testimonial.author}</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
