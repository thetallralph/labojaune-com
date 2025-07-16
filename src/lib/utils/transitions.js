import { cubicOut } from 'svelte/easing';

/**
 * @param {HTMLElement} node
 * @param {{ speed?: number }} [options]
 * @returns {{ duration: number, tick: (t: number) => void }}
 */
export function typewriter(node, { speed = 1 } = {}) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent || '';
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

/**
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, easing?: (t: number) => number }} [options]
 * @returns {{ delay: number, duration: number, easing: (t: number) => number, css: (t: number) => string }}
 */
export function fade(node, { delay = 0, duration = 300, easing = cubicOut } = {}) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}

/**
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, easing?: (t: number) => number, x?: number, y?: number, opacity?: number }} [options]
 * @returns {{ delay: number, duration: number, easing: (t: number) => number, css: (t: number, u: number) => string }}
 */
export function fly(
	node,
	{ delay = 0, duration = 300, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	const od = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
      transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
      opacity: ${target_opacity - od * u}
    `
	};
}

/**
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, easing?: (t: number) => number, start?: number, opacity?: number }} [options]
 * @returns {{ delay: number, duration: number, easing: (t: number) => number, css: (t: number, u: number) => string }}
 */
export function scale(
	node,
	{ delay = 0, duration = 300, easing = cubicOut, start = 0.95, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	const od = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
      transform: ${transform} scale(${1 - (1 - start) * u});
      opacity: ${target_opacity - od * u}
    `
	};
}

/**
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, easing?: (t: number) => number, baseScale?: number }} [options]
 * @returns {{ delay: number, duration: number, easing: (t: number) => number, css: (t: number) => string }}
 */
export function fadeScale(
	node,
	{ delay = 0, duration = 300, easing = cubicOut, baseScale = 0.95 } = {}
) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		easing,
		css: (t) => {
			const scale = 1 - (1 - baseScale) * (1 - t);
			return `opacity: ${t * o}; transform: scale(${scale})`;
		}
	};
}
