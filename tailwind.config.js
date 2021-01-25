module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
      spacing: {
        '200': '50rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
