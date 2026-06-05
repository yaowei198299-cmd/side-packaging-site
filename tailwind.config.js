/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0F', // Redefine black to LuxoPack's matte black
        'luxury-gold': {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#7A5A10',
        },
        'matte-black': {
          DEFAULT: '#0A0A0F',
          charcoal: '#1C1C28',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
