<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let src = '';
	export let alt = ''; // Always provide meaningful alt text for accessibility
	export let width = undefined;
	export let height = undefined;
	export let loading = 'lazy';
	export let className = '';
	export let sizes = undefined;
	export let srcset = undefined;
	export let placeholder = '/placeholder.jpg';
	export let decorative = false; // Set to true for decorative images

	let imageElement;
	let loaded = false;
	let error = false;

	onMount(() => {
		if (loading === 'eager' || !('loading' in HTMLImageElement.prototype)) {
			loadImage();
		}
	});

	function loadImage() {
		if (!imageElement || loaded) return;

		const img = new Image();
		img.src = src;

		img.onload = () => {
			loaded = true;
			error = false;
		};

		img.onerror = () => {
			error = true;
			loaded = true;
		};
	}

	function handleIntersection(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				loadImage();
			}
		});
	}

	$: if (imageElement && loading === 'lazy' && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver(handleIntersection, {
			rootMargin: '50px'
		});
		observer.observe(imageElement);
	}
</script>

<div class="image-wrapper {className}" class:loaded>
	{#if !loaded}
		<div class="placeholder" style="background-image: url({placeholder});" />
	{/if}

	<img
		bind:this={imageElement}
		src={loaded || loading === 'eager' ? src : placeholder}
		alt={decorative ? '' : alt}
		{width}
		{height}
		{loading}
		{sizes}
		{srcset}
		class="image"
		class:loaded
		role={decorative ? 'presentation' : undefined}
		aria-hidden={decorative ? 'true' : undefined}
		on:load={() => (loaded = true)}
		on:error={() => (error = true)}
		in:fade={{ duration: 300 }}
	/>

	{#if error}
		<div class="error-state">
			<svg
				class="h-12 w-12 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			<p class="mt-2 text-sm text-gray-500">Image non disponible</p>
		</div>
	{/if}
</div>

<style>
	.image-wrapper {
		position: relative;
		overflow: hidden;
		background-color: #f3f4f6;
	}

	.placeholder {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(10px);
		transform: scale(1.1);
	}

	.image {
		display: block;
		width: 100%;
		height: auto;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.image.loaded {
		opacity: 1;
	}

	.error-state {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f9fafb;
	}

	.image-wrapper.loaded .placeholder {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
</style>
