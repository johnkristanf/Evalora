/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	presets: [require('nativewind/preset')],

	theme: {
		extend: {
			colors: {
				primary: '#6495ED',
			},
		},
	},
	plugins: [],
}
