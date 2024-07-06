import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				animatedgradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			backgroundSize: {
				"300%": "300%",
			},
			animation: {
				gradient: "animatedgradient 4s ease infinite alternate",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"black-rgba": "rgba(0, 0, 0, 0.4)",
				"white-rgba": "rgba(255, 255, 255, 0.7)",
				chartreuse: "rgb(127, 255, 0)",
			},
			spacing: {
				header: "50px",
			},
		},
	},
	plugins: [],
};
export default config;
