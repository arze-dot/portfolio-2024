/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "lalezar": ['Lalezar', 'sans-serif'],
        "keania": ['Keania One', 'sans-serif'],
      },
      colors: {
        'black': '#1A1A1A',
        'black-light': '#343A3F',
        'cream': '#FDE3C4',
        'red': '#D84D4D',
      },
    },
  },
  plugins: [],
}

