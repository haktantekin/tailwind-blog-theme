const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './dist/**/*.html',
    './dist/**/*.css',
    './dist/**/*.js'
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    screens: {
      mobile: "640px",
      tablet: "960px",
      desktop: "1280px",
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
        'darkgray': '#7a7a7a',
      },
      height: {
        '128': '40rem',
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