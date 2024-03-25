/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/background.jpg')",
        'pattern': "url('/src/assets/images/pattern.png')"
      },
      colors: {
        lightOrange: 'rgb(239, 141, 68)',
        hoverOrange: '#FFD401',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

