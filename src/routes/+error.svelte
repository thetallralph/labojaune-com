<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import { fade, scale } from 'svelte/transition';

	$: is404 = $page.status === 404;
	$: errorTitle = is404 ? '404' : '500';
	$: errorMessage = is404
		? 'La page que vous recherchez semble avoir disparu dans le laboratoire...'
		: "Une erreur inattendue s'est produite dans notre laboratoire...";
</script>

<svelte:head>
	<title>{errorTitle} - {is404 ? 'Page non trouvée' : 'Erreur serveur'} | Labo Jaune</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black text-white">
	<Container size="sm">
		<div class="space-y-8 text-center">
			<div in:scale={{ duration: 600, delay: 100 }}>
				<Typography variant="display" class="mb-4 text-jaune">
					{errorTitle}
				</Typography>
			</div>

			<div in:fade={{ duration: 400, delay: 300 }}>
				<Typography variant="h2" class="mb-6">
					{is404 ? 'Page non trouvée' : 'Erreur serveur'}
				</Typography>

				<Typography variant="body" class="mx-auto mb-8 max-w-md text-gray-400">
					{errorMessage}
				</Typography>
			</div>

			<div in:fade={{ duration: 400, delay: 500 }} class="space-y-4">
				<Button href="/" variant="primary">Retour à l'accueil</Button>

				{#if is404}
					<div class="pt-4">
						<Typography variant="small" class="text-gray-500">
							Vous pouvez également explorer nos <a
								href="/services"
								class="text-jaune hover:underline">services</a
							>
							ou consulter notre
							<a href="/portfolio" class="text-jaune hover:underline">portfolio</a>.
						</Typography>
					</div>
				{/if}
			</div>

			<!-- Decorative element -->
			<div class="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-jaune/5 blur-3xl"
					in:fade={{ duration: 800, delay: 200 }}
				></div>
			</div>
		</div>
	</Container>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	:global(.animate-float) {
		animation: float 3s ease-in-out infinite;
	}
</style>
