// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#352B29',
        'primary-brown': '#594745',
        'accent-brown': '#8E726E',
        'light-bg': '#F7F4F3',
        'white': '#FFFFFF',
        'red': '#D32A2A',
        'soft-red': '#D73F3F',
        'muted-red': '#FFECEC',
        'soft-brown': '#E8DDDC',
        'muted-pink': '#D8C7C5',
        'green': '#0BA52A',
        'soft-green': '#DAF7E2',
        'teal': '#8AB19A',
        'light-teal': '#C4D8CC',
        'mint': '#D8E5DD',
        'blue-gray': '#B1CBBB'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
