<script>
	import Logo from '$lib/components/atoms/Logo.svelte';

	const year = new Date().getFullYear();

	const contact = {
		label: '[contact]',
		email: 'hello@labojaune.com',
		phone: '+229 67 23 24 43'
	};

	const legal = [
		{ label: 'Politique de confidentialité', href: '/privacy' },
		{ label: 'Conditions générales', href: '/terms' }
	];
</script>

<footer class="relative z-20 bg-gris-clair py-16 lg:py-24 shadow-xl">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-y-10">
			<!-- Contact Section -->
			<div class="md:col-span-4 md:col-start-1">
				<span class="mb-5 block text-xs font-semibold uppercase tracking-wider text-noir/60 lg:mb-6">
					{contact.label}
				</span>
				<div class="flex flex-col gap-2.5 lg:gap-0">
					<a
						href="mailto:{contact.email}"
						class="group inline-block text-3xl font-bold text-noir transition-colors hover:text-jaune md:text-4xl lg:text-5xl"
					>
						<div class="transition-transform group-hover:translate-x-1">
							{contact.email}
						</div>
					</a>
					<a
						href="tel:{contact.phone.replace(/\s/g, '')}"
						class="group inline-block text-3xl font-bold text-noir transition-colors hover:text-jaune md:text-4xl lg:text-5xl"
					>
						<div class="transition-transform group-hover:translate-x-1">
							{contact.phone}
						</div>
					</a>
				</div>
			</div>

			<!-- Legal Links -->
			<div
				class="flex flex-col items-start gap-1 text-sm text-noir/60 md:col-span-3 md:col-start-9 md:self-end md:items-end lg:col-span-2 lg:col-start-11"
			>
				{#each legal as link}
					<a href={link.href} class="transition-colors hover:text-noir">
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Logo -->
			<div class="relative flex items-center justify-center py-8 md:col-span-12 md:px-5">
				<div class="w-full max-w-4xl">
					<Logo size="large" className="w-full text-noir" />
				</div>
			</div>

			<!-- Copyright -->
			<div class="text-center text-sm text-noir/60 md:col-span-12">
				<p>© {year} Le Labo Jaune. Tous droits réservés.</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Add any additional custom styles if needed */
</style>
