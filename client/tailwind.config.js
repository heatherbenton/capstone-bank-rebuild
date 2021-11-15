const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			warmgray: colors.warmGray,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			red: colors.rose,
			orange: colors.orange,
			yellow: colors.amber,
		},
		maxWidth: {
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
		},
		minHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
		extend: {},
		variants: {
			extend: {
				backgroundImage: {
					"hero-pattern": "url('/img/heatherbentonbankappbackground.jpg')",
					"footer-texture": "url('/img/footer-texture.png')",
				},
			},
		},
		plugins: [require("@tailwindcss/forms")],
	},
};
