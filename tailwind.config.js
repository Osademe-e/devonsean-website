const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      brand: {
        50:  '#CAD5CD',
        100: '#A9BBAD',
        200: '#87A18E',
        300: '#68856F',
        400: '#4E6454',
        500: "#344238",
        600: '#356957',
        700: '#214237',
        800: '#0E1C17',
        900: '#0C1814',
        DEFAULT: "#344238"
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
