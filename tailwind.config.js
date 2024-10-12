/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:'#1F61B9',
        secondary:'#FF730F',
        basic_white: '#EEE5E5',
        hover_primary:'#004AAD',
        hover_secondary:'#E96000'
      },
      screens: {
        's': '375px'
      }
    }
  },
  plugins: [],
}

