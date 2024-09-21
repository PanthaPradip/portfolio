/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        oswald : ['Oswald', 'sans-serif'],
        bebus :['Bebas Neue', 'sans-serif'],
        cursive : ['Great Vibes', 'sans-serif']
      }
    },
  },
  plugins: [],
}