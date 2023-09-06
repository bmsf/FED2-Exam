/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#121212',
			lightPrimary: '#1E1E1E',
			lightestPrimary: '#272727',
			grey: '#9f9f9f',
			white: '#F4F4F4',
			error: '#C84949',
		},
	},
	plugins: [],
};
