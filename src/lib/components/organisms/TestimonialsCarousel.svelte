<script>
	let { testimonials = [], title = 'Ce que nos clients disent' } = $props();

	let currentIndex = $state(0);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section class="relative overflow-hidden bg-noir py-24 md:py-32">
	<div class="container mx-auto px-6">
		<!-- Testimonials Carousel -->
		<div class="relative mx-auto max-w-5xl">
			<!-- Slides Container -->
			<div class="relative min-h-[450px] md:min-h-[400px]">
				{#each testimonials as testimonial, index}
					{#if currentIndex === index}
						<!-- Testimonial Card with Border -->
						<div class="relative rounded-3xl border-2 border-jaune p-10 md:p-16">
							<!-- Navigation Arrows - Inside box, top right corner -->
							<div class="absolute right-6 top-6 flex items-center gap-2 md:right-10 md:top-10">
								<!-- Previous Button -->
								<button
									onclick={prevSlide}
									class="group flex h-12 w-12 items-center justify-center rounded-full border border-blanc/10 bg-transparent opacity-50 transition-all hover:border-jaune/50 hover:bg-jaune/10 hover:opacity-100"
									aria-label="Témoignage précédent"
								>
									<svg
										class="h-5 w-5 text-blanc transition-colors group-hover:text-jaune"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>

								<!-- Next Button -->
								<button
									onclick={nextSlide}
									class="group flex h-12 w-12 items-center justify-center rounded-full border border-blanc/10 bg-transparent opacity-50 transition-all hover:border-jaune/50 hover:bg-jaune/10 hover:opacity-100"
									aria-label="Témoignage suivant"
								>
									<svg
										class="h-5 w-5 text-blanc transition-colors group-hover:text-jaune"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>

							<!-- Quote -->
							<div class="mb-10 pr-20">
								<p class="font-serif text-3xl font-medium leading-relaxed text-jaune md:text-4xl lg:text-5xl">
									{testimonial.quote}
								</p>
							</div>

							<!-- Author Info -->
							<div class="flex items-center gap-5">
								<!-- Real thumbnail image -->
								<img
									src={testimonial.authorImage}
									alt={testimonial.author}
									class="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-jaune ring-offset-2 ring-offset-noir md:h-20 md:w-20"
								/>
								<div>
									<p class="mb-1 text-lg font-bold text-blanc md:text-xl">
										{testimonial.author}
									</p>
									<p class="text-base text-blanc/60">
										{testimonial.role} · <span class="text-jaune">{testimonial.company}</span>
									</p>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

