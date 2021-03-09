const colors = require('tailwindcss/colors')
module.exports = {
  // purge: {
  //   enabled: true,
  //   content:['./*.html']
  // },
  purge:['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        fuchsia:colors.fuchsia,
        cyan:colors.cyan,
        emerald:colors.emerald,
        teal:colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
