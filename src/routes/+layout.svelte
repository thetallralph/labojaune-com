<script>
	import '../app.css';
	import Navigation from '$lib/components/organisms/Navigation.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import SchemaMarkup from '$lib/components/molecules/SchemaMarkup.svelte';
	import { page } from '$app/stores';
	import { fade } from '$lib/utils/transitions';

	let { children } = $props();
	let key = $derived($page.url.pathname);
</script>

<SchemaMarkup type="Organization" />
<SchemaMarkup type="WebSite" />

<div class="flex min-h-screen flex-col">
	<!-- Skip to main content link for keyboard navigation -->
	<a
		href="#main-content"
		class="sr-only rounded bg-noir px-4 py-2 text-blanc focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-jaune"
	>
		Aller au contenu principal
	</a>

	<Navigation />

	<main id="main-content" class="flex-1 pt-20" tabindex="-1">
		{#key key}
			<div in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<Footer />
</div>
