/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dmShadow:
          "inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)",
        dmAfterShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        bgc: "rgb(var(--color-bgc) / <alpha-value>)",
        txc: "rgb(var(--color-txc) / <alpha-value>)",
      },
    },
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      bebas: ["Bebas Nueue", "sans-serif"],
      kollektif: ["Kollektif", "sans-serif"],
      lovelo: ["Lovelo", "sans-serif"],
    },
    letterSpacing: {
      widestest: ".25em",
    },
  },
  plugins: [],
};
