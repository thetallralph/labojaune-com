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
	<span class="{sizes[size]} font-display uppercase tracking-wider" aria-hidden="true">
		<span class="text-noir transition-colors duration-300 group-hover:text-blanc">Labo</span>
		<span
			class="ml-1 bg-noir px-1 text-jaune text-noir transition-all duration-300 group-hover:bg-blanc group-hover:text-noir"
			>Jaune</span
		>
	</span>
</a>
