// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // From Figma color guidelines
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
        'blue-gray': '#B1CBBB',
        // Additional Figma colors
        'figma-brown-dark': '#594745',
        'figma-brown-light': '#8E726E', 
        'figma-brown-medium': '#352B29',
        'figma-bg-light': '#F7F4F3',
        'figma-pink': '#D8C7C5',
        'figma-brown-soft': '#B18E8A',
        'figma-pink-muted': '#C1A5A1',
        'figma-green': '#0BA52A',
        'figma-green-soft': '#DAF7E2',
        'figma-green-medium': '#9EBEAB',
        'figma-green-teal': '#8AB19A',
        'figma-green-light': '#C4D8CC',
        'figma-green-mint': '#D8E5DD',
        'figma-red': '#D32A2A',
        'figma-red-light': '#FFECEC',
        'figma-green-sage': '#B1CBBB'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Figma Typography specifications
        'heading-m': ['32px', { lineHeight: '40px', letterSpacing: '-1px' }],
        'heading-xs': ['20px', { lineHeight: '28px', letterSpacing: '-0.5px' }],
        'text-m': ['16px', { lineHeight: '24px', letterSpacing: '0px' }],
        'text-s': ['14px', { lineHeight: '20px', letterSpacing: '0px' }],
        'text-xs': ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
      }
    }
  },
  plugins: [],
}
