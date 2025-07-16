<script>
	import { cn } from '$lib/utils/helpers';

	/** @type {string} */
	export let as = 'p';
	/** @type {'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body' | 'caption' | 'small'} */
	export let variant = 'body';
	/** @type {string} */
	export let className = '';
	/** @type {boolean} */
	export let animate = false;

	const variants = {
		display: 'text-display-mobile lg:text-display font-display leading-tight',
		h1: 'text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight',
		h2: 'text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight',
		h3: 'text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug',
		h4: 'text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug',
		'body-large': 'text-lg lg:text-xl leading-relaxed',
		body: 'text-base lg:text-lg leading-relaxed',
		caption: 'text-sm leading-normal',
		small: 'text-xs leading-tight'
	};

	$: classes = cn(variants[variant] || variants.body, animate && 'animate-fade-in', className);
</script>

<svelte:element this={as} class={classes} {...$$restProps}>
	<slot />
</svelte:element>
