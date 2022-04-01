const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        pink: '#FC4D6D',
        silver_linear: '#ffffff66',
        silver_linear_end: '#ffffff1a',
        gradient_yellow: '#FDA02F',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
