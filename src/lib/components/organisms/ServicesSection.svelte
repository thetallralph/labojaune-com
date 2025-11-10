<script>
	import { onMount } from 'svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';

	// Services data
	const services = [
		{
			id: 'strategie',
			title: 'Stratégie Digitale',
			description: 'Nous développons des stratégies digitales sur mesure qui alignent vos objectifs business avec les attentes de votre audience africaine. De l\'analyse de marché à la planification de la transformation digitale.',
			icon: 'strategy'
		},
		{
			id: 'design',
			title: 'Design & Expérience',
			description: 'Nous créons des expériences utilisateur qui résonnent avec la culture africaine. Design d\'interface, identité visuelle, et prototypage pour des produits digitaux modernes et accessibles.',
			icon: 'design'
		},
		{
			id: 'developpement',
			title: 'Développement Web',
			description: 'Nous construisons des applications web performantes et évolutives. Sites vitrines, e-commerce, plateformes sur mesure avec les dernières technologies web pour garantir rapidité et fiabilité.',
			icon: 'development'
		},
		{
			id: 'marketing',
			title: 'Marketing Digital',
			description: 'Nous amplifions votre présence en ligne avec des campagnes ciblées. SEO, content marketing, social media, et analytics pour maximiser votre impact sur le marché africain.',
			icon: 'marketing'
		}
	];

	let activeServiceIndex = $state(0);
	let containerRef = $state(null);
	let isScrolling = $state(false);

	// Handle service click
	function selectService(index) {
		activeServiceIndex = index;
	}

	// Handle scroll-based service switching
	function handleScroll() {
		if (!containerRef || isScrolling) return;

		const rect = containerRef.getBoundingClientRect();
		const viewportHeight = window.innerHeight;
		const elementHeight = rect.height;

		// Check if element is in viewport
		if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
			const scrollProgress = Math.abs(rect.top) / (elementHeight - viewportHeight);
			const newIndex = Math.min(
				Math.floor(scrollProgress * services.length),
				services.length - 1
			);

			if (newIndex !== activeServiceIndex && newIndex >= 0) {
				activeServiceIndex = newIndex;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section
	class="services-section"
	bind:this={containerRef}
>
	<Container>
		<div class="services-grid">
			<!-- Left: Services List -->
			<div class="services-list">
				{#each services as service, index}
					<button
						class="service-item"
						class:active={activeServiceIndex === index}
						onclick={() => selectService(index)}
						type="button"
					>
						<div class="service-header">
							<Typography variant="h3" className="service-title">
								{service.title}
							</Typography>
						</div>

						<div class="service-content" class:expanded={activeServiceIndex === index}>
							<Typography variant="body" className="service-description">
								{service.description}
							</Typography>

							{#if activeServiceIndex === index}
								<div class="service-link">
									<span>En savoir plus</span>
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
										<path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							{/if}
						</div>
					</button>
				{/each}
			</div>

			<!-- Right: Service Illustration -->
			<div class="service-illustration">
				<div class="illustration-container">
					{#if services[activeServiceIndex].icon === 'strategy'}
						<svg viewBox="0 0 400 400" fill="none" class="icon">
							<circle cx="200" cy="200" r="150" stroke="#FFD700" stroke-width="4" fill="none"/>
							<path d="M200 80 L200 200 L280 280" stroke="#FFD700" stroke-width="6" stroke-linecap="round"/>
							<circle cx="200" cy="200" r="12" fill="#FFD700"/>
							<circle cx="200" cy="80" r="8" fill="#FFD700"/>
							<circle cx="280" cy="280" r="8" fill="#FFD700"/>
						</svg>
					{:else if services[activeServiceIndex].icon === 'design'}
						<svg viewBox="0 0 400 400" fill="none" class="icon">
							<rect x="100" y="100" width="200" height="200" stroke="#FFD700" stroke-width="4" fill="none"/>
							<circle cx="200" cy="200" r="80" stroke="#FFD700" stroke-width="4" fill="none"/>
							<path d="M150 150 L250 250 M250 150 L150 250" stroke="#FFD700" stroke-width="3" stroke-linecap="round"/>
						</svg>
					{:else if services[activeServiceIndex].icon === 'development'}
						<svg viewBox="0 0 400 400" fill="none" class="icon">
							<rect x="80" y="120" width="240" height="180" rx="8" stroke="#FFD700" stroke-width="4" fill="none"/>
							<path d="M140 180 L180 220 L140 260" stroke="#FFD700" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
							<line x1="220" y1="180" x2="260" y2="260" stroke="#FFD700" stroke-width="6" stroke-linecap="round"/>
						</svg>
					{:else}
						<svg viewBox="0 0 400 400" fill="none" class="icon">
							<circle cx="200" cy="200" r="120" stroke="#FFD700" stroke-width="4" fill="none"/>
							<path d="M200 80 L220 160 L300 180 L220 200 L200 280 L180 200 L100 180 L180 160 Z" stroke="#FFD700" stroke-width="4" fill="none" stroke-linejoin="round"/>
						</svg>
					{/if}
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	.services-section {
		min-height: 200vh;
		padding: 8rem 0;
		background-color: var(--color-black);
		position: relative;
	}

	.services-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		position: sticky;
		top: 8rem;
	}

	.services-list {
		display: flex;
		flex-direction: column;
	}

	.service-item {
		background: none;
		border: none;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 2rem 0;
		text-align: left;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.service-item:last-child {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.service-item:hover {
		background-color: rgba(255, 255, 255, 0.02);
	}

	.service-item.active {
		background-color: rgba(255, 255, 255, 0.03);
	}

	.service-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.service-item.active .service-header {
		margin-bottom: 1.5rem;
	}

	:global(.service-title) {
		color: var(--color-white);
		transition: color 0.3s ease;
	}

	.service-item:not(.active) :global(.service-title) {
		opacity: 0.6;
	}

	.service-item:hover :global(.service-title) {
		opacity: 1;
	}

	.service-content {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: all 0.4s ease;
	}

	.service-content.expanded {
		max-height: 500px;
		opacity: 1;
	}

	:global(.service-description) {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.service-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-yellow);
		font-size: 0.9rem;
		font-weight: 500;
		margin-top: 1rem;
		transition: gap 0.3s ease;
	}

	.service-link:hover {
		gap: 0.75rem;
	}

	.service-illustration {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
	}

	.illustration-container {
		width: 100%;
		max-width: 400px;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		width: 100%;
		height: 100%;
		animation: fadeIn 0.5s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.services-section {
			min-height: auto;
			padding: 4rem 0;
		}

		.services-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
			position: static;
		}

		.service-illustration {
			min-height: 300px;
			order: -1;
		}

		.illustration-container {
			max-width: 300px;
		}

		.service-item {
			padding: 1.5rem 0;
		}
	}
</style>
