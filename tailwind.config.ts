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
        brand: {
          dark: "#1E1B6B",
          indigo: "#2E2A9E",
          primary: "#4B3FCB",
          accent: "#7EC8E3",
          lavender: "#C9CBF0",
          soft: "#EEF0FB",
          surface: "#F8F9FE",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(46, 42, 158, 0.08)",
        glow: "0 0 25px rgba(126, 200, 227, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
