<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly } from '$lib/utils/transitions';

	const content = {
		hero: {
			headline: "Créateurs d'expériences digitales uniques pour l'Afrique",
			subheadline:
				'Nous transformons vos idées en solutions numériques innovantes qui résonnent avec le marché africain',
			cta: {
				primary: 'Démarrer un projet',
				secondary: 'Découvrir notre travail'
			}
		},
		services: {
			title: 'Nos Services',
			intro: 'Des solutions complètes pour votre transformation digitale',
			list: [
				{
					id: 'strategy',
					title: 'Stratégie Digitale',
					description:
						'Nous élaborons des stratégies digitales sur mesure qui alignent vos objectifs business avec les opportunités du marché africain.'
				},
				{
					id: 'design',
					title: 'Design & Expérience Utilisateur',
					description:
						'Nous créons des interfaces intuitives et esthétiques qui captivent vos utilisateurs tout en respectant les spécificités culturelles.'
				},
				{
					id: 'development',
					title: 'Développement Web & Mobile',
					description:
						'Nous développons des solutions techniques robustes et performantes adaptées aux réalités technologiques africaines.'
				},
				{
					id: 'marketing',
					title: 'Marketing Digital',
					description:
						'Nous déployons des campagnes marketing créatives qui touchent efficacement votre audience cible.'
				}
			]
		},
		process: {
			title: 'Notre Processus',
			intro: 'Une approche méthodique pour des résultats exceptionnels',
			steps: [
				{
					number: '01',
					title: 'Découverte',
					description:
						'Nous immergeons dans votre univers pour comprendre vos besoins, vos défis et vos opportunités.'
				},
				{
					number: '02',
					title: 'Stratégie',
					description:
						'Nous élaborons une stratégie sur mesure alignée avec vos objectifs et adaptée au marché.'
				},
				{
					number: '03',
					title: 'Création',
					description: 'Nous donnons vie à vos idées avec créativité et expertise technique.'
				},
				{
					number: '04',
					title: 'Croissance',
					description:
						'Nous accompagnons votre croissance avec un suivi continu et des optimisations régulières.'
				}
			]
		},
		portfolio: {
			title: 'Notre Travail',
			intro: 'Des projets qui font la différence',
			cta: 'Voir tous les projets',
			projects: [
				{
					id: 'aidjedo',
					title: 'ONG AIDJEDO',
					client: 'AÏDJÈDO – PAIX DU CŒUR',
					category: 'Site Web',
					year: '2024',
					description:
						'Plateforme complète avec système de dons en ligne et espace membre pour cette ONG béninoise'
				},
				{
					id: 'fdfa',
					title: 'Fondation FDFA',
					client: 'FDFA',
					category: 'Site Institutionnel',
					year: '2024',
					description: "Plateforme moderne positionnant la FDFA comme acteur majeur du football africain"
				}
			]
		},
		testimonials: {
			title: 'La confiance de nos clients',
			list: [
				{
					quote:
						'Labo Jaune a su comprendre nos besoins spécifiques et créer une solution qui allie esthétique moderne et fonctionnalité. Leur approche professionnelle et créative a transformé notre présence en ligne.',
					author: 'Marie Kouadio',
					position: 'Directrice',
					company: 'Fondation FDFA'
				}
			]
		},
		cta: {
			banner: {
				title: "Prêt à créer quelque chose d'extraordinaire ?",
				description:
					'Parlons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs.',
				button: 'Contactez-nous'
			}
		}
	};

	const stats = [
		{ number: '50+', label: 'Projets livrés' },
		{ number: '30+', label: 'Clients satisfaits' },
		{ number: '5', label: "Années d'expertise" },
		{ number: '98%', label: 'Taux de satisfaction' }
	];
</script>

<svelte:head>
	<title>Labo Jaune - Créateurs d'expériences digitales uniques pour l'Afrique</title>
	<meta
		name="description"
		content="Agence digitale créative spécialisée dans la transformation numérique en Afrique. Nous créons des solutions web et mobile innovantes qui résonnent avec le marché africain."
	/>
	<meta
		name="keywords"
		content="agence digitale, web design, développement web, marketing digital, Afrique, transformation numérique, solutions digitales"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/" />
	<meta
		property="og:title"
		content="Labo Jaune - Créateurs d'expériences digitales uniques pour l'Afrique"
	/>
	<meta
		property="og:description"
		content="Agence digitale créative spécialisée dans la transformation numérique en Afrique. Nous créons des solutions web et mobile innovantes."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/" />
	<meta
		property="twitter:title"
		content="Labo Jaune - Créateurs d'expériences digitales uniques pour l'Afrique"
	/>
	<meta
		property="twitter:description"
		content="Agence digitale créative spécialisée dans la transformation numérique en Afrique."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/" />
</svelte:head>

<!-- Hero Section -->
<section class="flex min-h-screen items-center justify-center">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="display" className="mb-6 font-display uppercase">
					{@html content.hero.headline.replace(
						'transforment',
						'<span class="bg-noir text-jaune px-2">transforment</span>'
					)}
				</Typography>
			</div>

			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="body-large" className="mb-8 text-noir font-medium max-w-2xl mx-auto">
					{content.hero.subheadline}
				</Typography>
			</div>

			<div
				in:fly={{ y: 20, duration: 600, delay: 300 }}
				class="flex flex-col justify-center gap-4 sm:flex-row"
			>
				<Button href="#contact" size="large">
					{content.hero.cta.primary}
				</Button>
				<Button href="/portfolio" variant="secondary" size="large">
					{content.hero.cta.secondary}
				</Button>
			</div>
		</div>
	</Container>
</section>

<!-- Services Overview -->
<section class="bg-blanc py-24">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase text-noir">
				{content.services.title}
			</Typography>
			<Typography variant="body-large" className="text-noir/80">
				{content.services.intro}
			</Typography>
		</div>

		<Grid cols={2} gap="lg">
			{#each content.services.list as service, i}
				<div
					class="border-2 border-noir bg-gris-clair p-8 text-noir transition-all duration-300 hover:bg-jaune rounded-2xl"
					in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h3" className="mb-4 font-bold">
						{service.title}
					</Typography>
					<Typography variant="body" className="mb-6">
						{service.description}
					</Typography>
					<Button
						href="/services#{service.id}"
						variant="ghost"
						className="text-noir hover:text-noir"
					>
						En savoir plus →
					</Button>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- Process Section -->
<section class="bg-blanc py-24">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase text-noir">
				{content.process.title}
			</Typography>
			<Typography variant="body-large" className="text-noir/80 max-w-2xl mx-auto">
				{content.process.intro}
			</Typography>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each content.process.steps as step, i}
				<div class="relative" in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}>
					<div
						class="h-full bg-noir p-8 text-blanc transition-all duration-300 hover:bg-jaune hover:text-noir rounded-2xl"
					>
						<Typography variant="h1" className="mb-4 font-display">
							{step.number}
						</Typography>
						<Typography variant="h4" className="mb-3 font-bold">
							{step.title}
						</Typography>
						<Typography variant="body" className="opacity-90">
							{step.description}
						</Typography>
					</div>
					{#if i < content.process.steps.length - 1}
						<div class="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-noir lg:block"></div>
					{/if}
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- Featured Projects -->
<section class="bg-gris-clair py-24">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase text-noir">
				{content.portfolio.title}
			</Typography>
			<Typography variant="body-large" className="text-noir/80 max-w-2xl mx-auto">
				{content.portfolio.intro}
			</Typography>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each content.portfolio.projects.slice(0, 2) as project, i}
				<div
					class="group relative overflow-hidden border-2 border-noir bg-blanc transition-all duration-300 hover:border-jaune rounded-2xl"
					in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}
				>
					<div class="relative aspect-video overflow-hidden bg-gris-clair">
						<div
							class="absolute inset-0 bg-jaune/0 transition-colors duration-300 group-hover:bg-jaune/10"
						></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<Typography variant="h3" className="text-noir/20 font-display">
								{project.title}
							</Typography>
						</div>
					</div>
					<div class="p-8">
						<div class="mb-4 flex items-start justify-between">
							<div>
								<Typography variant="h3" className="mb-2 font-bold text-noir">
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
		</div>

		<div class="text-center">
			<Button href="/portfolio" size="large" variant="secondary">
				{content.portfolio.cta}
			</Button>
		</div>
	</Container>
</section>

<!-- Stats Section -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
			{#each stats as stat, i}
				<div
					class="border-r border-blanc/20 last:border-r-0"
					in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h1" className="mb-2 font-display text-jaune">
						{stat.number}
					</Typography>
					<Typography variant="body" className="text-blanc/80">
						{stat.label}
					</Typography>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- Testimonials Section -->
<section class="bg-blanc py-24">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase text-noir">
				{content.testimonials.title}
			</Typography>
		</div>

		<div class="mx-auto max-w-4xl">
			{#each content.testimonials.list as testimonial, i}
				<div
					class="border-2 border-noir bg-jaune p-12 rounded-2xl"
					in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h3" className="mb-8 text-noir font-serif italic leading-relaxed">
						"{testimonial.quote}"
					</Typography>
					<div class="flex items-center justify-between">
						<div>
							<Typography variant="body" className="font-bold text-noir">
								{testimonial.author}
							</Typography>
							<Typography variant="body-small" className="text-noir/80">
								{testimonial.position} • {testimonial.company}
							</Typography>
						</div>
						<div class="flex gap-1">
							{#each Array(5) as _, i}
								<div class="h-4 w-4 bg-noir"></div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- CTA Section -->
<section class="py-24">
	<Container>
		<div class="bg-noir p-12 text-center text-blanc lg:p-16 rounded-2xl">
			<Typography variant="h2" className="mb-4 font-display uppercase">
				{content.cta.banner.title}
			</Typography>
			<Typography variant="body-large" className="mb-8 text-blanc/90 max-w-2xl mx-auto">
				{content.cta.banner.description}
			</Typography>
			<Button
				href="/contact"
				variant="primary-inverse"
				size="large"
			>
				{content.cta.banner.button}
			</Button>
		</div>
	</Container>
</section>
