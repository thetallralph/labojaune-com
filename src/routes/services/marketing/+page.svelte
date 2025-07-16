<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const service = {
		id: 'marketing',
		title: 'Marketing Digital',
		description:
			'Nous déployons des campagnes marketing créatives qui touchent efficacement votre audience cible.',
		features: [
			'Stratégie de contenu',
			'Social media management',
			'SEO & SEM',
			'Analytics et reporting'
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
			id: 'development',
			title: 'Développement Web & Mobile',
			description: 'Nous développons des solutions techniques robustes et performantes.'
		}
	];
</script>

<svelte:head>
	<title>Marketing Digital - Labo Jaune | Campagnes créatives pour l'Afrique</title>
	<meta
		name="description"
		content="Services de marketing digital ciblés pour le marché africain. Stratégie de contenu, social media, SEO/SEM et analytics. Atteignez efficacement votre audience."
	/>
	<meta
		name="keywords"
		content="marketing digital Afrique, stratégie contenu, social media management, SEO, SEM, analytics, campagnes publicitaires, marketing créatif"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/services/marketing" />
	<meta
		property="og:title"
		content="Marketing Digital - Labo Jaune | Touchez votre audience africaine"
	/>
	<meta
		property="og:description"
		content="Campagnes marketing créatives qui touchent efficacement votre audience cible en Afrique. Contenu, social media, SEO et analytics."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/services/marketing" />
	<meta property="twitter:title" content="Marketing Digital - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Campagnes marketing créatives qui touchent efficacement votre audience cible."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/services/marketing" />
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
				<Typography variant="h3" className="mb-4 font-bold">1. Analyse du marché</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous étudions votre marché cible et identifions les opportunités spécifiques au contexte
					africain.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">2. Stratégie créative</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous développons des campagnes créatives qui captivent et engagent votre audience cible.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">3. Mesure et optimisation</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous suivons les performances en temps réel et optimisons continuellement pour maximiser
					le ROI.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Channels Section -->
<section class="bg-jaune py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Canaux Marketing
		</Typography>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each [
				'Réseaux sociaux',
				'Email marketing',
				'SEO/SEM',
				'Marketing de contenu',
				'Publicité display',
				"Marketing d'influence",
				'Marketing mobile',
				'Analytics'
			] as channel, i}
				<div
					class="border-2 border-noir bg-blanc p-6 text-center transition-all duration-300 hover:bg-noir hover:text-blanc"
					in:fadeScale={{ duration: 600, delay: 50 + i * 50 }}
				>
					<Typography variant="body" className="font-medium">
						{channel}
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
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase">
				Prêt à amplifier votre présence ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-blanc/80 max-w-2xl mx-auto">
				Déployons ensemble des campagnes marketing qui touchent et engagent votre audience
				africaine.
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
					← Retour aux services
				</Button>
			</div>
		</div>
	</Container>
</section>
