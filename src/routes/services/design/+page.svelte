<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	const service = {
		id: 'design',
		title: 'Design & Expérience Utilisateur',
		description:
			'Nous créons des interfaces intuitives et esthétiques qui captivent vos utilisateurs tout en respectant les spécificités culturelles.',
		features: ['UX/UI Design', 'Design System', 'Prototypage interactif', 'Tests utilisateurs']
	};

	const relatedServices = [
		{
			id: 'strategy',
			title: 'Stratégie Digitale',
			description: 'Nous élaborons des stratégies digitales sur mesure pour votre business.'
		},
		{
			id: 'development',
			title: 'Développement Web & Mobile',
			description: 'Nous développons des solutions techniques robustes et performantes.'
		},
		{
			id: 'marketing',
			title: 'Marketing Digital',
			description: 'Nous déployons des campagnes marketing créatives qui touchent votre audience.'
		}
	];
</script>

<svelte:head>
	<title>Design & UX - Labo Jaune | Interfaces intuitives pour l'Afrique</title>
	<meta
		name="description"
		content="Service de design UX/UI adapté au marché africain. Création d'interfaces intuitives, design systems, prototypage et tests utilisateurs. Design qui captive et convertit."
	/>
	<meta
		name="keywords"
		content="design UX UI Afrique, expérience utilisateur, interface design, design system, prototypage, tests utilisateurs, design thinking"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/services/design" />
	<meta
		property="og:title"
		content="Design & UX - Labo Jaune | Créons des expériences mémorables"
	/>
	<meta
		property="og:description"
		content="Design UX/UI adapté au marché africain. Interfaces intuitives qui captivent tout en respectant les spécificités culturelles."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/services/design" />
	<meta property="twitter:title" content="Design & Expérience Utilisateur - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Interfaces intuitives et esthétiques adaptées aux spécificités culturelles africaines."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/services/design" />
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
				<Typography variant="h3" className="mb-4 font-bold">1. Recherche utilisateur</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous commençons par comprendre vos utilisateurs, leurs besoins et leurs attentes
					spécifiques au marché africain.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">2. Conception créative</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous créons des designs uniques qui allient esthétique moderne et sensibilité culturelle
					locale.
				</Typography>
			</div>

			<div class="border-2 border-noir bg-blanc p-8">
				<Typography variant="h3" className="mb-4 font-bold">3. Prototypage et tests</Typography>
				<Typography variant="body" className="text-noir/80">
					Nous validons nos concepts avec des prototypes interactifs et des tests utilisateurs pour
					garantir l'efficacité.
				</Typography>
			</div>
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
				Prêt à créer quelque chose d'unique ?
			</Typography>
			<Typography variant="body-large" className="mb-8 text-noir/80 max-w-2xl mx-auto">
				Transformons vos idées en designs captivants qui résonnent avec votre audience.
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
