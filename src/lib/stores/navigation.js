import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);
export const currentPage = writable('');

export function toggleMenu() {
	isMenuOpen.update((n) => !n);
}

export function closeMenu() {
	isMenuOpen.set(false);
}

export function openMenu() {
	isMenuOpen.set(true);
}
