/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const colors = {
	transparent: twColors.transparent,
	black: '#2E3239',
	gray: '#CDCDCD',
	white: twColors.white,
	primary: '#FFDE57',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697',
	red: twColors.red[400],
	fullred: twColors.red[700],
	blue: twColors.blue[500],
	graylight: twColors.gray[400],
	graydark: twColors.gray[500]
}

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s easy-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					border: 'none',
					outline: 'none',
					borderRadius: '50%',
					cursor: 'pointer',
					display: 'flex',
					padding: '0.4rem',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2.5rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
					color: '#353538',
					backgroundColor: '#fff',
					'&:hover': {
						boxShadow: '0 4px 16px rgba(45, 8, 125, 0.3)'
					}
				}
			}),
				addUtilities({
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					},
					'.flex-center-center': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					},
					'.flex-center-left': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'left'
					},
					'.flex-center-right': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'right'
					}
				})
		})
	]
}
