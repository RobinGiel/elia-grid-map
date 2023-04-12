/** @type {import('tailwindcss').Config} */
const forms = require("@tailwindcss/forms");
const preline = require("preline/plugin");
const brandColor = "#ff7300";
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        flushOrange: {
          50: "#fff9ec",
          100: "#fff2d3",
          200: "#ffe1a5",
          300: "#ffca6d",
          400: "#ffa732",
          500: "#ff8c0a",
          600: "#ff7300",
          700: "#cc5302",
          800: "#a1400b",
          900: "#82370c",
          950: "#461904",
        },
      },
      accentColor: {
        DEFAULT: brandColor,
      },
      ringColor: {
        DEFAULT: brandColor,
      },
    },
  },
  plugins: [forms, preline],
};
