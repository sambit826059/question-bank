
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rustic: {
          100: '#f5e6e0',
          200: '#e8c8bd',
          300: '#dba99a',
          400: '#cd8b77',
          500: '#c06d54',
          600: '#a85743',
          700: '#8f4232',
          800: '#762c21',
          900: '#5d1710',
        },
        cream: {
          100: '#fff9f0',
          200: '#fff3e0',
          300: '#ffe9c6',
          400: '#ffdfa8',
          500: '#ffd58a',
          600: '#ffcb6c',
          700: '#ffc14e',
          800: '#ffb730',
          900: '#ffad12',
        },
      },
    },
  },
  plugins: [],
};
