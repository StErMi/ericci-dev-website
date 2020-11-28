module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#FFFFFFF5',
        button: '#46C7B0',
        buttonHover: '#58D6C0',
      },
      textColor: {
        button: '#46C7B0',
        primary: '#515369',
      },
      borderColor: {
        primary: '#FFFFFFF5',
        button: '#46C7B0',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
