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
    boxShadow: {
      '3xl': '0 5px 50px -15px rgba(38, 153, 251, 0.3)',
    },
    fontFamily: {
      museo: 'museo-500',
    },
    minHeight: {
      half: '50vh',
      screen: '100vh',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
