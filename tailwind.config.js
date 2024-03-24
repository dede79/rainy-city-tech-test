/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    screens: {
      'sm': '450px',
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      colors: {
        'background-pink': '#f5d6dd',
        'title-pink': '#e33b9f',
        'primary-pink': '#D83696',
        'secondary-pink':'#e977c2',
        'title-black': '#101010',
        'text-gray':'rgba(16, 16, 16, 0.5)'
      },
    },
  },
  plugins: [],
}

