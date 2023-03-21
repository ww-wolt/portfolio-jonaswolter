/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// display: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Open Sans', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
				general: ["'General Sans'", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				accent: {
					50: '#E9FFFA',
					100: '#C3FBED',
					200: '#92FAE1',
					300: '#4CECC5',
					400: '#01D3A1',
					500: '#01AF86',
					600: '#00977E',
					700: '#007362',
					800: '#004A40',
					900: '#00312B'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
	]
};
