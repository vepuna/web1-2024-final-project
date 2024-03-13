/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/background.jpg')",
      },
      colors: {
        lightOrange: 'rgb(239, 141, 68)'
      },
    },
  },
  plugins: [],
}

