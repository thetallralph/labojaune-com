<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const projects = [
		{
			id: 'aidjedo',
			title: 'ONG AIDJEDO',
			client: 'AÏDJÈDO – PAIX DU CŒUR',
			category: 'Site Web',
			year: '2024',
			description: 'Plateforme complète avec système de dons en ligne, espace membre et système de signalement pour cette ONG béninoise dédiée aux personnes vulnérables',
			tags: ['UX Design', 'Développement', 'Système de dons', 'Espace membre'],
			featured: true,
			stats: {
				traffic: '+150%',
				donations: '+40%',
				members: '+50',
				mobile: '85%'
			}
		},
		{
			id: 'fdfa',
			title: 'Fondation FDFA',
			client: 'Fondation pour le Développement du Football Africain',
			category: 'Site Institutionnel',
			year: '2024',
			description: 'Plateforme institutionnelle moderne positionnant la FDFA comme acteur majeur du développement du football africain avec mise en avant de 14 partenaires prestigieux',
			tags: ['Design', 'Développement', 'Partenariats', 'Animation'],
			featured: true,
			stats: {
				partners: '14',
				visibility: '+70%',
				inquiries: '+60%'
			}
		},
		{
			id: 'le-belier',
			title: 'Agence Le Bélier',
			client: 'Agence Le Bélier Tourisme',
			category: 'Site Web',
			year: '2024',
			description: 'Site web intégrant tourisme, hôtellerie et restauration avec système de réservation en ligne et intégration des plateformes internationales',
			tags: ['UX/UI', 'Réservation', 'Multi-services', 'WhatsApp'],
			featured: true,
			stats: {
				bookings: '+110%',
				rating: '4.8/5',
				countries: '24',
				engagement: '+150%'
			}
		},
		{
			id: 'afmef',
			title: 'AFMEF',
			client: 'Association des Femmes du MEF',
			category: 'Plateforme Web',
			year: '2023',
			description: "Plateforme digitale moderne avec système d'adhésion en ligne pour l'association des femmes du Ministère de l'Économie et des Finances",
			tags: ['Web App', 'Adhésion en ligne', 'Design institutionnel'],
			stats: {
				members: '+400',
				events: '15',
				mobile: '90%',
				satisfaction: '85%'
			}
		},
		{
			id: 'toguna-world',
			title: 'Toguna World',
			client: 'Pierre-Christophe Gam',
			category: 'Site Artistique',
			year: '2023',
			description: 'Expérience web immersive pour un projet artistique explorant les rêves et la Renaissance Africaine avec installation multimédia',
			tags: ['Design immersif', 'Multimédia', 'Art digital'],
			featured: true,
			awards: [
				'Prix Unity for Humanity 2022',
				'Unity Kick-off Award 2023',
				'Fellowship MIT Open Documentary Lab',
				'Exposition Ars Electronica 2024'
			]
		},
		{
			id: 'iwaria',
			title: 'Iwaria',
			client: 'Iwaria Platform',
			category: 'Plateforme Web',
			year: '2023',
			description: "Conception de l'interface utilisateur pour une banque d'images africaines gratuites de haute qualité",
			tags: ['UI Design', 'UX', 'Galerie', 'Responsive'],
			stats: {
				responsive: '100%',
				navigation: '+40%',
				satisfaction: '95%'
			}
		},
		{
			id: 'coris-bank',
			title: 'Coris Bank Mobile',
			client: 'Coris Bank',
			category: 'Application Mobile',
			year: '2022',
			description: 'Conception UX/UI complète et prototype interactif pour une application de mobile banking aux standards internationaux',
			tags: ['Mobile', 'UX/UI', 'Prototype', 'Banking'],
			deliverables: [
				'Prototype interactif complet',
				'Interface moderne et intuitive',
				'Standards bancaires internationaux',
				'Design sécurisé'
			]
		}
	];

	const categories = ['Tous', 'Site Web', 'Site Institutionnel', 'Plateforme Web', 'Application Mobile', 'Site Artistique'];
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
					Ce portfolio présente une sélection de projets qui illustrent notre capacité à transformer 
					les visions de nos clients en réalités digitales performantes. Chaque projet témoigne de 
					notre approche unique alliant créativité, expertise technique et compréhension profonde des enjeux locaux.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Filter Section - Hidden on mobile -->
<section class="sticky top-16 z-20 bg-gris-clair py-8 hidden lg:block">
	<Container>
		<div class="flex flex-wrap gap-4">
			{#each categories as category}
				<button
					on:click={() => (selectedCategory = category)}
					class="border-2 border-noir px-6 py-2 transition-all duration-300 rounded-full
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
					class="group overflow-hidden border-2 border-noir bg-blanc transition-all duration-300 hover:border-jaune rounded-2xl"
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
								<span class="bg-gris-clair px-3 py-1 text-sm text-noir rounded-full">
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
