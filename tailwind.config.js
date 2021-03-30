module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      tezos: {
        blue: '#2C7DF7',
        dark: '#1A2734',
      },
      white: '#fff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
