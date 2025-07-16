<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const content = {
		about: {
			title: 'À propos de Labo Jaune',
			intro:
				"Labo Jaune est une agence digitale créative basée en Afrique, spécialisée dans la conception et le développement d'expériences numériques sur mesure.",
			mission:
				'Notre mission est de créer des solutions digitales innovantes qui répondent aux besoins uniques du marché africain tout en respectant les standards internationaux de qualité.',
			values: [
				{
					title: 'Innovation',
					description: 'Nous repoussons constamment les limites du possible'
				},
				{
					title: 'Authenticité',
					description: 'Nous créons des expériences qui résonnent avec la culture locale'
				},
				{
					title: 'Excellence',
					description: "Nous visons l'excellence dans chaque projet"
				},
				{
					title: 'Impact',
					description: 'Nous créons des solutions qui ont un impact réel'
				}
			]
		},
		team: {
			title: 'Notre Équipe',
			intro: "Des experts passionnés par l'innovation digitale en Afrique",
			members: [
				{
					name: 'Amadou Diallo',
					position: 'Fondateur & CEO',
					bio: "Visionnaire tech avec 10 ans d'expérience dans le digital africain"
				},
				{
					name: 'Fatima Ndiaye',
					position: 'Directrice Créative',
					bio: 'Experte en design thinking et expérience utilisateur'
				},
				{
					name: 'Kofi Mensah',
					position: 'CTO',
					bio: 'Architecte solutions avec expertise en scalabilité'
				}
			]
		}
	};
</script>

<svelte:head>
	<title>À propos - Labo Jaune | Agence digitale créative en Afrique</title>
	<meta
		name="description"
		content="Découvrez Labo Jaune, agence digitale créative basée en Afrique. Notre mission est de créer des solutions numériques innovantes adaptées au marché africain."
	/>
	<meta
		name="keywords"
		content="à propos, agence digitale africaine, équipe créative, innovation digitale, mission, valeurs, culture d'entreprise"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/about" />
	<meta property="og:title" content="À propos - Labo Jaune | Agence digitale créative en Afrique" />
	<meta
		property="og:description"
		content="Découvrez Labo Jaune, agence digitale créative basée en Afrique. Notre mission est de créer des solutions numériques innovantes."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/about" />
	<meta
		property="twitter:title"
		content="À propos - Labo Jaune | Agence digitale créative en Afrique"
	/>
	<meta
		property="twitter:description"
		content="Découvrez Labo Jaune, agence digitale créative basée en Afrique."
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
				<Typography variant="h1" className="mb-6 font-display uppercase">
					{content.about.title}
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
			<Typography variant="h2" className="mb-8 font-display uppercase">Notre Mission</Typography>
			<Typography variant="body-large" className="text-noir/80">
				{content.about.mission}
			</Typography>
		</div>
	</Container>
</section>

<!-- Values Section -->
<section class="py-24">
	<Container>
		<Typography variant="h2" className="mb-16 font-display uppercase text-center">
			Nos Valeurs
		</Typography>
		<Grid cols={2} gap="lg">
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
			<Typography variant="h2" className="mb-4 font-display uppercase">
				{content.team.title}
			</Typography>
			<Typography variant="body-large" className="text-blanc/80 max-w-2xl mx-auto">
				{content.team.intro}
			</Typography>
		</div>

		<Grid cols={3} gap="lg">
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
			<Typography variant="h2" className="mb-8 font-display uppercase text-center">
				Notre Culture
			</Typography>
			<div class="border-2 border-noir bg-jaune p-12">
				<Typography variant="h3" className="mb-6 font-serif italic">
					"Simple à comprendre, impossible à ignorer"
				</Typography>
				<Typography variant="body-large" className="text-noir/80">
					Chez Labo Jaune, nous croyons que les meilleures solutions digitales sont celles qui
					allient simplicité et impact. Notre approche minimaliste met l'accent sur l'essentiel :
					créer des expériences qui parlent directement à votre audience africaine.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- CTA Section -->
<section class="bg-gris-clair py-24">
	<Container>
		<div class="text-center">
			<Typography variant="h2" className="mb-4 font-display uppercase">
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
