/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#242743',
        secondary: '#724CF9',
        tertiary: '#4B7F52',
        background: '#F8F7F9'
      }
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
};
