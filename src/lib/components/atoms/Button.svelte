<script>
	import { cn } from '$lib/utils/helpers';

	/** @type {'primary' | 'secondary' | 'ghost'} */
	export let variant = 'primary';
	/** @type {'small' | 'medium' | 'large'} */
	export let size = 'medium';
	/** @type {string | undefined} */
	export let href = undefined;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let fullWidth = false;
	/** @type {string} */
	export let className = '';
	/** @type {string | undefined} */
	export let ariaLabel = undefined;
	/** @type {boolean | undefined} */
	export let ariaPressed = undefined;
	/** @type {boolean | undefined} */
	export let ariaExpanded = undefined;
	/** @type {'button' | 'submit' | 'reset'} */
	export let type = 'button';

	const baseClasses =
		'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2 rounded';

	const variants = {
		primary: 'bg-noir text-blanc hover:bg-blanc hover:text-noir border-2 border-noir',
		secondary: 'bg-transparent text-noir border-2 border-noir hover:bg-noir hover:text-blanc',
		ghost: 'bg-transparent text-noir hover:text-blanc underline underline-offset-4'
	};

	const sizes = {
		small: 'h-8 px-4 text-xs',
		medium: 'h-10 px-5 text-sm',
		large: 'h-12 px-6 text-base'
	};

	$: classes = cn(
		baseClasses,
		variants[variant],
		sizes[size],
		fullWidth && 'w-full',
		disabled && 'opacity-50 cursor-not-allowed',
		className
	);

	$: tag = href ? 'a' : 'button';
</script>

<svelte:element
	this={tag}
	{href}
	{disabled}
	class={classes}
	type={tag === 'button' ? type : undefined}
	aria-label={ariaLabel}
	aria-pressed={ariaPressed}
	aria-expanded={ariaExpanded}
	aria-disabled={disabled ? 'true' : undefined}
	tabindex={disabled ? -1 : undefined}
	{...$$restProps}
	on:click
	on:keydown
	on:keyup
	on:focus
	on:blur
>
	<slot />
</svelte:element>
