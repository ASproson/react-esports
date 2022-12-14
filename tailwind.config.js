/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ['valorant'],
        valorantStandard: ['Bebas Neue'],
      },
      screens: {
        '3xl': '2000px',
        '25xl': '1800px'
      },
      colors: {
        'offWhite': '#ECE8E1'
      }
    },
  },
  plugins: [],
}