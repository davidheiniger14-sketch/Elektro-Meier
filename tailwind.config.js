/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./*.html", "./src/**/*.{html,js}"], // WICHTIG: Hier sucht Tailwind nach deinen Klassen
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        brand: {
          yellow: '#FFE600',
          yellowHover: '#ECD400',
          red: '#E30613',
          redDark: '#C2040F',
          black: '#111111',
          slate: '#334155',
          border: '#E2E8F0',
          bgLight: '#FAFAFA',
          surface: '#FFFFFF'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}