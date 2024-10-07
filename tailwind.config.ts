import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-cocoa": {
          50: "#f6f3f0",
          100: "#e8e3d9",
          200: "#d3c7b5",
          300: "#b9a68b",
          400: "#a5896a",
          500: "#96795c",
          600: "#80634e",
          700: "#684d40",
          800: "#59423a",
          900: "#4e3a35",
          950: "#332421",
        },
      },
    },
  },
  plugins: [],
};
export default config;
