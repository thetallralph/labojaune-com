<script>
	import { page } from '$app/stores';

	export let title = '';
	export let description = '';
	export let image = '';
	export let url = '';
	export let type = 'website';
	export let twitterCard = 'summary_large_image';
	export let noindex = false;
	export let nofollow = false;

	$: fullTitle = title ? `${title} | Labo Jaune` : 'Labo Jaune - Agence Digitale Créative';
	$: fullDescription =
		description ||
		'Labo Jaune est une agence digitale spécialisée dans la stratégie, le design, le développement et le marketing digital pour transformer votre présence en ligne.';
	$: fullUrl = url || $page.url.href;
	$: fullImage = image || 'https://labojaune.com/og-image.jpg';

	$: robots = [noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow'].join(', ');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={fullDescription} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={fullUrl} />

	<!-- Open Graph -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={fullDescription} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={fullImage} />
	<meta property="og:site_name" content="Labo Jaune" />
	<meta property="og:locale" content="fr_FR" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={fullDescription} />
	<meta name="twitter:image" content={fullImage} />

	<!-- Additional SEO -->
	<meta name="author" content="Labo Jaune" />
	<meta name="generator" content="SvelteKit" />

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="alternate icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />

	<!-- Theme Color -->
	<meta name="theme-color" content="#FFD700" />
</svelte:head>
