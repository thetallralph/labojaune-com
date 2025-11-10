<script>
	import { onMount } from 'svelte';

	let { steps = [], title = 'Comment ça marche' } = $props();

	let stepElements = [];
	let progressLine = $state(null);
	let activeStep = $state(0);
	let hoveredStep = $state(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = stepElements.indexOf(entry.target);
					if (entry.isIntersecting && index !== -1) {
						activeStep = Math.max(activeStep, index);
					}
				});
			},
			{
				threshold: 0.5,
				rootMargin: '-20% 0px -20% 0px'
			}
		);

		stepElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});

	function getStepOpacity(index) {
		return index <= activeStep ? 1 : 0;
	}

	function getStepTransform(index) {
		if (index <= activeStep) {
			return 'translate3d(0, 0, 0)';
		}
		return 'translate3d(0, -3rem, 0)';
	}

	function getStepFilter(index) {
		return index <= activeStep ? 'blur(0)' : 'blur(5px)';
	}

	function getStepScale(index) {
		return index <= activeStep ? 'scale(1)' : 'scale(0)';
	}

	function getStepBlur(index) {
		if (hoveredStep === null) return 'blur(0)';
		return hoveredStep === index ? 'blur(0)' : 'blur(3px)';
	}

	function getStepHoverOpacity(index) {
		if (hoveredStep === null) return 1;
		return hoveredStep === index ? 1 : 0.4;
	}
</script>

<section class="relative bg-white py-24">
	<!-- Title - Full Width -->
	<div class="sticky top-24 z-10 mb-16 bg-white pb-8">
		<div class="container mx-auto px-6">
			<h2 class="font-display text-4xl font-bold leading-tight md:text-5xl">
				{title}
			</h2>
		</div>
	</div>

	<div class="container mx-auto px-6">
		<div class="relative mx-auto max-w-7xl">
			<!-- Progress Line -->
			<div
				bind:this={progressLine}
				class="absolute left-10 top-0 hidden h-full w-0.5 bg-noir/20 md:block"
			>
				<div
					class="w-full bg-noir transition-all duration-500 ease-out"
					style="height: {((activeStep + 1) / steps.length) * 100}%"
				></div>
			</div>

			<!-- Steps -->
			<div class="space-y-24">
				{#each steps as step, index}
					<div
						bind:this={stepElements[index]}
						class="relative flex flex-col gap-8 md:flex-row md:gap-12"
						onmouseenter={() => (hoveredStep = index)}
						onmouseleave={() => (hoveredStep = null)}
						style="transition: opacity 0.3s ease, transform 0.6s ease, filter 0.3s ease; opacity: {getStepOpacity(
							index
						) * getStepHoverOpacity(index)}; transform: {getStepTransform(index)}; filter: {hoveredStep === null ? getStepFilter(index) : getStepBlur(index)}"
					>
						<!-- Step Number (Mobile & Desktop) -->
						<div class="flex items-start gap-6 md:w-32 md:flex-col md:gap-4">
							<div
								class="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-noir bg-jaune font-mono text-2xl font-bold transition-all duration-500"
								style="transition: transform 0.6s ease; transform: {getStepScale(index)}"
							>
								{index + 1}
							</div>
						</div>

						<!-- Step Content -->
						<div class="flex-1 max-w-3xl">
							<!-- Icon -->
							{#if step.icon}
								<div class="group mb-6 inline-flex cursor-default">
									<svg class="h-16 w-16 text-noir/40 transition-colors duration-300 group-hover:text-noir md:h-20 md:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
										{#if step.icon === 'search'}
											<circle cx="11" cy="11" r="8"></circle>
											<path d="m21 21-4.35-4.35"></path>
										{:else if step.icon === 'compass'}
											<circle cx="12" cy="12" r="10"></circle>
											<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
										{:else if step.icon === 'zap'}
											<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
										{:else if step.icon === 'rocket'}
											<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
											<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
											<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
											<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
										{/if}
									</svg>
								</div>
							{/if}

							<!-- Text Content -->
							<div>
								<h3 class="mb-4 font-display text-2xl font-bold md:text-3xl">
									{step.title}
								</h3>
								<p class="text-lg text-noir/60 md:text-xl">
									{step.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Smooth scrolling for better animation */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
