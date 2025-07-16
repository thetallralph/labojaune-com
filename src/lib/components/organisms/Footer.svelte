<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';

	const year = new Date().getFullYear();

	const content = {
		footer: {
			tagline: "Créateurs d'expériences digitales uniques pour l'Afrique",
			links: [
				{
					title: 'Services',
					items: [
						{ label: 'Stratégie', href: '/services/strategy' },
						{ label: 'Design', href: '/services/design' },
						{ label: 'Développement', href: '/services/development' },
						{ label: 'Marketing', href: '/services/marketing' }
					]
				},
				{
					title: 'À propos',
					items: [
						{ label: 'Notre équipe', href: '/about' },
						{ label: 'Notre mission', href: '/about#mission' },
						{ label: 'Nos valeurs', href: '/about#values' },
						{ label: 'Carrières', href: '/careers' }
					]
				}
			],
			copyright: '© Labo Jaune. Tous droits réservés.'
		},
		contact: {
			info: {
				email: 'hello@labojaune.com',
				phone: '+221 33 123 45 67',
				address: 'Dakar, Sénégal',
				social: {
					linkedin: 'https://linkedin.com/company/labojaune',
					twitter: 'https://twitter.com/labojaune',
					instagram: 'https://instagram.com/labojaune'
				}
			}
		}
	};
</script>

<footer
	class="border-t-2 border-noir bg-gris-clair py-16 text-noir lg:py-24"
	role="contentinfo"
	aria-label="Pied de page"
>
	<Container>
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
			<!-- Brand Column -->
			<div class="lg:col-span-1" role="region" aria-label="À propos de Labo Jaune">
				<Logo className="mb-4" />
				<Typography variant="body" className="text-noir mb-6 font-medium">
					{content.footer.tagline}
				</Typography>

				<!-- Social Links -->
				<div class="flex space-x-4" role="list" aria-label="Réseaux sociaux">
					{#each Object.entries(content.contact.info.social) as [platform, url]}
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							class="-m-2 rounded p-2 text-noir transition-all duration-300 hover:bg-noir hover:text-blanc focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2"
							aria-label="Suivez-nous sur {platform}"
							role="listitem"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								{#if platform === 'linkedin'}
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								{:else if platform === 'twitter'}
									<path
										d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
									/>
								{:else if platform === 'instagram'}
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"
									/>
								{/if}
							</svg>
						</a>
					{/each}
				</div>
			</div>

			<!-- Links Columns -->
			{#each content.footer.links as section}
				<div role="region" aria-labelledby="{section.title.toLowerCase()}-heading">
					<Typography
						variant="h4"
						className="text-noir mb-4 font-display uppercase"
						id="{section.title.toLowerCase()}-heading"
					>
						{section.title}
					</Typography>
					<ul class="space-y-2" role="list">
						{#each section.items as item}
							<li>
								<a
									href={item.href}
									class="-m-2 inline-block rounded p-2 text-noir transition-all duration-300 hover:bg-noir hover:text-blanc focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2"
								>
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<!-- Contact Column -->
			<div role="region" aria-labelledby="contact-heading">
				<Typography
					variant="h4"
					className="text-noir mb-4 font-display uppercase"
					id="contact-heading"
				>
					Contact
				</Typography>
				<ul class="space-y-2 text-noir" role="list">
					<li>
						<a
							href="mailto:{content.contact.info.email}"
							class="-mx-1 inline-block rounded px-1 underline transition-all duration-300 hover:bg-noir hover:text-blanc focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2"
							aria-label="Envoyer un email à {content.contact.info.email}"
						>
							{content.contact.info.email}
						</a>
					</li>
					<li>
						<span aria-label="Numéro de téléphone">{content.contact.info.phone}</span>
					</li>
					<li>
						<address aria-label="Adresse">{content.contact.info.address}</address>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 border-t-2 border-noir pt-8">
			<Typography variant="small" className="text-noir text-center font-medium">
				© {year} Labo Jaune. {content.footer.copyright.split('©')[1]}
			</Typography>
		</div>
	</Container>
</footer>
