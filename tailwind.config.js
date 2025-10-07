/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				"noto-sans-hk": ["Noto Sans HK", "sans-serif"],
				uoq: ["UoqMunThenKhung", "serif"],
			},
			textStroke: {
				1: "1px",
				2: "2px",
				3: "3px",
				4: "4px",
				5: "5px",
			},
			textStrokeColor: {
				white: "#ffffff",
				black: "#000000",
				gray: "#6b7280",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities, theme }) {
			const textStrokeUtilities = {};
			const textStrokeColorUtilities = {};

			// Generate text stroke width utilities
			const strokeWidths = theme("textStroke");
			Object.entries(strokeWidths).forEach(([key, value]) => {
				textStrokeUtilities[`.text-stroke-${key}`] = {
					"-webkit-text-stroke-width": value,
				};
			});

			// Generate text stroke color utilities
			const strokeColors = theme("textStrokeColor");
			Object.entries(strokeColors).forEach(([key, value]) => {
				textStrokeColorUtilities[`.text-stroke-${key}`] = {
					"-webkit-text-stroke-color": value,
				};
			});

			// Add paint order utility
			const paintOrderUtilities = {
				".paint-order-stroke-fill": {
					"paint-order": "stroke fill",
				},
				".paint-order-fill-stroke": {
					"paint-order": "fill stroke",
				},
			};

			addUtilities({
				...textStrokeUtilities,
				...textStrokeColorUtilities,
				...paintOrderUtilities,
			});
		},
	],
};
