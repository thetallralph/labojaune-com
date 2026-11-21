<script>
	/**
	 * Carte d'article, utilisée sur /blog, la home et les articles liés.
	 * @type {{ post: any, featured?: boolean }}
	 */
	let { post, featured = false } = $props();
</script>

<a
	href={post.url}
	class="group block {featured ? 'md:grid md:grid-cols-2 md:items-center md:gap-12' : ''}"
>
	<!-- Visuel -->
	<div
		class="relative mb-6 overflow-hidden rounded-2xl bg-gris-clair {featured
			? 'aspect-[4/3] md:mb-0'
			: 'aspect-[16/10]'}"
	>
		{#if post.cover}
			<img
				src={post.cover}
				alt={post.coverAlt || post.title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<!-- Repli sans image : bloc jaune typographique -->
			<div
				class="flex h-full w-full items-end bg-jaune p-6 transition-transform duration-700 group-hover:scale-105 md:p-8"
			>
				<span
					class="font-display leading-[0.95] text-noir/80 {featured
						? 'text-4xl md:text-6xl'
						: 'text-3xl md:text-4xl'}"
				>
					{post.category}
				</span>
			</div>
		{/if}

		{#if post.published === false}
			<span
				class="absolute left-4 top-4 rounded-full bg-noir px-3 py-1 text-xs font-medium uppercase tracking-wide text-blanc"
			>
				Brouillon
			</span>
		{/if}
	</div>

	<!-- Texte -->
	<div>
		<div class="mb-3 flex flex-wrap items-center gap-2 text-sm text-noir/60">
			<span>{post.category}</span>
			<span aria-hidden="true">·</span>
			<time datetime={post.date}>{post.dateLabel}</time>
			<span aria-hidden="true">·</span>
			<span>{post.readingTime} min de lecture</span>
		</div>

		<h3
			class="mb-3 font-display font-bold leading-tight text-noir transition-colors group-hover:text-noir/60 {featured
				? 'text-3xl md:text-5xl'
				: 'text-2xl md:text-3xl'}"
		>
			{post.title}
		</h3>

		{#if post.description}
			<p class="mb-5 text-noir/70 {featured ? 'text-lg md:text-xl' : 'text-base'}">
				{post.description}
			</p>
		{/if}

		<span
			class="inline-flex items-center gap-2 text-sm font-medium text-noir underline decoration-2 underline-offset-4 transition-colors group-hover:text-jaune"
		>
			Lire l'article
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="none"
				viewBox="0 0 16 16"
				class="transition-transform duration-300 group-hover:translate-x-1"
				aria-hidden="true"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
				/>
			</svg>
		</span>
	</div>
</a>
