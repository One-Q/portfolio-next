/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#242743',
        secondary: '#724CF9',
        tertiary: '#4B7F52',
        background: '#F8F7F9'
      },
      keyframes: {
        marqueeScroll: {
          'O%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap-space)))' }
        }
      },
      animation: {
        marquee: 'marqueeScroll 10s linear infinite'
      }
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
};
