/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern":
					"url('https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/2795661f-51fc-4481-86db-f2e79e9bbf8b/PH-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontWeight: {
			thin: "100",
			hairline: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			"extra-bold": "800",
			black: "900",
		},
	},
	plugins: [],
}
