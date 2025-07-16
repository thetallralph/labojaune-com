/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				jaune: '#FFD700',
				'jaune-clair': '#FFF3C4',
				noir: '#000000',
				blanc: '#FFFFFF',
				'gris-fonce': '#1A1A1A',
				'gris-moyen': '#666666',
				'gris-clair': '#F5F5F5',
				'blanc-casse': '#FFFEF5'
			},
			fontFamily: {
				sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				display: ['Bebas Neue', 'Impact', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace']
			},
			fontSize: {
				display: ['72px', { lineHeight: '80px', fontWeight: '900' }],
				'display-mobile': ['48px', { lineHeight: '56px', fontWeight: '900' }]
			},
			spacing: {
				18: '4.5rem',
				88: '22rem',
				120: '30rem'
			},
			animation: {
				'fade-in': 'fadeIn 300ms ease-out',
				'slide-up': 'slideUp 600ms cubic-bezier(0, 0, 0.2, 1)',
				'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0, 0.2, 1)'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			transitionTimingFunction: {
				default: 'cubic-bezier(0.4, 0, 0.2, 1)',
				enter: 'cubic-bezier(0, 0, 0.2, 1)',
				exit: 'cubic-bezier(0.4, 0, 1, 1)'
			}
		}
	},
	plugins: []
};
