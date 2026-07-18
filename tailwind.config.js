/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosegold: {
          dark: '#5b2022',
          DEFAULT: '#9a3f43',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
        },
      },
      fontFamily: {
        calligraphic: ['Playfair Display', 'serif'],
        elegant: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
