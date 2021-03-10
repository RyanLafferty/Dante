const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.njk', './src/**/*.svg'],
    layers: ['components', 'utilities'],
    options: {
      safelist: ['header-shadow', '-translate-y-full', 'hidden']
    }
  },
  theme: {
    screens: {
      sm: {'max':'576px'},
      md: {'max':'768px'},
      lg: {'max':'1024px'}
    },
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['"Caveat Brush"', 'Oswald']
    },
    colors: {
      sitebg: '#0E091D',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      teal: colors.teal
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
