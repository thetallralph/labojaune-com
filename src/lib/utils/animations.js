export const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.3 }
};

export const slideUp = {
	initial: { y: 20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -20, opacity: 0 },
	transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
};

export const scaleIn = {
	initial: { scale: 0.95, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { scale: 0.95, opacity: 0 },
	transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
};

export const staggerChildren = {
	animate: {
		transition: {
			staggerChildren: 0.05
		}
	}
};

export const createStagger = (delay = 0.05) => ({
	animate: {
		transition: {
			staggerChildren: delay
		}
	}
});

export const parallax = (offset = 50) => ({
	initial: { y: offset },
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.4, 0, 0.2, 1]
		}
	}
});
