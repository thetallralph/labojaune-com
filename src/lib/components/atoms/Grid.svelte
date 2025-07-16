<script>
	import { cn } from '$lib/utils/helpers';

	/** @type {1 | 2 | 3 | 4 | 6 | 12 | number} */
	export let cols = 12;
	/** @type {'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'} */
	export let gap = 'md';
	/** @type {string} */
	export let className = '';

	const gaps = {
		none: 'gap-0',
		xs: 'gap-1',
		sm: 'gap-2',
		md: 'gap-4 md:gap-8',
		lg: 'gap-6 md:gap-8',
		xl: 'gap-8 md:gap-12'
	};

	/** @type {Record<number, string>} */
	const colClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
		6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
		12: 'grid-cols-12'
	};

	$: classes = cn('grid', colClasses[cols] || `grid-cols-${cols}`, gaps[gap], className);
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
