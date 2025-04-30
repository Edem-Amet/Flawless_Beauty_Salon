/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA800',
        secondary: '#000000',
      },
      fontFamily: {
        parisienne: ['Parisienne', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        kugile: ['"Kugile"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 4px 20px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}