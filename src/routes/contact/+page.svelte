<script>
	import { fly } from '$lib/utils/transitions';

	const nextSteps = [
		{
			number: '01',
			title: 'Premier contact',
			description: 'Envoyez-nous un message ou réservez un appel pour discuter de votre projet'
		},
		{
			number: '02',
			title: 'Découverte',
			description: "Nous analysons vos besoins et définissons ensemble la meilleure approche"
		},
		{
			number: '03',
			title: 'Proposition',
			description: 'Vous recevez une proposition détaillée sous 48h avec timeline et budget'
		},
		{
			number: '04',
			title: 'Lancement',
			description: 'Une fois validé, nous démarrons votre projet dans la semaine'
		}
	];
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
<section class="bg-blanc pb-16 pt-32">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl text-center">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h1 class="mb-6 font-display text-5xl font-bold md:text-6xl">
					Parlons de votre projet
				</h1>
			</div>
		</div>
	</div>
</section>

<!-- Main Contact Section - White Background -->
<section class="bg-blanc py-12">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<!-- Contact Methods Grid -->
			<div class="mb-24 grid gap-8 md:grid-cols-2">
				<!-- Email Contact -->
				<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
					<a
						href="mailto:hello@labojaune.com"
						class="group block rounded-3xl border-4 border-noir bg-blanc p-12 transition-all duration-300 hover:bg-noir hover:text-blanc"
					>
						<div class="mb-6">
							<svg
								class="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div class="mb-3 text-sm font-medium uppercase tracking-wider opacity-60">
							Envoyez un message
						</div>
						<div class="break-words font-display text-3xl font-bold md:text-4xl">
							hello@labojaune.com
						</div>
					</a>
				</div>

				<!-- Phone Contact -->
				<div in:fly={{ y: 20, duration: 600, delay: 300 }}>
					<a
						href="tel:+2290167232443"
						class="group block rounded-3xl border-4 border-noir bg-blanc p-12 transition-all duration-300 hover:bg-noir hover:text-blanc"
					>
						<div class="mb-6">
							<svg
								class="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div class="mb-3 text-sm font-medium uppercase tracking-wider opacity-60">
							Appelez-nous
						</div>
						<div class="font-display text-3xl font-bold md:text-4xl">+229 01 67 23 24 43</div>
					</a>
				</div>
			</div>

			<!-- CTA Buttons -->
			<div class="mb-24 grid gap-6 md:grid-cols-2">
				<div in:fly={{ y: 20, duration: 600, delay: 400 }}>
					<a
						href="https://calendly.com/labojaune"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center gap-3 rounded-full bg-noir px-8 py-4 text-lg font-semibold text-blanc transition-all duration-300 hover:bg-noir/90"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						Réserver un appel
					</a>
				</div>

				<div in:fly={{ y: 20, duration: 600, delay: 500 }}>
					<a
						href="https://tally.so/r/labojaune"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center gap-3 rounded-full border-2 border-noir bg-blanc px-8 py-4 text-lg font-semibold text-noir transition-all duration-300 hover:bg-noir hover:text-blanc"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						Remplir le brief
					</a>
				</div>
			</div>

			<!-- Next Steps Section -->
			<div in:fly={{ y: 20, duration: 600, delay: 600 }}>
				<h2 class="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
					Comment ça marche ?
				</h2>

				<div class="grid gap-6 md:grid-cols-2">
					{#each nextSteps as step, i}
						<div
							in:fly={{ y: 20, duration: 600, delay: 700 + i * 100 }}
							class="group rounded-2xl border-2 border-noir/10 p-8 transition-all duration-300 hover:border-noir"
						>
							<div class="mb-4 font-mono text-3xl font-bold text-noir">
								{step.number}
							</div>
							<h3 class="mb-3 text-xl font-bold">{step.title}</h3>
							<p class="text-noir/60">{step.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Location & Social -->
			<div class="mt-24 text-center">
				<div in:fly={{ y: 20, duration: 600, delay: 1100 }} class="mb-8">
					<div class="mb-2 text-sm font-medium uppercase tracking-wider text-noir/60">
						Basés à
					</div>
					<div class="font-display text-3xl font-bold">Cotonou, Bénin</div>
				</div>

				<!-- Social Links -->
				<div in:fly={{ y: 20, duration: 600, delay: 1200 }} class="flex justify-center gap-4">
					<a
						href="https://linkedin.com/company/labojaune"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-xl border-2 border-noir p-4 transition-all duration-300 hover:bg-noir hover:text-blanc"
						aria-label="LinkedIn"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a
						href="https://twitter.com/labojaune"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-xl border-2 border-noir p-4 transition-all duration-300 hover:bg-noir hover:text-blanc"
						aria-label="Twitter"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a
						href="https://instagram.com/labojaune"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-xl border-2 border-noir p-4 transition-all duration-300 hover:bg-noir hover:text-blanc"
						aria-label="Instagram"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
