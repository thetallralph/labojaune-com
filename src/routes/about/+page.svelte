<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const content = {
		about: {
			title: 'À propos',
			headline: "Nous sommes le partenaire tech qui comprend vraiment l'Afrique",
			intro:
				'Le Labo Jaune est une agence tech et design basée à Cotonou, au Bénin. Nous accompagnons les entreprises, notamment africaines, dans leur croissance à travers des solutions technologiques adaptées. Notre approche sur-mesure est centrée sur les besoins réels du client.',
			mission: {
				title: 'Notre Mission',
				headline: "Accompagner les entreprises africaines vers l'excellence digitale",
				description:
					"Notre mission est d'offrir un accompagnement humain, rigoureux et créatif aux entreprises africaines pour les aider à bâtir des produits durables, pertinents et bien pensés."
			},
			values: [
				{
					title: '🎯 Effectivité',
					description:
						'Nous créons des solutions qui fonctionnent réellement, avec des fonctionnalités concrètes qui répondent aux besoins spécifiques de nos clients.'
				},
				{
					title: '💼 Professionnalisme',
					description:
						'Nous maintenons les plus hauts standards de qualité dans notre travail, avec une approche rigoureuse et une attention aux détails qui inspire confiance.'
				},
				{
					title: '✨ Originalité',
					description:
						'Nous apportons une touche créative unique à chaque projet, en identifiant les solutions les plus simples, efficaces et durables pour votre contexte.'
				}
			]
		},
		team: {
			title: 'Notre Équipe',
			headline: 'Des experts passionnés qui transforment vos défis en opportunités',
			intro: 'Une équipe passionnée qui prend le temps de comprendre votre contexte et vos enjeux',
			members: [
				{
					name: 'Ralph Gnonlonfoun',
					position: 'Co-Fondateur, Product Designer & Développeur Senior',
					bio: "Fort de 10 années d'expérience dans la tech internationale, Ralph a forgé son expertise au sein de l'agence Atelier Paon puis de la startup américaine Beans. Spécialiste des plateformes à fort impact social, il porte une vision ambitieuse : créer des expériences digitales qui transforment l'Afrique."
				},
				{
					name: 'Audrey Avocegamou',
					position: 'Co-Fondatrice, Directrice de Projets & Développement',
					bio: "Parcours marqué par une riche expérience dans la gestion de projets internationaux, notamment à l'Ambassade de France à Malabo. Son passage en tant que collaboratrice à la Fondation BOA au Maroc lui confère une compréhension unique des enjeux. Expertise pointue dans le montage de partenariats pour des projets communautaires."
				}
			]
		}
	};
</script>

<svelte:head>
	<title>À propos - Le Labo Jaune | Agence tech et design à Cotonou</title>
	<meta
		name="description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin. Nous accompagnons les entreprises africaines dans leur croissance avec des solutions technologiques sur-mesure."
	/>
	<meta
		name="keywords"
		content="à propos, agence digitale africaine, équipe créative, innovation digitale, mission, valeurs, culture d'entreprise"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/about" />
	<meta property="og:title" content="À propos - Le Labo Jaune | Agence tech et design à Cotonou" />
	<meta
		property="og:description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin. Nous accompagnons les entreprises africaines avec des solutions sur-mesure."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/about" />
	<meta
		property="twitter:title"
		content="À propos - Le Labo Jaune | Agence tech et design à Cotonou"
	/>
	<meta
		property="twitter:description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/about" />
</svelte:head>

<!-- Hero Section -->
<section class="pb-16 pt-32">
	<Container>
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="overline" className="mb-2 text-jaune font-mono">
					{content.about.title}
				</Typography>
				<Typography variant="h1" className="mb-6 font-display">
					{content.about.headline}
				</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="body-large" className="text-noir/80">
					{content.about.intro}
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Mission Section -->
<section class="bg-gris-clair py-16">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.about.mission.title}
			</Typography>
			<Typography variant="h2" className="mb-8 font-display">
				{content.about.mission.headline}
			</Typography>
			<Typography variant="body-large" className="text-noir/80">
				{content.about.mission.description}
			</Typography>
		</div>
	</Container>
</section>

<!-- Values Section -->
<section class="py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display text-center">Nos Valeurs</Typography>
		<Grid cols={3} gap="lg">
			{#each content.about.values as value, i}
				<div
					class="border-2 border-noir bg-blanc p-8 transition-all duration-300 hover:bg-jaune"
					in:fadeScale={{ duration: 600, delay: 100 + i * 100 }}
				>
					<Typography variant="h3" className="mb-4 font-bold">
						{value.title}
					</Typography>
					<Typography variant="body" className="text-noir/80">
						{value.description}
					</Typography>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- Team Section -->
<section class="bg-noir py-24 text-blanc">
	<Container>
		<div class="mb-16 text-center">
			<Typography variant="overline" className="mb-2 text-jaune font-mono">
				{content.team.title}
			</Typography>
			<Typography variant="h2" className="mb-4 font-display text-blanc">
				{content.team.headline}
			</Typography>
			<Typography variant="body-large" className="text-blanc/80 max-w-2xl mx-auto">
				{content.team.intro}
			</Typography>
		</div>

		<Grid cols={2} gap="lg" className="max-w-4xl mx-auto">
			{#each content.team.members as member, i}
				<div class="text-center" in:fly={{ y: 20, duration: 600, delay: 100 + i * 100 }}>
					<div class="mb-6 aspect-square bg-jaune"></div>
					<Typography variant="h4" className="mb-2 font-bold">
						{member.name}
					</Typography>
					<Typography variant="body-small" className="mb-4 text-jaune">
						{member.position}
					</Typography>
					<Typography variant="body-small" className="text-blanc/70">
						{member.bio}
					</Typography>
				</div>
			{/each}
		</Grid>
	</Container>
</section>

<!-- Culture Section -->
<section class="py-24">
	<Container>
		<div class="mx-auto max-w-4xl">
			<Typography variant="h2" className="mb-8 font-display text-center">Notre Culture</Typography>
			<div class="border-2 border-noir bg-jaune p-12">
				<Typography variant="h3" className="mb-6 font-serif italic">
					"Comme un médecin qui diagnostique avant de prescrire"
				</Typography>
				<Typography variant="body-large" className="text-noir/80">
					Au Labo Jaune, nous adoptons une approche diagnostique rigoureuse. Comme un médecin
					examine son patient avant de prescrire un traitement, nous analysons en profondeur votre
					écosystème numérique, vos symptômes business et vos objectifs de santé digitale. Ce n'est
					qu'après ce diagnostic complet que nous concevons la solution sur-mesure qui guérira vos
					défis et préviendra les complications futures.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Collaboration Section -->
<section class="bg-blanc py-24">
	<Container>
		<div class="mx-auto max-w-4xl">
			<Typography variant="h2" className="mb-8 font-display text-center">
				Notre Réseau de Collaboration
			</Typography>
			<Typography variant="body-large" className="mb-12 text-center text-noir/80">
				Le Labo Jaune travaille avec un réseau d'experts indépendants dans des domaines
				complémentaires pour offrir des solutions complètes et adaptées.
			</Typography>
			<Grid cols={3} gap="lg" className="max-w-3xl mx-auto">
				<div
					class="rounded-2xl border-2 border-noir bg-gris-clair p-6 text-center transition-all duration-300 hover:bg-jaune"
					in:fadeScale={{ duration: 600, delay: 100 }}
				>
					<Typography variant="h4" className="mb-3 font-bold">🔍 SEO</Typography>
					<Typography variant="body" className="text-noir/70">
						Experts en référencement pour maximiser votre visibilité en ligne
					</Typography>
				</div>
				<div
					class="rounded-2xl border-2 border-noir bg-gris-clair p-6 text-center transition-all duration-300 hover:bg-jaune"
					in:fadeScale={{ duration: 600, delay: 200 }}
				>
					<Typography variant="h4" className="mb-3 font-bold">📢 Marketing</Typography>
					<Typography variant="body" className="text-noir/70">
						Spécialistes en stratégies marketing adaptées au marché africain
					</Typography>
				</div>
				<div
					class="rounded-2xl border-2 border-noir bg-gris-clair p-6 text-center transition-all duration-300 hover:bg-jaune"
					in:fadeScale={{ duration: 600, delay: 300 }}
				>
					<Typography variant="h4" className="mb-3 font-bold">🎨 Design Spécialisé</Typography>
					<Typography variant="body" className="text-noir/70">
						Designers créatifs pour des projets nécessitant une expertise particulière
					</Typography>
				</div>
			</Grid>
		</div>
	</Container>
</section>

<!-- CTA Section -->
<section class="bg-gris-clair py-24">
	<Container>
		<div class="text-center">
			<Typography variant="h2" className="mb-4 font-display">
				Prêt à travailler ensemble ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-noir/80 max-w-2xl mx-auto">
				Découvrez comment nous pouvons transformer votre vision en réalité digitale.
			</Typography>
			<div class="flex justify-center gap-4">
				<Button href="/contact" size="large">Démarrer un projet</Button>
				<Button href="/services" variant="secondary" size="large">Découvrir nos services</Button>
			</div>
		</div>
	</Container>
</section>
