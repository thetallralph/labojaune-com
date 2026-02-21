<script>
	import { fly } from '$lib/utils/transitions';
	import { projectsData } from '$lib/data/projects';
	import TestimonialsCarousel from '$lib/components/organisms/TestimonialsCarousel.svelte';

	// Get all projects as an array
	const allProjects = Object.values(projectsData);

	// Client logos
	const clients = [
		{ name: 'AIDJEDO', logo: '/logos/logo-aidjedo.png' },
		{ name: 'FDFA', logo: '/logos/logo-fdfa.png' },
		{ name: 'Le Bélier', logo: '/logos/logo-lebelier.png' },
		{ name: 'Koin Koin', logo: '/logos/logo-koinkoin.png' },
		{ name: 'Pick It', logo: '/logos/logo-pickit.png' },
		{ name: 'Toguna World', logo: '/logos/logo-togouna.png' }
	];

	// Testimonials data
	const testimonials = [
		{
			quote:
				"Le Labo Jaune a transformé notre présence digitale. Leur approche stratégique et leur expertise technique ont dépassé nos attentes. L'équipe est professionnelle, réactive et vraiment à l'écoute.",
			author: 'Mamadou Diallo',
			role: 'Directeur Général',
			company: 'CORIS Bank',
			authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
		},
		{
			quote:
				"Travailler avec Le Labo Jaune a été une révélation. Ils ont su comprendre nos besoins et nous proposer une solution sur-mesure qui a considérablement amélioré notre efficacité opérationnelle.",
			author: 'Aminata Touré',
			role: 'Directrice Marketing',
			company: 'FDFA',
			authorImage:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80'
		},
		{
			quote:
				"Une équipe exceptionnelle qui allie créativité et rigueur technique. Le projet a été livré dans les délais avec une qualité irréprochable. Je recommande vivement leurs services.",
			author: 'Jean-Claude Mensah',
			role: 'CEO',
			company: 'Toguna World',
			authorImage:
				'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80'
		}
	];

	const content = {
		hero: {
			headline: 'Accompagner votre croissance avec des solutions tech adaptées',
			subheadline:
				'Agence tech et design basée à Cotonou, nous créons des solutions sur-mesure pour votre entreprise',
			cta: {
				primary: 'Démarrer un projet',
				secondary: 'Découvrir notre travail'
			}
		},
		services: {
			title: 'Votre idée mérite une solution sur-mesure',
			headline:
				'De la stratégie au lancement, nous transformons vos ambitions en produits digitaux qui cartonnent',
			cta: {
				text: 'Parlez-nous de votre projet →',
				link: '/contact'
			},
			list: [
				{
					id: 'strategy',
					title: 'Stratégie Digitale',
					value:
						'Nous clarifions votre vision et définissons la roadmap pour atteindre vos objectifs business',
					deliverables: ['Audit & analyse', 'Roadmap produit', "Plan d'action", 'Budget & timeline']
				},
				{
					id: 'design',
					title: 'Design & UX',
					value:
						'Nous créons des interfaces intuitives qui reflètent votre identité et engagent vos utilisateurs',
					deliverables: ['Identité visuelle', 'Maquettes UI/UX', 'Prototype interactif', 'Design system']
				},
				{
					id: 'development',
					title: 'Développement',
					value: 'Nous construisons des solutions techniques robustes, évolutives et faciles à maintenir',
					deliverables: ['Sites web', 'Applications mobiles', 'Plateformes sur-mesure', 'Intégrations API']
				}
			]
		},
		portfolio: {
			title: 'Projets Récents',
			headline: 'Quelques projets sur lesquels nous avons travaillé récemment',
			intro: 'Des solutions concrètes pour des clients ambitieux',
			cta: 'Voir tous les projets'
		},
		navigation: {
			title: 'En savoir plus',
			cards: [
				{
					id: 'about',
					title: 'Qui nous sommes',
					description:
						'Découvrez notre histoire, notre équipe et les valeurs qui nous animent au quotidien.',
					number: '01',
					link: '/about'
				},
				{
					id: 'methodology',
					title: 'Notre Méthodologie',
					description:
						'Comment nous travaillons : de la découverte à la livraison, en passant par la création.',
					number: '02',
					link: '/about#methodology'
				},
				{
					id: 'blog',
					title: 'Articles Tech',
					description:
						'Nos réflexions et analyses sur le secteur tech, le design et l innovation en Afrique.',
					number: '03',
					link: '/blog'
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
		content="Agence tech et design basée à Cotonou. Nous accompagnons les entreprises dans leur croissance avec des solutions technologiques sur-mesure : sites web, applications, branding."
	/>
	<meta
		name="keywords"
		content="agence tech, agence design, développement web, développement mobile, branding, Cotonou, Bénin, solutions technologiques"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/" />
	<meta property="og:title" content="Le Labo Jaune - Agence tech et design à Cotonou, Bénin" />
	<meta
		property="og:description"
		content="Agence tech et design basée à Cotonou. Nous accompagnons les entreprises avec des solutions technologiques sur-mesure."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/" />
	<meta property="twitter:title" content="Le Labo Jaune - Agence tech et design à Cotonou, Bénin" />
	<meta
		property="twitter:description"
		content="Agence tech et design basée à Cotonou. Solutions technologiques sur-mesure pour les entreprises."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/" />
</svelte:head>

<!-- Hero Section -->
<section class="flex min-h-screen flex-col pt-20">
	<div class="container mx-auto flex flex-1 items-center justify-center px-6">
		<div class="mx-auto max-w-4xl text-center">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h1 class="mb-6 font-display text-6xl font-bold leading-tight md:text-7xl">
					{@html content.hero.headline.replace(
						'transforment',
						'<span class="bg-noir text-jaune px-2">transforment</span>'
					)}
				</h1>
			</div>

			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<p class="mx-auto mb-8 max-w-2xl text-xl font-medium text-noir md:text-2xl">
					{content.hero.subheadline}
				</p>
			</div>

			<div
				in:fly={{ y: 20, duration: 600, delay: 300 }}
				class="flex flex-col justify-center gap-4 sm:flex-row"
			>
				<a
					href="#contact"
					class="rounded-full bg-noir px-8 py-4 text-lg font-semibold text-blanc transition-all hover:bg-noir/90"
				>
					{content.hero.cta.primary}
				</a>
				<a
					href="/projects"
					class="rounded-full border-2 border-noir bg-transparent px-8 py-4 text-lg font-semibold text-noir transition-all hover:bg-noir hover:text-blanc"
				>
					{content.hero.cta.secondary}
				</a>
			</div>
		</div>
	</div>

	<!-- Clients Section -->
	<div class="mx-auto w-full max-w-5xl border-t border-noir/10 py-8">
		<div class="px-6">
			<div class="mb-6">
				<p class="text-center text-xs font-semibold uppercase tracking-wider text-noir/60">
					Ils nous font confiance
				</p>
			</div>
			<div class="relative overflow-hidden">
				<!-- Left fade -->
				<div
					class="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-jaune to-transparent"
				></div>
				<!-- Right fade -->
				<div
					class="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-jaune to-transparent"
				></div>

				<!-- Scrolling logos -->
				<div class="flex animate-scroll gap-32">
					{#each [...clients, ...clients] as client}
						<div class="flex-shrink-0">
							<div class="flex h-8 w-20 items-center justify-center">
								<img
									src={client.logo}
									alt={client.name}
									class="h-full w-full object-contain"
									loading="lazy"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Value Proposition Section -->
<section class="relative bg-blanc py-24 md:py-32 lg:py-40">
	<!-- Grain texture overlay -->
	<div class="grain-overlay pointer-events-none absolute inset-0"></div>

	<div class="container relative z-10 mx-auto px-6">
		<div class="mx-auto max-w-5xl">
			<div in:fly={{ y: 30, duration: 800, delay: 100 }}>
				<h2 class="mb-10 font-display text-3xl font-bold leading-tight text-noir md:text-4xl lg:text-5xl">
					Le digital n'est pas une fin en soi. C'est un moyen d'amplifier ce qui vous rend unique.
					Nous créons des solutions qui révèlent l'essence de votre projet et donnent à vos idées la portée qu'elles méritent.
				</h2>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 300 }}>
				<a
					href="/about"
					class="inline-flex items-center gap-2 text-base font-medium text-noir/60 transition-colors hover:text-jaune md:text-lg"
				>
					En savoir plus sur nous
					<span class="transition-transform hover:translate-x-1">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section class="overflow-hidden bg-noir py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 font-display text-4xl font-bold text-blanc md:text-5xl">
				{content.portfolio.title}
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-blanc/80">
				{content.portfolio.headline}
			</p>
		</div>
	</div>

	<!-- Spacious organic layout with 1-2 projects per row -->
	<div class="relative px-6 lg:px-12">
		<div class="mx-auto max-w-7xl">
			<div class="space-y-8 lg:space-y-12">
				{#each allProjects.slice(0, 4) as project, i}
					{@const layouts = [
						/* 0 - AIDJEDO - Full width landscape */
						{ width: 'w-full', aspectRatio: 'aspect-[16/9] lg:aspect-[5/2]', align: '' },
						/* 1 - FDFA - Right aligned, 60% width, portrait */
						{ width: 'w-full lg:w-3/5 lg:ml-auto', aspectRatio: 'aspect-[4/3] lg:aspect-[4/3]', align: '' },
						/* 2 - Le Bélier - Left aligned, 55% width, square-ish */
						{ width: 'w-full lg:w-[55%]', aspectRatio: 'aspect-[4/3] lg:aspect-[3/2]', align: '' },
						/* 3 - Toguna World - Right aligned, 50% width, portrait */
						{ width: 'w-full lg:w-1/2 lg:ml-auto', aspectRatio: 'aspect-[4/3] lg:aspect-[4/3]', align: '' }
					]}
					{@const layout = layouts[i]}

					<div
						class="{layout.width}"
						in:fly={{ y: 30, duration: 600, delay: 100 + i * 75 }}
					>
						<a
							href="/projects/{project.id}"
							class="group relative block no-underline"
						>
							<!-- Image container with real project images -->
							<div
								class="relative mb-6 {layout.aspectRatio} overflow-hidden rounded-3xl bg-gris-clair"
							>
								<img
									src={project.image}
									alt="Aperçu du projet {project.title}"
									class="h-full w-full object-cover"
									loading="lazy"
								/>
								<!-- Category badge -->
								<div class="absolute top-6 right-6 rounded-full bg-blanc/10 backdrop-blur-sm px-5 py-2.5 text-xs font-semibold text-blanc/90">
									{project.category}
								</div>
							</div>

							<!-- Project info -->
							<div class="space-y-3 px-2">
								<div class="flex items-start justify-between gap-4">
									<h3
										class="font-display text-2xl font-bold text-blanc lg:text-4xl"
									>
										{project.title}
									</h3>
									<span class="text-sm text-blanc/60 whitespace-nowrap mt-1.5">{project.year}</span>
								</div>
								<p class="text-base text-blanc/70 lg:text-lg max-w-xl">
									{project.client}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="container mx-auto px-6">
		<div class="mt-16 text-center">
			<a
				href="/projects"
				class="rounded-full border-2 border-blanc bg-transparent px-8 py-4 text-lg font-semibold text-blanc transition-all hover:bg-jaune hover:border-jaune hover:text-noir"
			>
				{content.portfolio.cta}
			</a>
		</div>
	</div>
</section>

<!-- Testimonials Carousel -->
<!-- <TestimonialsCarousel {testimonials} /> -->

<!-- Services Section -->
<section class="bg-blanc py-32">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-7xl">
			<!-- Header -->
			<div class="mb-20 max-w-3xl">
				<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
					<h2 class="mb-6 font-display text-4xl font-bold text-noir md:text-5xl">
						{content.services.title}
					</h2>
				</div>
				<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
					<p class="mb-6 text-xl text-noir/70 md:text-2xl">
						{content.services.headline}
					</p>
				</div>
				<div in:fly={{ y: 20, duration: 600, delay: 300 }}>
					<a
						href={content.services.cta.link}
						class="inline-block font-medium text-noir underline decoration-2 underline-offset-4 transition-colors hover:text-jaune"
					>
						{content.services.cta.text}
					</a>
				</div>
			</div>

			<!-- Services List -->
			<div class="space-y-0 border-t border-noir">
				{#each content.services.list as service, i}
					<div
						class="group cursor-pointer border-b border-noir py-8 transition-all duration-300 hover:bg-gris-clair/50"
						in:fly={{ y: 20, duration: 600, delay: 400 + i * 100 }}
					>
						<div class="mb-4">
							<h3 class="mb-3 text-2xl font-bold text-noir">
								{service.title}
							</h3>
							<p class="text-lg text-noir/70">
								{service.value}
							</p>
						</div>

						<!-- Deliverables (visible on hover) -->
						<div class="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20">
							<div class="flex gap-3 overflow-x-auto pb-2 pt-4 scrollbar-hide">
								{#each service.deliverables as deliverable}
									<span class="whitespace-nowrap rounded-full border border-noir bg-blanc px-4 py-2 text-sm">
										{deliverable}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Infinite scroll animation */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 30s linear infinite;
	}

	.animate-scroll:hover {
		animation-play-state: paused;
	}

	/* Grain texture */
	.grain-overlay {
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
		opacity: 1;
		mix-blend-mode: multiply;
	}

	@media (prefers-reduced-motion: reduce) {
		.grain-overlay {
			opacity: 0.03;
		}
	}
</style>
