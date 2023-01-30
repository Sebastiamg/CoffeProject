/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html, js, ts}"],
  theme: {
    extend: {
      colors: { 
        choc1: '#201310',
        choc2: '#4b3024',
        choc3: '#79543c',
        crem1: '#d1bba4',
        crem2: '#a37d59',
        crem3: '#8a6141',
        crem4: '#a87d4f'
      }
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Satisfy': ['Satisfy', 'sans-serif'],
    },
  },
  plugins: [],
}