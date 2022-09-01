/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#66DC78",
        },
        main: {
          DEFAULT: "#000000",
          1: "#282828",
          2: "#999999",
          3: "#ffffff"
        },
      }
    },
  },
  plugins: [],
}
