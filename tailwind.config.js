/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ['valorant']
      },
      screens: {
        '3xl': '2000px',
        '25xl': '1800px'
      }
    },
  },
  plugins: [],
}