<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly } from '$lib/utils/transitions';
	import { projectsData } from '$lib/data/projects';

	// Get all projects as an array
	const allProjects = Object.values(projectsData);

	const content = {
		hero: {
			headline: "Accompagner votre croissance avec des solutions tech adaptées",
			subheadline:
				'Agence tech et design basée à Cotonou, nous créons des solutions sur-mesure pour les entreprises africaines',
			cta: {
				primary: 'Démarrer un projet',
				secondary: 'Découvrir notre travail'
			}
		},
		services: {
			title: 'Nos Services',
			headline: 'Nous créons des expériences digitales qui transforment votre business',
			intro: 'Des solutions complètes pour votre transformation digitale',
			list: [
				{
					id: 'strategy',
					title: 'Stratégie Digitale',
					description:
						'Nous vous accompagnons dans le déploiement de solutions technologiques adaptées à vos besoins et à votre contexte.'
				},
				{
					id: 'design',
					title: 'Design & Expérience Utilisateur',
					description:
						'Nous créons des identités visuelles et des interfaces qui reflètent votre marque et parlent à votre audience.'
				},
				{
					id: 'development',
					title: 'Développement Web & Mobile',
					description:
						'Nous développons des sites internet et applications web/mobiles sur-mesure, simples, efficaces et durables.'
				},
				{
					id: 'marketing',
					title: 'Marketing Digital',
					description:
						'Nous vous conseillons et accompagnons dans votre stratégie digitale pour maximiser votre impact en ligne.'
				}
			]
		},
		process: {
			title: 'Notre Processus',
			headline: 'Quatre étapes pour transformer vos idées en réalité',
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
			headline: 'Des projets qui ont transformé la présence digitale de nos clients',
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
</script>

<svelte:head>
	<title>Le Labo Jaune - Agence tech et design à Cotonou, Bénin</title>
	<meta
		name="description"
		content="Agence tech et design basée à Cotonou. Nous accompagnons les entreprises africaines dans leur croissance avec des solutions technologiques sur-mesure : sites web, applications, branding."
	/>
	<meta
		name="keywords"
		content="agence tech, agence design, développement web, développement mobile, branding, Cotonou, Bénin, Afrique, solutions technologiques"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/" />
	<meta
		property="og:title"
		content="Le Labo Jaune - Agence tech et design à Cotonou, Bénin"
	/>
	<meta
		property="og:description"
		content="Agence tech et design basée à Cotonou. Nous accompagnons les entreprises africaines avec des solutions technologiques sur-mesure."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/" />
	<meta
		property="twitter:title"
		content="Le Labo Jaune - Agence tech et design à Cotonou, Bénin"
	/>
	<meta
		property="twitter:description"
		content="Agence tech et design basée à Cotonou. Solutions technologiques sur-mesure pour entreprises africaines."
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
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.services.title}
			</Typography>
			<Typography variant="h2" className="mb-4 font-display text-noir">
				{content.services.headline}
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
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.process.title}
			</Typography>
			<Typography variant="h2" className="mb-4 font-display text-noir">
				{content.process.headline}
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
<section class="bg-gris-clair py-24 overflow-hidden">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.portfolio.title}
			</Typography>
			<Typography variant="h2" className="mb-4 font-display text-noir">
				{content.portfolio.headline}
			</Typography>
			<Typography variant="body-large" className="text-noir/80 max-w-2xl mx-auto">
				{content.portfolio.intro}
			</Typography>
		</div>
	</Container>

	<!-- Horizontal scrollable projects -->
	<div class="relative">
		<div class="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4">
			{#each allProjects as project, i}
				<div 
					class="flex-none w-[90vw] sm:w-[450px] lg:w-[500px]"
					in:fly={{ x: 50, duration: 600, delay: 100 + i * 50 }}
				>
					<a
						href="/portfolio/{project.id}"
						class="group relative block overflow-hidden border-2 border-noir bg-blanc transition-all duration-300 hover:border-jaune rounded-2xl cursor-pointer no-underline h-full"
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
						<div class="p-6 lg:p-8">
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
							<Typography variant="body" className="mb-6 text-noir/80 line-clamp-2">
								{project.description}
							</Typography>
							<span
								class="inline-flex items-center text-noir group-hover:translate-x-2 transition-transform font-medium"
							>
								Voir le projet →
							</span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>

	<Container>
		<div class="text-center mt-12">
			<Button href="/portfolio" size="large" variant="secondary">
				{content.portfolio.cta}
			</Button>
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

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
</style>
