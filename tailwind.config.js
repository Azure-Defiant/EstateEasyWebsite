/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
  },
  plugins: [],
  variants: {},
  // Add these custom utilities
  layer: {
    utilities: {
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '.hide-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      '.hide-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    },
  },
  }
}