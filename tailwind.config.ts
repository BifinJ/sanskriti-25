import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffb700",
        secondary: "#cacaca",
        primary_hover: "#c3c647",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        courier: ["Courier", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
