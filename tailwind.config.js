/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'primary': {
          '50': '#fff6ec',
          '100': '#ffebd3',
          '200': '#ffd3a5',
          '300': '#ffb46d',
          '400': '#ff8932',
          '500': '#ff670a',
          '600': '#ff4d00',
          '700': '#cc3502',
          '800': '#a12a0b',
          '900': '#82250c',
        },
      }
    },
  },
  plugins: [],
}