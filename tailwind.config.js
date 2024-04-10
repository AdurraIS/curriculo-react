/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '20vw': '20vw',
        '15vw':'15vw'
      },
      backgroundImage: {
        'background': "url('/public/background.jpg')",
      }
    },
  },
  plugins: [],
}