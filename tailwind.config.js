/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          dark: '#023020',
          DEFAULT: '#10b981',
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
