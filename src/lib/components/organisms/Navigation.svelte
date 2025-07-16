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
		{ label: 'Services', href: '/services' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Contact', href: '/contact' }
	];

	$: currentPath = $page.url.pathname;

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

<header
	class="fixed left-0 right-0 top-0 z-50 border-b border-noir/20 bg-blanc-casse/95 backdrop-blur-sm"
>
	<Container>
		<nav
			class="flex h-20 items-center justify-between"
			aria-label="Navigation principale"
		>
			<Logo />

			<!-- Desktop Navigation -->
			<ul class="hidden items-center space-x-8 lg:flex" role="list">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class={cn(
								'relative -mx-2 -my-1 rounded px-2 py-1 font-medium text-noir transition-all duration-300 hover:text-blanc focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2',
								currentPath === item.href && 'font-bold'
							)}
							aria-current={currentPath === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<div class="hidden lg:block">
				<Button href="#contact" variant="primary">Démarrer un projet</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				on:click={toggleMenu}
				class="-mr-2 rounded p-2 focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2 lg:hidden"
				aria-label={$isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
				aria-expanded={$isMenuOpen}
				aria-controls="mobile-menu"
			>
				<div class="relative flex h-5 w-6 flex-col justify-between">
					<span
						class={cn(
							'block h-0.5 bg-noir transition-all duration-300',
							$isMenuOpen && 'translate-y-2 rotate-45'
						)}
					></span>
					<span
						class={cn(
							'block h-0.5 bg-noir transition-all duration-300',
							$isMenuOpen && 'opacity-0'
						)}
					></span>
					<span
						class={cn(
							'block h-0.5 bg-noir transition-all duration-300',
							$isMenuOpen && '-translate-y-2 -rotate-45'
						)}
					></span>
				</div>
			</button>
		</nav>
	</Container>
</header>

<!-- Mobile Menu -->
{#if $isMenuOpen}
	<div
		class="fixed inset-0 z-40 lg:hidden"
		transition:fade={{ duration: 300 }}
		role="dialog"
		aria-modal="true"
		aria-label="Menu de navigation mobile"
	>
		<div
			class="absolute inset-0 bg-noir/20"
			on:click={closeMenu}
			on:keydown={(e) => e.key === 'Escape' && closeMenu()}
			role="button"
			tabindex="-1"
			aria-label="Fermer le menu"
		></div>
		<div
			id="mobile-menu"
			class="absolute bottom-0 right-0 top-0 w-full max-w-sm border-l-2 border-noir bg-blanc text-noir"
			transition:fly={{ x: 100, duration: 300 }}
			role="navigation"
			aria-label="Menu mobile"
		>
			<div class="flex h-full flex-col px-8 pb-8 pt-24">
				<ul class="space-y-6" role="list">
					{#each navItems as item, i}
						<li transition:fly={{ x: 20, delay: i * 50 }}>
							<a
								href={item.href}
								on:click={closeMenu}
								class={cn(
									'-mx-2 block rounded px-2 text-2xl font-semibold text-noir transition-all duration-300 hover:bg-noir hover:text-blanc focus:outline-none focus:ring-2 focus:ring-jaune focus:ring-offset-2',
									currentPath === item.href && 'bg-noir text-blanc'
								)}
								aria-current={currentPath === item.href ? 'page' : undefined}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>

				<div class="mt-auto">
					<Button href="#contact" variant="primary" size="large" fullWidth on:click={closeMenu}>
						Démarrer un projet
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}
