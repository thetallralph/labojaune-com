<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showModal = $state(false);
	let selectedQuestion = $state(null);
	let scrollContainer = $state(null);
	let isPaused = $state(false);

	const faqs = [
		{
			id: 1,
			question: 'Combien de temps prend un projet typique ?',
			answer: 'La durée d\'un projet varie selon sa complexité. Un site vitrine peut prendre 4-6 semaines, tandis qu\'une application web complexe peut nécessiter 3-6 mois. Nous établissons un calendrier détaillé lors de la phase de découverte.'
		},
		{
			id: 2,
			question: 'Quels sont vos tarifs ?',
			answer: 'Nos tarifs sont établis sur mesure en fonction de vos besoins spécifiques. Nous proposons des forfaits flexibles adaptés à votre budget. Contactez-nous pour un devis personnalisé et transparent.'
		},
		{
			id: 3,
			question: 'Travaillez-vous avec des startups ?',
			answer: 'Absolument ! Nous adorons travailler avec des startups et nous comprenons les défis uniques qu\'elles rencontrent. Nous proposons des solutions évolutives et des modèles de tarification flexibles adaptés aux budgets des startups.'
		},
		{
			id: 4,
			question: 'Proposez-vous un support après lancement ?',
			answer: 'Oui, nous offrons différents niveaux de support post-lancement : maintenance technique, mises à jour de contenu, optimisations continues et formation de votre équipe. Le support est adapté à vos besoins.'
		},
		{
			id: 5,
			question: 'Pouvez-vous reprendre un projet existant ?',
			answer: 'Certainement ! Nous pouvons auditer, améliorer ou refondre complètement votre projet existant. Nous commençons toujours par un audit approfondi pour comprendre l\'état actuel et proposer les meilleures solutions.'
		},
		{
			id: 6,
			question: 'Travaillez-vous à distance ou sur site ?',
			answer: 'Nous sommes flexibles et pouvons travailler des deux façons. Notre équipe est basée à Cotonou, mais nous collaborons efficacement à distance grâce à nos outils de communication modernes. Nous pouvons également nous déplacer si nécessaire.'
		}
	];

	// Duplicate FAQs for infinite scroll effect
	const duplicatedFaqs = [...faqs, ...faqs];

	// Generate random subtle rotations for each card
	const cardRotations = faqs.map(() => (Math.random() - 0.5) * 3); // -1.5 to 1.5 degrees

	onMount(() => {
		let animationId;
		let scrollPosition = 0;
		const scrollSpeed = 0.8; // pixels per frame

		function animate() {
			if (!isPaused && scrollContainer) {
				scrollPosition += scrollSpeed;

				// Calculate the width of one set of FAQs
				const singleSetWidth = scrollContainer.scrollWidth / 2;

				// Reset position seamlessly when we've scrolled through one full set
				if (scrollPosition >= singleSetWidth) {
					scrollPosition = scrollPosition - singleSetWidth;
				}

				scrollContainer.scrollLeft = scrollPosition;
			}
			animationId = requestAnimationFrame(animate);
		}

		// Start animation
		animate();

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});

	function openModal(faq) {
		selectedQuestion = faq;
		showModal = true;
		// Prevent body scroll when modal is open
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		showModal = false;
		selectedQuestion = null;
		// Restore body scroll
		document.body.style.overflow = '';
	}

	// Close modal on escape key
	function handleKeydown(event) {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="relative bg-white overflow-x-hidden -mb-18">
	<!-- Horizontal Scrolling FAQ -->
	<div class="">
		<!-- Gradient overlays -->
		<div
			class="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-transparent to-transparent"
		></div>
		<div
			class="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-transparent to-transparent"
		></div>

		<!-- Scrollable container with auto-scroll -->
		<div
			bind:this={scrollContainer}
			class="scrollbar-hide"
			onmouseenter={() => isPaused = true}
			onmouseleave={() => isPaused = false}
		>
			<div class="flex gap-4 lg:gap-6 px-6 py-8">
				{#each duplicatedFaqs as faq, i}
					{@const rotation = cardRotations[i % faqs.length]}
					<button
						onclick={() => openModal(faq)}
						class="faq-card group relative flex min-w-[280px] max-w-[320px] flex-shrink-0 flex-col justify-between rounded-2xl border border-noir/10 bg-blanc p-5 text-left shadow-card lg:min-w-[320px] lg:max-w-[360px] lg:p-6"
						style="--rotation: {rotation}deg; transform: rotate({rotation}deg);"
						type="button"
					>
						<p class="mb-4 text-lg font-bold leading-snug text-noir lg:text-xl">
							{faq.question}
						</p>
						<div class="flex items-center justify-end">
							<svg
								class="h-5 w-5 flex-shrink-0 text-noir transition-transform duration-300 group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Modal -->
{#if showModal && selectedQuestion}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		transition:fade={{ duration: 200 }}
		onclick={closeModal}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<!-- Backdrop -->
		<div class="absolute inset-0 bg-noir/80 backdrop-blur-sm"></div>

		<!-- Modal Content -->
		<div
			class="relative z-10 w-full max-w-2xl"
			transition:fly={{ y: 20, duration: 300 }}
			onclick={(e) => e.stopPropagation()}
		>
			<div class="rounded-3xl border-2 border-noir bg-blanc p-8 shadow-2xl lg:p-12">
				<!-- Close button -->
				<button
					onclick={closeModal}
					class="absolute right-4 top-4 rounded-full p-2 text-noir transition-colors hover:bg-gris-clair lg:right-8 lg:top-8"
					aria-label="Fermer"
					type="button"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<!-- Question -->
				<div class="mb-6">
					<h3 id="modal-title" class="text-2xl font-bold text-noir lg:text-3xl">
						{selectedQuestion.question}
					</h3>
				</div>

				<!-- Answer -->
				<div class="text-lg leading-relaxed text-noir/80">
					<p>{selectedQuestion.answer}</p>
				</div>

				<!-- CTA -->
				<div class="mt-8 pt-8 border-t border-noir/10">
					<p class="mb-4 text-sm text-noir/60">Vous avez d'autres questions ?</p>
					<a
						href="/contact"
						class="inline-block rounded-full bg-noir px-6 py-3 text-blanc transition-all hover:bg-noir/90"
					>
						Contactez-nous
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-x: auto;
		overflow-y: hidden;
	}

	/* Card organic feel with rotation preserved on hover */
	.faq-card {
		transition:
			transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
			border-color 0.3s ease;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.06),
			0 12px 32px rgba(0, 0, 0, 0.1);
		will-change: transform, box-shadow;
	}

	/* On hover, straighten and lift the card */
	.faq-card:hover {
		box-shadow:
			0 12px 32px rgba(0, 0, 0, 0.12),
			0 32px 64px rgba(0, 0, 0, 0.18);
		border-color: rgba(0, 0, 0, 0.15);
		/* Remove rotation and lift on hover */
		transform: rotate(0deg) translateY(-16px) !important;
	}

	.faq-card:active {
		box-shadow:
			0 16px 40px rgba(0, 0, 0, 0.16),
			0 40px 80px rgba(0, 0, 0, 0.22);
		transform: rotate(0deg) translateY(-20px) scale(0.98) !important;
	}
</style>
