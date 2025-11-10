<script>
	import Container from '$lib/components/atoms/Container.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';

	const year = new Date().getFullYear();

	let copiedText = $state('');

	async function copyToClipboard(text, type) {
		try {
			await navigator.clipboard.writeText(text);
			copiedText = type;
			setTimeout(() => {
				copiedText = '';
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	const content = {
		footer: {
			headline: 'Votre croissance digitale commence ici.',
			tagline: 'Du code propre, du design qui claque, et une équipe qui kiffe son job.',
			links: [
				{ label: 'À propos du Labo', href: '/about' },
				{ label: 'Projets', href: '/projects' }
			],
			copyright: '© Le Labo Jaune. Tous droits réservés.'
		},
		contact: {
			info: {
				email: 'hello@labojaune.com',
				phone: '+229 01 67 23 24 43',
				address: 'Cotonou, Bénin',
				hours: 'Lun - Ven : 9h - 18h',
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
	class="bg-[#eee] text-noir relative overflow-hidden"
	role="contentinfo"
	aria-label="Pied de page"
>
	<Container>
		<!-- Main Footer Content -->
		<div class="py-20 lg:py-24">
			<div class="mb-16 lg:mb-20">
				<Logo className="mb-8" variant="dark" size="large" />
				<div class="max-w-2xl">
					<h2 class="mb-6 font-display text-4xl font-bold leading-tight text-noir md:text-5xl lg:text-6xl">
						{content.footer.headline}
					</h2>
					<p class="mb-8 text-xl text-noir/70 md:text-2xl">
						{content.footer.tagline}
					</p>
					<a
						href="/contact"
						class="inline-flex items-center gap-2 rounded-full bg-jaune px-10 py-4 text-lg font-semibold text-noir transition-all hover:bg-jaune/90 hover:scale-105"
					>
						Commencer maintenant
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Footer Bottom Section -->
			<div class="border-t border-noir/10 pt-12">
				<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:items-end">
					<!-- Links -->
					<div>
						<nav class="flex flex-col gap-y-4">
							{#each content.footer.links as link}
								<a
									href={link.href}
									class="text-lg font-semibold text-noir transition-all duration-200 hover:underline hover:decoration-2 hover:underline-offset-4"
								>
									{link.label}
								</a>
							{/each}
						</nav>
					</div>

					<!-- Contact Info -->
					<div class="space-y-4">
						<button
							onclick={() => copyToClipboard(content.contact.info.email, 'email')}
							class="group flex items-center gap-3 text-lg font-semibold text-noir transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
						>
							<svg
								class="h-5 w-5 flex-shrink-0 text-noir/60"
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
							<span>{content.contact.info.email}</span>
							{#if copiedText === 'email'}
								<span class="text-sm font-semibold text-green-600">✓ Copié</span>
							{/if}
						</button>
						<button
							onclick={() => copyToClipboard(content.contact.info.phone, 'phone')}
							class="group flex items-center gap-3 text-lg font-semibold text-noir transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
						>
							<svg
								class="h-5 w-5 flex-shrink-0 text-noir/60"
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
							<span>{content.contact.info.phone}</span>
							{#if copiedText === 'phone'}
								<span class="text-sm font-semibold text-green-600">✓ Copié</span>
							{/if}
						</button>
					</div>

					<!-- Social Links & Copyright -->
					<div class="flex flex-col items-start gap-6 lg:items-end">
						<div class="flex items-center gap-4">
							{#each Object.entries(content.contact.info.social) as [platform, url]}
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									class="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-noir/30 text-noir transition-all duration-300 hover:border-noir hover:bg-noir hover:text-blanc hover:scale-110"
									aria-label="Suivez-nous sur {platform}"
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
						<p class="text-base text-noir/50">
							{content.footer.copyright}
						</p>
					</div>
				</div>
			</div>
		</div>
	</Container>
</footer>

<style>
	footer {
		box-shadow: 0 -20px 20px -15px rgba(0, 0, 0, 0.2);
	}
</style>
