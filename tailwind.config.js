/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'320px',
      md:'768px',
      lg:'1152px',
      xl:'1440px',
      '2xl':'1920px'
    },
    extend: {
    },
  },
  plugins: [],
}