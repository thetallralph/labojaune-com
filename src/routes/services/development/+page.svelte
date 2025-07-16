<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const service = {
		id: 'development',
		title: 'Développement Web & Mobile',
		description:
			'Nous développons des solutions techniques robustes et performantes adaptées aux réalités technologiques africaines.',
		features: [
			'Applications web progressives',
			'Applications mobiles natives',
			'E-commerce',
			'Solutions API'
		]
	};

	const relatedServices = [
		{
			id: 'strategy',
			title: 'Stratégie Digitale',
			description: 'Nous élaborons des stratégies digitales sur mesure pour votre business.'
		},
		{
			id: 'design',
			title: 'Design & Expérience Utilisateur',
			description: 'Nous créons des interfaces intuitives et esthétiques qui captivent.'
		},
		{
			id: 'marketing',
			title: 'Marketing Digital',
			description: 'Nous déployons des campagnes marketing créatives qui touchent votre audience.'
		}
	];
</script>

<svelte:head>
	<title>Développement Web & Mobile - Labo Jaune | Solutions robustes pour l'Afrique</title>
	<meta
		name="description"
		content="Services de développement web et mobile adaptés aux réalités africaines. Applications progressives, mobiles natives, e-commerce et API. Solutions performantes et scalables."
	/>
	<meta
		name="keywords"
		content="développement web Afrique, développement mobile, applications progressives, PWA, applications natives, e-commerce, API, solutions techniques"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/services/development" />
	<meta
		property="og:title"
		content="Développement Web & Mobile - Labo Jaune | Solutions techniques innovantes"
	/>
	<meta
		property="og:description"
		content="Solutions de développement adaptées aux réalités technologiques africaines. Web, mobile, e-commerce et API."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/services/development" />
	<meta property="twitter:title" content="Développement Web & Mobile - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Solutions techniques robustes et performantes adaptées aux réalités africaines."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/services/development" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-noir pb-16 pt-32 text-blanc">
	<Container>
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="overline" className="mb-4 text-jaune font-mono">Services</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="h1" className="mb-6 font-display uppercase">
					{service.title}
				</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 300 }}>
				<Typography variant="body-large" className="text-blanc/80">
					{service.description}
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Features Section -->
<section class="py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Ce que nous offrons
		</Typography>

		<Grid cols={2} gap="lg">
			{#each service.features as feature, i}
				<div
					class="border-l-4 border-jaune bg-gris-clair p-8"
					in:fadeScale={{ duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h4" className="mb-3 font-bold">
						{feature}
					</Typography>
					<Typography variant="body" className="text-noir/70">
						Nous apportons notre expertise pour garantir des résultats concrets et mesurables.
					</Typography>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- Process Section -->
<section class="bg-gris-clair py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Notre Approche
		</Typography>

		<div class="mx-auto max-w-4xl space-y-8">
			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">1. Architecture technique</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous conçevons une architecture robuste et évolutive adaptée aux contraintes techniques
					africaines.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">2. Développement agile</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous développons par itérations courtes avec des livraisons régulières pour un feedback
					continu.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">3. Tests et optimisation</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous garantissons la qualité avec des tests rigoureux et optimisons pour les performances
					locales.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Tech Stack -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Nos Technologies
		</Typography>

		<div class="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
			{#each [
				{ name: 'React/Vue/Svelte', type: 'Frontend' },
				{ name: 'Node.js/Python', type: 'Backend' },
				{ name: 'React Native/Flutter', type: 'Mobile' },
				{ name: 'AWS/Google Cloud', type: 'Cloud' }
			] as tech, i}
				<div in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}>
					<div class="mx-auto mb-4 h-20 w-20 bg-jaune"></div>
					<Typography variant="body-small" className="text-jaune mb-1">
						{tech.type}
					</Typography>
					<Typography variant="body" className="text-blanc">
						{tech.name}
					</Typography>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- Related Services -->
<section class="py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Services Complémentaires
		</Typography>

		<Grid cols={3} gap="md">
			{#each relatedServices as relatedService, i}
				<div
					class="bg-noir p-8 text-blanc transition-all duration-300 hover:bg-jaune hover:text-noir"
					in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h4" className="mb-3 font-bold">
						{relatedService.title}
					</Typography>
					<Typography variant="body-small" className="mb-4 opacity-80">
						{relatedService.description.split('.')[0]}.
					</Typography>
					<Button
						href="/services/{relatedService.id}"
						variant="ghost"
						className="text-inherit hover:text-inherit"
					>
						Découvrir →
					</Button>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- CTA Section -->
<section class="bg-jaune py-24">
	<Container>
		<div class="text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase">
				Prêt à construire votre solution ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-noir/80 max-w-2xl mx-auto">
				Développons ensemble une solution technique adaptée à vos besoins et à votre marché.
			</Typography>
			<div class="flex justify-center gap-4">
				<Button
					href="/contact"
					variant="secondary"
					size="large"
					className="bg-noir text-blanc hover:bg-blanc hover:text-noir"
				>
					Démarrer un projet
				</Button>
				<Button href="/services" variant="ghost" size="large" className="text-noir hover:text-noir">
					← Retour aux services
				</Button>
			</div>
		</div>
	</Container>
</section>
