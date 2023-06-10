/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	"animation": {
		"text-gradient": "text-gradient 1.5s linear infinite",
		"background-shine": "background-shine 2s linear infinite"
	  },
	  "keyframes": {
		"background-shine": {
		  "from": {
			"backgroundPosition": "0 0"
		  },
		  "to": {
			"backgroundPosition": "-200% 0"
		  }
		}
	  },
	
	plugins: [require("daisyui")],
}
