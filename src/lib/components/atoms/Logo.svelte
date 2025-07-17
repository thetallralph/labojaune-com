<script>
	export let size = 'default';
	export let className = '';

	const sizes = {
		small: 'text-xl',
		default: 'text-2xl',
		large: 'text-3xl'
	};
</script>

<a
	href="/"
	class="group -mx-2 -my-1 inline-flex items-center rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2 {className}"
	aria-label="Labo Jaune - Retour à l'accueil"
>
	<span class="{sizes[size]} font-display uppercase tracking-wider text-noir" aria-hidden="true">
		Labo Jaune
	</span>
</a>
