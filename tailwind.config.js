const colors = require("tailwindcss/colors");
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				primary: "#000",
				text: colors.white,
				pColor: "#ccc",
				textAlt: "#777",
				bg: "#F9F9F9",
				hoverColor: "#434343",
			},
			fontSize: {
				xxx: "35rem",
			},
			spacing: {
				120: "36rem",
				section: "5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
