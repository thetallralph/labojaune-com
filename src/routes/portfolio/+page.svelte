<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const projects = [
		{
			id: 'marketplace-africa',
			title: 'MarketPlace Africa',
			client: 'E-commerce Corp',
			category: 'E-commerce',
			year: '2024',
			description: 'Plateforme e-commerce révolutionnaire adaptée aux réalités du marché africain',
			tags: ['UX Design', 'Développement', 'Stratégie'],
			featured: true
		},
		{
			id: 'fintech-mobile',
			title: 'FinTech Mobile Banking',
			client: 'Digital Bank SA',
			category: 'Application Mobile',
			year: '2024',
			description: "Solution bancaire mobile innovante pour l'inclusion financière",
			tags: ['App Mobile', 'UX/UI', 'API'],
			featured: true
		},
		{
			id: 'edtech-platform',
			title: 'EdTech Learning',
			client: 'Education Plus',
			category: 'Plateforme Web',
			year: '2023',
			description: "Plateforme d'apprentissage en ligne adaptée au contexte africain",
			tags: ['Web App', 'Design', 'Backend']
		},
		{
			id: 'agritech-connect',
			title: 'AgriTech Connect',
			client: 'Farmers United',
			category: 'Application Mobile',
			year: '2023',
			description: 'Application connectant agriculteurs et acheteurs',
			tags: ['Mobile', 'API', 'Marketing']
		},
		{
			id: 'healthtech-portal',
			title: 'HealthTech Portal',
			client: 'MediCare Africa',
			category: 'Plateforme Web',
			year: '2023',
			description: 'Portail de santé numérique pour la télémédecine',
			tags: ['Web App', 'UX Design', 'Intégration']
		},
		{
			id: 'logistics-tracker',
			title: 'Logistics Tracker',
			client: 'Transport Solutions',
			category: 'Application Mobile',
			year: '2022',
			description: 'Solution de suivi logistique en temps réel',
			tags: ['Mobile', 'Backend', 'IoT']
		}
	];

	const categories = ['Tous', 'E-commerce', 'Application Mobile', 'Plateforme Web'];
	let selectedCategory = 'Tous';

	$: filteredProjects =
		selectedCategory === 'Tous'
			? projects
			: projects.filter((p) => p.category === selectedCategory);
</script>

<svelte:head>
	<title>Portfolio - Labo Jaune | Projets digitaux innovants en Afrique</title>
	<meta
		name="description"
		content="Découvrez nos réalisations : e-commerce, applications mobiles, plateformes web. Portfolio de projets digitaux innovants adaptés au marché africain."
	/>
	<meta
		name="keywords"
		content="portfolio digital Afrique, projets web, applications mobiles, e-commerce, fintech, edtech, agritech, réalisations digitales"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/portfolio" />
	<meta property="og:title" content="Portfolio - Labo Jaune | Nos réalisations digitales" />
	<meta
		property="og:description"
		content="Explorez notre portfolio de projets digitaux innovants : e-commerce, fintech, applications mobiles et plateformes web pour l'Afrique."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/portfolio" />
	<meta property="twitter:title" content="Portfolio - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Projets digitaux innovants adaptés au marché africain."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/portfolio" />
</svelte:head>

<!-- Hero Section -->
<section class="pb-16 pt-32">
	<Container>
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="h1" className="mb-6 font-display uppercase">
					Notre Portfolio
				</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="body-large" className="text-noir/80">
					Découvrez comment nous avons aidé nos clients à transformer leurs idées en solutions
					digitales innovantes qui font la différence sur le marché africain.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Filter Section -->
<section class="sticky top-16 z-20 bg-gris-clair py-8">
	<Container>
		<div class="flex flex-wrap gap-4">
			{#each categories as category}
				<button
					on:click={() => (selectedCategory = category)}
					class="border-2 border-noir px-6 py-2 transition-all duration-300
						{selectedCategory === category ? 'bg-noir text-blanc' : 'bg-blanc text-noir hover:bg-jaune'}"
				>
					<Typography variant="body" className="font-medium">
						{category}
					</Typography>
				</button>
			{/each}
		</div>
	</Container>
</section>

<!-- Projects Grid -->
<section class="py-24">
	<Container>
		<Grid cols={2} gap="lg">
			{#each filteredProjects as project, i}
				<div
					class="group overflow-hidden border-2 border-noir bg-blanc transition-all duration-300 hover:border-jaune"
					in:fadeScale={{ duration: 600, delay: 100 + i * 50 }}
				>
					<!-- Project Image Placeholder -->
					<div class="relative aspect-video overflow-hidden bg-gris-clair">
						<div
							class="absolute inset-0 bg-jaune/0 transition-colors duration-300 group-hover:bg-jaune/10"
						></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<Typography variant="h2" className="text-noir/10 font-display">
								{project.title.substring(0, 2)}
							</Typography>
						</div>
						{#if project.featured}
							<div class="absolute left-4 top-4 bg-jaune px-3 py-1">
								<Typography variant="small" className="font-mono text-noir">FEATURED</Typography>
							</div>
						{/if}
					</div>

					<!-- Project Info -->
					<div class="p-8">
						<div class="mb-4 flex items-start justify-between">
							<div>
								<Typography variant="h3" className="mb-2 font-bold">
									{project.title}
								</Typography>
								<Typography variant="body-small" className="text-noir/60">
									{project.client} • {project.category}
								</Typography>
							</div>
							<Typography variant="body-small" className="text-noir/60">
								{project.year}
							</Typography>
						</div>

						<Typography variant="body" className="mb-6 text-noir/80">
							{project.description}
						</Typography>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="bg-gris-clair px-3 py-1 text-sm text-noir">
									{tag}
								</span>
							{/each}
						</div>

						<Button
							href="/portfolio/{project.id}"
							variant="ghost"
							className="text-noir hover:text-noir group-hover:translate-x-2 transition-transform"
						>
							Voir le projet →
						</Button>
					</div>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- CTA Section -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase">
				Vous avez un projet en tête ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-blanc/80">
				Discutons de comment nous pouvons vous aider à le concrétiser.
			</Typography>
			<div class="flex justify-center gap-4">
				<Button href="/contact" size="large" className="bg-jaune text-noir hover:bg-blanc">
					Démarrer un projet
				</Button>
				<Button
					href="/services"
					variant="ghost"
					size="large"
					className="text-blanc hover:text-blanc"
				>
					Voir nos services
				</Button>
			</div>
		</div>
	</Container>
</section>
