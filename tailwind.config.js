module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Comfortaa'],
        'body': ['Open Sans'],
      },
      boxShadow: {
        sm: '0 1px 2px 0  rgb(48, 48, 48)',
        md: '-8px 5px 8px -2px rgb(20, 20, 20,1)',
        lg: '0 10px 15px -3px rgb(48, 48, 48)',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}