/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#468189",
        secondary: "#282563",
        searchColor: "#77ACA2",
        dataColor: "#dbcb39",
        infoColor: "#031926"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}