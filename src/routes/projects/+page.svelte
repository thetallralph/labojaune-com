<script>
	import { onMount } from 'svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const projects = [
		{
			id: 'aidjedo',
			title: 'Plateforme complète avec système de dons en ligne et espace membre',
			category: 'Site Web',
			image: '/images/projects/aidjedo.jpg'
		},
		{
			id: 'fdfa',
			title: 'Plateforme institutionnelle positionnant la FDFA comme acteur majeur du football africain',
			category: 'Site Institutionnel',
			image: '/images/projects/fdfa.jpg'
		},
		{
			id: 'le-belier',
			title: 'Site web intégrant tourisme, hôtellerie et restauration avec réservation en ligne',
			category: 'Site Web',
			image: '/images/projects/le-belier.jpg'
		},
		{
			id: 'toguna-world',
			title: 'Expérience web immersive explorant les rêves et la Renaissance Africaine',
			category: 'Site Artistique',
			image: '/images/projects/toguna-world.jpg'
		},
		{
			id: 'iwaria',
			title: "Interface utilisateur pour une banque d'images africaines gratuites",
			category: 'UI Design',
			image: '/images/projects/iwaria.jpg'
		}
	];

	let isDark = $state(false);

	onMount(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			// Transition vers fond noir après 100px de scroll
			isDark = scrolled > 100;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Projets - Labo Jaune | Projets digitaux innovants</title>
	<meta
		name="description"
		content="Découvrez nos réalisations : e-commerce, applications mobiles, plateformes web. Projets digitaux innovants et sur-mesure."
	/>
	<meta
		name="keywords"
		content="projets digitaux, réalisations web, applications mobiles, e-commerce, fintech, edtech, réalisations digitales"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/projects" />
	<meta property="og:title" content="Projets - Labo Jaune | Nos réalisations digitales" />
	<meta
		property="og:description"
		content="Explorez nos projets digitaux innovants : e-commerce, fintech, applications mobiles et plateformes web."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/projects" />
	<meta property="twitter:title" content="Projets - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Projets digitaux innovants et sur-mesure."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/projects" />
</svelte:head>

<div class="min-h-screen transition-colors duration-700 {isDark ? 'bg-noir' : 'bg-blanc'}">
	<!-- Hero Section - Simple titre -->
	<section class="pb-24 pt-32">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-4xl text-center" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h1
					class="font-display text-5xl font-bold transition-colors duration-700 md:text-7xl {isDark
						? 'text-blanc'
						: 'text-noir'}"
				>
					Des réalisations qui parlent d'elles-mêmes
				</h1>
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="pb-24">
		<div class="container mx-auto px-6">
			<div class="grid gap-12 md:grid-cols-2">
				{#each projects as project, i}
					<a
						href="/projects/{project.id}"
						class="group block transition-all duration-300 hover:opacity-80"
						in:fadeScale={{ duration: 600, delay: 100 + i * 50 }}
					>
						<!-- Project Card -->
						<div class="pb-12">
							<!-- Image -->
							<div class="mb-6 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									class="h-auto w-full transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>
							</div>

							<!-- Title -->
							<h2
								class="mb-3 text-xl font-bold transition-colors duration-700 md:text-2xl {isDark
									? 'text-blanc'
									: 'text-noir'}"
							>
								{project.title}
							</h2>

							<!-- Category -->
							<p
								class="mb-8 text-sm transition-colors duration-700 {isDark
									? 'text-blanc/60'
									: 'text-noir/60'}"
							>
								{project.category}
							</p>

							<!-- Bottom Bar Separator -->
							<div
								class="h-px w-full transition-colors duration-700 {isDark
									? 'bg-blanc/10'
									: 'bg-noir/10'}"
							></div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>

