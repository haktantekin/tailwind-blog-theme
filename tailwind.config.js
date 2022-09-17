const colors = require('tailwindcss/colors')

module.exports = {
  content: [
  './dist/**/*.html',
  './dist/**/*.css',
  './dist/**/*.js'],
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    extend: {
      fontFamily: {
        "dancing": ['Dancing Script, cursive'],
        "catamaran": ['Catamaran, sans-serif'],
        "garamond": ['EB Garamond, serif']
       },
       colors: {
        'main': '#288dab',
        'dark': '#060606',
        'gray': '#eeeeee',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
