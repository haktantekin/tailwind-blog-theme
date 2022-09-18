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
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        "garamond": ['EB Garamond, serif'],
        "relaway": ['Raleway, sans-serif'],
        "noto": ['Noto Serif, serif'],
      },
      colors: {
        'main': '#288dab',
        'dark': '#060606',
        'gray': '#eeeeee',
        'darkgray': '#7a7a7a',
      },
      height: {
        '128': '40rem',
        '64': '20rem',
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