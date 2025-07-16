<script>
	import { cn } from '$lib/utils/helpers';

	/** @type {'default' | 'wide' | 'narrow' | 'full'} */
	export let size = 'default';
	/** @type {string} */
	export let className = '';

	const sizes = {
		default: 'max-w-[1200px]',
		wide: 'max-w-[1440px]',
		narrow: 'max-w-[800px]',
		full: 'max-w-full'
	};

	$: classes = cn('mx-auto px-6 md:px-8 lg:px-20', sizes[size], className);
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
