import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				// light mode
				"alabaster-bg": "#FAFBFD",
				"alabaster-drk": "#F2F2F4",
				"woodsmoke-txt": "#0A0A0F",
				"persian-blue-prim": "#3A3BCD",
				"chetwode-sec": "#8586F1",
				"boctonic-acc": "#3D3FFF",
				// dark mode
				"wards-bg": {
					100: "#bad8e7",
					200: "#8bbcd5",
					300: "#5497bc",
					400: "#397ba1",
					500: "#326488",
					600: "#2e5470",
					700: "#2d485d",
					800: "#0B1015",
					900: "#060A0E",
				},
				"porcelain-txt": "#EEF2F5",
				"jordi-blue-prim": "#97BBE4",
				"endeavour-sec": "#175398",
				"azure-acc": "#0F79F1",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
