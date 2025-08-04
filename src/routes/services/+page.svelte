<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const content = {
		services: {
			title: 'Nos Services',
			headline: 'Transformez vos idées en solutions digitales performantes',
			intro: 'Des solutions complètes pour votre transformation digitale',
			list: [
				{
					id: 'website',
					title: 'Sites Web & Applications',
					description:
						'Création de sites web modernes et applications web sur mesure qui captivent votre audience et transforment votre présence digitale.',
					features: [
						'Sites vitrines et institutionnels',
						'Applications web progressives (PWA)',
						'Plateformes e-commerce',
						'Portails et intranets',
						'Solutions SaaS personnalisées'
					]
				},
				{
					id: 'branding',
					title: '🎨 Identité Visuelle & Branding',
					description:
						'Création de logos, chartes graphiques et supports de communication pour construire une image de marque forte et cohérente.',
					features: [
						'Conception de logos',
						'Chartes graphiques complètes',
						'Design de packaging',
						'Supports print et digitaux',
						'Guidelines de marque'
					]
				},
				{
					id: 'strategy',
					title: '📊 Stratégie Digitale',
					description:
						'Audit, conseil et accompagnement pour optimiser votre présence en ligne et atteindre vos objectifs business.',
					features: [
						'Audit digital complet',
						'Plan de digitalisation',
						'Roadmap stratégique',
						'Analyse concurrentielle',
						'KPIs et métriques de succès'
					]
				},
				{
					id: 'analytics',
					title: '📈 Analytics & Optimisation',
					description:
						"Mise en place d'outils de mesure, analyse des données et recommandations pour améliorer vos performances.",
					features: [
						'Tableaux de bord personnalisés',
						'Tracking et analyse de données',
						'Tests A/B et optimisation',
						'Rapports de performance',
						'Recommandations stratégiques'
					]
				},
				{
					id: 'mobile',
					title: '📱 Applications Mobiles',
					description:
						"Développement d'applications natives et hybrides pour iOS et Android, avec une expertise particulière dans les solutions de paiement mobile.",
					features: [
						'Applications natives iOS/Android',
						'Applications hybrides multi-plateformes',
						'Intégration de paiements mobiles',
						'Solutions de géolocalisation',
						'Applications de livraison et logistique'
					]
				},
				{
					id: 'maintenance',
					title: '🔄 Maintenance & Support',
					description:
						'Services de maintenance préventive, mises à jour de sécurité et support technique réactif.',
					features: [
						'Maintenance préventive',
						'Mises à jour de sécurité',
						'Support technique 24/7',
						'Monitoring et alertes',
						'Optimisation des performances'
					]
				}
			]
		},
		process: {
			title: 'Notre Processus',
			headline: 'Une méthodologie éprouvée qui garantit votre succès',
			intro: 'Une approche méthodique pour des résultats exceptionnels',
			steps: [
				{
					number: '01',
					title: 'Découverte',
					description: 'Nous immergeons dans votre univers pour comprendre vos besoins.'
				},
				{
					number: '02',
					title: 'Stratégie',
					description: 'Nous élaborons une stratégie sur mesure alignée avec vos objectifs.'
				},
				{
					number: '03',
					title: 'Création',
					description: 'Nous donnons vie à vos idées avec créativité et expertise.'
				},
				{
					number: '04',
					title: 'Croissance',
					description: 'Nous accompagnons votre croissance avec un suivi continu.'
				}
			]
		}
	};
</script>

<svelte:head>
	<title>Services - Labo Jaune | Solutions digitales complètes pour l'Afrique</title>
	<meta
		name="description"
		content="Découvrez nos services : stratégie digitale, design UX/UI, développement web et mobile, marketing digital. Solutions adaptées au marché africain."
	/>
	<meta
		name="keywords"
		content="services digitaux, stratégie digitale, design UX UI, développement web, développement mobile, marketing digital, transformation numérique Afrique"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/services" />
	<meta
		property="og:title"
		content="Services - Labo Jaune | Solutions digitales complètes pour l'Afrique"
	/>
	<meta
		property="og:description"
		content="Découvrez nos services : stratégie digitale, design UX/UI, développement web et mobile, marketing digital."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/services" />
	<meta
		property="twitter:title"
		content="Services - Labo Jaune | Solutions digitales complètes pour l'Afrique"
	/>
	<meta
		property="twitter:description"
		content="Solutions digitales sur mesure : stratégie, design, développement, marketing."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/services" />
</svelte:head>

<!-- Hero Section -->
<section class="pb-16 pt-32">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="overline" className="mb-2 text-jaune font-mono">
					{content.services.title}
				</Typography>
				<Typography variant="h1" className="mb-6 font-display">
					{content.services.headline}
				</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="body-large" className="text-noir/80">
					{content.services.intro}
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Services Grid -->
<section class="bg-gris-clair py-24">
	<Container>
		<div class="space-y-24">
			{#each content.services.list as service, i}
				<div
					class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
					class:lg:grid-flow-dense={i % 2 === 1}
				>
					<div
						class="space-y-6"
						class:lg:col-start-2={i % 2 === 1}
						in:fly={{ x: i % 2 === 0 ? -20 : 20, duration: 600, delay: 100 }}
					>
						<Typography variant="overline" className="text-jaune font-mono">
							0{i + 1}
						</Typography>
						<Typography variant="h2" className="font-display">
							{service.title}
						</Typography>
						<Typography variant="body-large" className="text-noir/80">
							{service.description}
						</Typography>

						<div class="space-y-3">
							{#each service.features as feature}
								<div class="flex items-start gap-3">
									<div class="mt-2 h-2 w-2 flex-shrink-0 bg-jaune"></div>
									<Typography variant="body" className="text-noir/70">
										{feature}
									</Typography>
								</div>
							{/each}
						</div>

						<div class="pt-4">
							<Button href="/services/{service.id}" variant="primary">En savoir plus →</Button>
						</div>
					</div>

					<div
						class="relative aspect-video overflow-hidden rounded-2xl bg-noir"
						class:lg:col-start-1={i % 2 === 1}
						in:fadeScale={{ duration: 600, delay: 200 }}
					>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="h-24 w-24 rounded-2xl bg-jaune"></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- Process Preview -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.process.title}
			</Typography>
			<Typography variant="h2" className="mb-4 font-display text-blanc">
				{content.process.headline}
			</Typography>
			<Typography variant="body-large" className="text-blanc/80 max-w-2xl mx-auto">
				{content.process.intro}
			</Typography>
		</div>

		<div class="flex flex-wrap justify-center gap-8">
			{#each content.process.steps as step, i}
				<div class="text-center" in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}>
					<Typography variant="h1" className="mb-2 font-display text-jaune">
						{step.number}
					</Typography>
					<Typography variant="body" className="text-blanc/80">
						{step.title}
					</Typography>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- CTA Section -->
<section class="py-24">
	<Container>
		<div class="rounded-2xl border-2 border-noir bg-jaune p-12 text-center text-noir lg:p-16">
			<Typography variant="h2" className="mb-4 font-display">Prêt à démarrer ?</Typography>
			<Typography variant="body-large" className="mb-8 text-noir/80 max-w-2xl mx-auto">
				Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos
				objectifs.
			</Typography>
			<Button
				href="/contact"
				variant="secondary"
				size="large"
				className="bg-blanc hover:bg-noir hover:text-blanc"
			>
				Contactez-nous
			</Button>
		</div>
	</Container>
</section>
