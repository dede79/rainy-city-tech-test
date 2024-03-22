/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid'
  ],
  theme: {
    extend: {
      colors: {
        'background-pink': '#ff49db',
        'title-pink': '#e33b9f',
        'secondary-pink':'#e977c2',
        'text-btn-pink': '#D83696'
      },
    },
  },
  plugins: [],
}

