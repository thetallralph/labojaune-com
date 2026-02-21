<script>
	import { page } from '$app/stores';
	import { isMenuOpen, toggleMenu, closeMenu } from '$lib/stores/navigation';
	import Container from '$lib/components/atoms/Container.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import { fly, fade } from '$lib/utils/transitions';
	import { cn } from '$lib/utils/helpers';
	import { onMount } from 'svelte';

	const navItems = [
		{ label: 'À propos', href: '/about' },
		{ label: 'Projets', href: '/projects' }
	];

	let currentPath = $derived($page.url.pathname);

	// Handle escape key for mobile menu
	/**
	 * @param {KeyboardEvent} event
	 */
	function handleKeydown(event) {
		if (event.key === 'Escape' && $isMenuOpen) {
			closeMenu();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<header id="header" class="fixed left-0 right-0 top-0 z-50">
	<Container>
		<nav class="relative flex h-20 items-center justify-between" aria-label="Navigation principale">
			<Logo />

			<div class="relative flex items-center gap-4">
				<!-- Let's Talk Button -->
				<a
					href="/contact"
					class="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-noir bg-noir px-6 py-2.5 text-sm font-medium text-blanc transition-all duration-300 hover:border-jaune hover:bg-jaune hover:text-noir focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2 md:flex"
				>
					<span
						class="inline-block transition-transform duration-300 group-hover:translate-x-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="none"
							viewBox="0 0 16 16"
							class="transition-colors"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
							></path>
						</svg>
					</span>
					<span class="transition-colors">Discutons</span>
					<span class="flex items-center gap-1">
						<span
							class="inline-block h-1 w-1 rounded-full bg-current opacity-0 transition-all duration-300 group-hover:opacity-100"
						></span>
					</span>
				</a>

				<!-- Menu Button -->
				<div class="relative">
					<button
						on:click={toggleMenu}
						class={cn(
							'group relative flex items-center gap-2 overflow-hidden rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2',
							$isMenuOpen
								? 'border-jaune bg-jaune text-noir'
								: 'border-noir bg-transparent text-noir hover:border-jaune hover:bg-jaune'
						)}
						aria-label={$isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						aria-expanded={$isMenuOpen}
						aria-controls="header-menu"
					>
						<span class="transition-colors">{$isMenuOpen ? 'Fermer' : 'Menu'}</span>
						<span class="flex items-center gap-1">
							<span
								class={cn(
									'inline-block h-1 w-1 rounded-full bg-current transition-all duration-300',
									$isMenuOpen ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
								)}
							></span>
							<span
								class={cn(
									'inline-block h-1 w-1 rounded-full bg-current transition-all delay-75 duration-300',
									$isMenuOpen ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
								)}
							></span>
						</span>
					</button>

					<!-- Compact Popover Menu -->
					{#if $isMenuOpen}
						<!-- Popover Menu -->
						<div
							id="header-menu"
							class="absolute right-0 top-full mt-2 z-50 w-64 overflow-hidden rounded-2xl border border-noir bg-blanc shadow-xl"
							transition:fly={{ y: -10, duration: 200 }}
							role="dialog"
							aria-modal="true"
							aria-label="Menu de navigation"
						>
							<!-- Navigation Links -->
							<nav class="p-2">
								<ul class="space-y-1" role="list">
									{#each navItems as item, i}
										<li transition:fly={{ y: -10, delay: i * 50, duration: 200 }}>
											<a
												href={item.href}
												on:click={closeMenu}
												class={cn(
													'group relative flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2',
													currentPath === item.href
														? 'bg-jaune text-noir'
														: 'text-noir hover:bg-gris-clair'
												)}
												aria-current={currentPath === item.href ? 'page' : undefined}
											>
												<span>{item.label}</span>
												{#if currentPath === item.href}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="none"
														viewBox="0 0 16 16"
														class="transition-transform duration-200 group-hover:translate-x-1"
													>
														<path
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="1.5"
															d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
														></path>
													</svg>
												{/if}
											</a>
										</li>
									{/each}
								</ul>
							</nav>

							<!-- Contact Section -->
							<div
								class="border-t border-gris-clair p-2"
								transition:fly={{ y: -10, delay: 150, duration: 200 }}
							>
								<a
									href="/contact"
									on:click={closeMenu}
									class="flex items-center justify-between rounded-lg bg-noir px-4 py-3 text-base font-medium text-blanc transition-all duration-200 hover:bg-jaune hover:text-noir focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2"
								>
									<span>Discutons de votre projet</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="none"
										viewBox="0 0 16 16"
										class="transition-transform duration-200 hover:translate-x-1"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
										></path>
									</svg>
								</a>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</nav>
	</Container>
</header>

<!-- Backdrop to allow clicking outside to close -->
{#if $isMenuOpen}
	<div
		class="fixed inset-0 z-40"
		on:click={closeMenu}
		on:keydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="-1"
		aria-label="Fermer le menu"
		transition:fade={{ duration: 200 }}
	></div>
{/if}
