/**
 * @param {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
	return classes.filter(Boolean).join(' ');
}

/**
 * @param {Date | string} date
 * @param {string} [locale='fr-FR']
 * @returns {string}
 */
export function formatDate(date, locale = 'fr-FR') {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(new Date(date));
}

/**
 * @param {Function} func
 * @param {number} delay
 * @returns {Function}
 */
export function throttle(func, delay) {
	/** @type {number | undefined} */
	let timeoutId;
	let lastExecTime = 0;

	return /** @this {any} */ function (...args) {
		const currentTime = Date.now();

		if (currentTime - lastExecTime > delay) {
			func.apply(this, args);
			lastExecTime = currentTime;
		} else {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(
				() => {
					func.apply(this, args);
					lastExecTime = Date.now();
				},
				delay - (currentTime - lastExecTime)
			);
		}
	};
}

/**
 * @param {Function} func
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(func, delay) {
	/** @type {number | undefined} */
	let timeoutId;

	return /** @this {any} */ function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}

/**
 * @returns {string}
 */
export function generateId() {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}