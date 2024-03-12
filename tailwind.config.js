/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/background.jpg')",
      }
    },
  },
  plugins: [],
}

