<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Grid from '$lib/components/atoms/Grid.svelte';
	import { fly, fadeScale } from '$lib/utils/transitions';

	let formData = {
		name: '',
		email: '',
		company: '',
		projectType: '',
		budget: '',
		message: ''
	};

	let isSubmitting = false;
	let showSuccess = false;

	const projectTypes = [
		'Site web',
		'Application mobile',
		'E-commerce',
		'Stratégie digitale',
		'Autre'
	];

	const budgetRanges = ['< 5M FCFA', '5M - 15M FCFA', '15M - 50M FCFA', '> 50M FCFA'];

	/**
	 * @param {Event} e
	 */
	async function handleSubmit(e) {
		e.preventDefault();
		isSubmitting = true;

		// Simuler l'envoi du formulaire
		await new Promise((resolve) => setTimeout(resolve, 2000));

		isSubmitting = false;
		showSuccess = true;

		// Réinitialiser le formulaire
		formData = {
			name: '',
			email: '',
			company: '',
			projectType: '',
			budget: '',
			message: ''
		};

		// Masquer le message de succès après 5 secondes
		setTimeout(() => {
			showSuccess = false;
		}, 5000);
	}
</script>

<svelte:head>
	<title>Contact - Labo Jaune | Démarrons votre projet digital</title>
	<meta
		name="description"
		content="Contactez Labo Jaune pour discuter de votre projet digital. Stratégie, design, développement web et mobile. Transformons vos idées en solutions innovantes."
	/>
	<meta
		name="keywords"
		content="contact agence digitale, devis projet web, consultation digitale, contact Labo Jaune, projet digital Afrique, demande de devis"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/contact" />
	<meta property="og:title" content="Contact - Labo Jaune | Parlons de votre projet" />
	<meta
		property="og:description"
		content="Prêt à transformer vos idées en solutions digitales innovantes ? Contactez-nous pour démarrer votre projet."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/contact" />
	<meta property="twitter:title" content="Contact - Labo Jaune" />
	<meta
		property="twitter:description"
		content="Démarrons ensemble votre transformation digitale en Afrique."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/contact" />
</svelte:head>

<!-- Hero Section -->
<section class="pb-16 pt-32">
	<Container>
		<div class="max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<Typography variant="h1" className="mb-6 font-display uppercase">
					Parlons de votre projet
				</Typography>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<Typography variant="body-large" className="text-noir/80">
					Prêt à créer quelque chose d'extraordinaire ensemble ? Partagez-nous votre vision et
					découvrons comment nous pouvons la concrétiser.
				</Typography>
			</div>
		</div>
	</Container>
</section>

<!-- Contact Form & Info -->
<section class="py-24">
	<Container>
		<Grid cols={3} gap="xl">
			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<form on:submit={handleSubmit} class="space-y-6">
					<Grid cols={2} gap="md">
						<!-- Name -->
						<div>
							<label for="name" class="mb-2 block">
								<Typography variant="body" className="font-medium">Votre nom *</Typography>
							</label>
							<input
								id="name"
								type="text"
								bind:value={formData.name}
								required
								class="w-full border-2 border-noir bg-blanc px-4 py-3 text-noir placeholder-noir/40
									transition-colors duration-300 focus:border-jaune focus:outline-none rounded-xl"
								placeholder="Jean Dupont"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="mb-2 block">
								<Typography variant="body" className="font-medium">Email *</Typography>
							</label>
							<input
								id="email"
								type="email"
								bind:value={formData.email}
								required
								class="w-full border-2 border-noir bg-blanc px-4 py-3 text-noir placeholder-noir/40
									transition-colors duration-300 focus:border-jaune focus:outline-none rounded-xl"
								placeholder="jean@entreprise.com"
							/>
						</div>
					</Grid>

					<!-- Company -->
					<div>
						<label for="company" class="mb-2 block">
							<Typography variant="body" className="font-medium">Entreprise</Typography>
						</label>
						<input
							id="company"
							type="text"
							bind:value={formData.company}
							class="w-full border-2 border-noir bg-blanc px-4 py-3 text-noir placeholder-noir/40
								transition-colors duration-300 focus:border-jaune focus:outline-none"
							placeholder="Nom de votre entreprise"
						/>
					</div>

					<Grid cols={2} gap="md">
						<!-- Project Type -->
						<div>
							<label for="projectType" class="mb-2 block">
								<Typography variant="body" className="font-medium">Type de projet *</Typography>
							</label>
							<select
								id="projectType"
								bind:value={formData.projectType}
								required
								class="w-full cursor-pointer appearance-none border-2 border-noir bg-blanc px-4
									py-3 text-noir transition-colors duration-300
									focus:border-jaune focus:outline-none rounded-xl"
								style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.5em;"
							>
								<option value="">Sélectionnez un type</option>
								{#each projectTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</div>

						<!-- Budget -->
						<div>
							<label for="budget" class="mb-2 block">
								<Typography variant="body" className="font-medium">Budget estimé</Typography>
							</label>
							<select
								id="budget"
								bind:value={formData.budget}
								class="w-full cursor-pointer appearance-none border-2 border-noir bg-blanc px-4
									py-3 text-noir transition-colors duration-300
									focus:border-jaune focus:outline-none rounded-xl"
								style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.5em;"
							>
								<option value="">Sélectionnez un budget</option>
								{#each budgetRanges as range}
									<option value={range}>{range}</option>
								{/each}
							</select>
						</div>
					</Grid>

					<!-- Message -->
					<div>
						<label for="message" class="mb-2 block">
							<Typography variant="body" className="font-medium">
								Parlez-nous de votre projet *
							</Typography>
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class="w-full resize-y border-2 border-noir bg-blanc px-4 py-3 text-noir
								placeholder-noir/40 transition-colors duration-300 focus:border-jaune focus:outline-none rounded-xl"
							placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
						></textarea>
					</div>

					<!-- Submit Button -->
					<div class="flex items-center gap-4">
						<Button
							type="submit"
							size="large"
							disabled={isSubmitting}
							className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
						>
							{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
						</Button>

						{#if showSuccess}
							<div in:fadeScale={{ duration: 300 }} class="text-green-600">
								<Typography variant="body" className="font-medium">
									✓ Message envoyé avec succès !
								</Typography>
							</div>
						{/if}
					</div>
				</form>
			</div>

			<!-- Contact Info -->
			<div class="space-y-8 lg:col-span-1">
				<!-- Direct Contact -->
				<div in:fly={{ x: 20, duration: 600, delay: 300 }}>
					<Typography variant="h3" className="mb-6 font-bold">Contact Direct</Typography>
					<div class="space-y-4">
						<div>
							<Typography variant="body-small" className="text-noir/60 mb-1">Email</Typography>
							<a
								href="mailto:hello@labojaune.com"
								class="-mx-1 px-1 text-noir underline transition-all duration-300 hover:bg-noir hover:text-blanc"
							>
								hello@labojaune.com
							</a>
						</div>
						<div>
							<Typography variant="body-small" className="text-noir/60 mb-1">Téléphone</Typography>
							<Typography variant="body">+221 33 123 45 67</Typography>
						</div>
						<div>
							<Typography variant="body-small" className="text-noir/60 mb-1">Adresse</Typography>
							<Typography variant="body">Dakar, Sénégal</Typography>
						</div>
					</div>
				</div>

				<!-- Office Hours -->
				<div in:fly={{ x: 20, duration: 600, delay: 400 }}>
					<Typography variant="h3" className="mb-6 font-bold">Heures d'ouverture</Typography>
					<div class="space-y-2">
						<div class="flex justify-between">
							<Typography variant="body">Lundi - Vendredi</Typography>
							<Typography variant="body" className="font-medium">9h - 18h</Typography>
						</div>
						<div class="flex justify-between">
							<Typography variant="body">Samedi</Typography>
							<Typography variant="body" className="font-medium">9h - 13h</Typography>
						</div>
						<div class="flex justify-between">
							<Typography variant="body">Dimanche</Typography>
							<Typography variant="body" className="font-medium">Fermé</Typography>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div in:fly={{ x: 20, duration: 600, delay: 500 }}>
					<Typography variant="h3" className="mb-6 font-bold">Suivez-nous</Typography>
					<div class="flex gap-4">
						<a
							href="https://linkedin.com/company/labojaune"
							target="_blank"
							rel="noopener noreferrer"
							class="border-2 border-noir p-3 transition-all duration-300 hover:bg-noir hover:text-blanc rounded-xl"
							aria-label="LinkedIn"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
						</a>
						<a
							href="https://twitter.com/labojaune"
							target="_blank"
							rel="noopener noreferrer"
							class="border-2 border-noir p-3 transition-all duration-300 hover:bg-noir hover:text-blanc rounded-xl"
							aria-label="Twitter"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
								/>
							</svg>
						</a>
						<a
							href="https://instagram.com/labojaune"
							target="_blank"
							rel="noopener noreferrer"
							class="border-2 border-noir p-3 transition-all duration-300 hover:bg-noir hover:text-blanc rounded-xl"
							aria-label="Instagram"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</Grid>
	</Container>
</section>

<!-- Map Section -->
<section class="bg-gris-clair py-24">
	<Container>
		<div class="flex h-96 items-center justify-center bg-noir rounded-2xl">
			<Typography variant="h3" className="text-blanc/20 font-display">Carte Interactive</Typography>
		</div>
	</Container>
</section>
