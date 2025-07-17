<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';
	
	/** @type {import('./$types').PageData} */
	export let data;
	
	$: project = data.project;
</script>

<svelte:head>
	<title>{project.title} - Portfolio | Labo Jaune</title>
	<meta name="description" content="{project.description}" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://labojaune.com/portfolio/{project.id}" />
	<meta property="og:title" content="{project.title} - Portfolio | Labo Jaune" />
	<meta property="og:description" content="{project.description}" />
	<meta property="og:image" content="https://labojaune.com{project.image}" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/portfolio/{project.id}" />
	<meta property="twitter:title" content="{project.title} - Portfolio | Labo Jaune" />
	<meta property="twitter:description" content="{project.description}" />
	<meta property="twitter:image" content="https://labojaune.com{project.image}" />
</svelte:head>

<!-- Hero Section -->
<section class="pt-32 pb-16" style="background-color: {project.heroColor || '#000000'}; color: {project.heroColor ? '#FFFFFF' : '#000000'}">
	<Container>
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Button href="/portfolio" variant="ghost" className="mb-8" style="color: {project.heroColor ? '#FFFFFF' : '#000000'}; border-color: {project.heroColor ? '#FFFFFF' : '#000000'}">
					← Retour au portfolio
				</Button>
			</div>
			
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<div class="mb-6 flex flex-wrap items-center gap-4">
					<Typography variant="overline" className="font-mono" style="color: {project.heroColor ? '#FFD700' : '#FFD700'}">
						{project.category}
					</Typography>
					<Typography variant="body-small" style="opacity: 0.6">
						{project.year}
					</Typography>
				</div>
				
				<Typography variant="h1" className="mb-4 font-display uppercase" style="color: inherit">
					{project.title}
				</Typography>
				
				<Typography variant="body-large" className="mb-4" style="opacity: 0.8">
					{project.client}
				</Typography>
				
				<Typography variant="h2" className="font-serif italic" style="opacity: 0.9">
					{project.tagline}
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Featured Image -->
<section class="mb-16">
	<Container size="xl">
		<div 
			class="aspect-video bg-gris-clair border-2 border-noir overflow-hidden"
			in:fadeScale={{ duration: 600, delay: 300 }}
		>
			<img 
				src={project.image} 
				alt="Aperçu du projet {project.title}"
				class="w-full h-full object-cover"
				loading="lazy"
			/>
		</div>
	</Container>
</section>

<!-- Content -->
<section class="pb-24">
	<Container>
		<div class="mx-auto max-w-4xl space-y-16">
			<!-- Le Défi -->
			<div in:fly={{ y: 20, duration: 600, delay: 400 }}>
				<Typography variant="h2" className="mb-6 font-display uppercase">
					Le Défi
				</Typography>
				<Typography variant="body-large" className="text-noir/80">
					{project.challenge}
				</Typography>
			</div>
			
			<!-- Notre Solution -->
			<div in:fly={{ y: 20, duration: 600, delay: 500 }}>
				<Typography variant="h2" className="mb-6 font-display uppercase">
					Notre Solution
				</Typography>
				<Typography variant="body-large" className="text-noir/80 mb-8">
					{project.solution}
				</Typography>
				
				{#if project.features}
					<div class="space-y-3">
						{#each project.features as feature}
							<div class="flex items-start gap-3">
								<div class="mt-2 h-2 w-2 flex-shrink-0 bg-jaune"></div>
								<Typography variant="body" className="text-noir/80">
									{feature}
								</Typography>
							</div>
						{/each}
					</div>
				{/if}
			</div>
			
			<!-- Résultats -->
			{#if project.results}
				<div in:fly={{ y: 20, duration: 600, delay: 600 }}>
					<Typography variant="h2" className="mb-8 font-display uppercase">
						Résultats
					</Typography>
					<Grid cols={2} gap="md">
						{#each Object.entries(project.results) as [key, value]}
							<div class="border-2 border-noir bg-jaune p-6">
								<Typography variant="h3" className="mb-2 font-display text-noir">
									{value}
								</Typography>
								<Typography variant="body-small" className="text-noir/80 capitalize">
									{key.replace(/_/g, ' ')}
								</Typography>
							</div>
						{/each}
					</Grid>
				</div>
			{/if}
			
			<!-- Awards -->
			{#if project.awards}
				<div in:fly={{ y: 20, duration: 600, delay: 700 }}>
					<Typography variant="h2" className="mb-8 font-display uppercase">
						Reconnaissance
					</Typography>
					<div class="border-2 border-noir bg-gris-clair p-8">
						<ul class="space-y-3">
							{#each project.awards as award}
								<li class="flex items-start gap-3">
									<span class="mt-1 text-jaune">🏆</span>
									<Typography variant="body" className="text-noir">
										{award}
									</Typography>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
			
			<!-- Deliverables -->
			{#if project.deliverables}
				<div in:fly={{ y: 20, duration: 600, delay: 700 }}>
					<Typography variant="h2" className="mb-8 font-display uppercase">
						Livrables
					</Typography>
					<div class="space-y-3">
						{#each project.deliverables as deliverable}
							<div class="flex items-start gap-3">
								<div class="mt-2 h-2 w-2 flex-shrink-0 bg-jaune"></div>
								<Typography variant="body" className="text-noir/80">
									{deliverable}
								</Typography>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			
			<!-- Note -->
			{#if project.note}
				<div in:fly={{ y: 20, duration: 600, delay: 800 }} class="bg-gris-clair border-2 border-noir p-8">
					<Typography variant="body" className="text-noir/80 italic">
						{project.note}
					</Typography>
				</div>
			{/if}
			
			<!-- Testimonial -->
			{#if project.testimonial}
				<div in:fly={{ y: 20, duration: 600, delay: 800 }}>
					<div class="border-2 border-noir bg-jaune p-12">
						<Typography variant="h3" className="mb-6 font-serif italic text-noir">
							"{project.testimonial.quote}"
						</Typography>
						<Typography variant="body" className="text-noir/80 text-right">
							— {project.testimonial.author}
						</Typography>
					</div>
				</div>
			{/if}
		</div>
	</Container>
</section>

<!-- Next Project -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase">
				Vous avez un projet similaire ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-blanc/80 max-w-2xl mx-auto">
				Discutons de comment nous pouvons vous aider à atteindre vos objectifs.
			</Typography>
			<div class="flex justify-center gap-4">
				<Button href="/contact" size="large" className="bg-jaune text-noir hover:bg-blanc">
					Démarrer un projet
				</Button>
				<Button href="/portfolio" variant="ghost" size="large" className="text-blanc hover:text-blanc">
					Voir plus de projets
				</Button>
			</div>
		</div>
	</Container>
</section>