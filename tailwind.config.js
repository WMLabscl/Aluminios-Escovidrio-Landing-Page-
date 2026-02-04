/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316', // Naranja moderno (como el logo)
        'light-bg': '#f8fafc', // Slate 50
        'light-card': '#f1f5f9', // Slate 100
        'text-dark': '#0f172a', // Slate 900
        'text-gray': '#475569', // Slate 600
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(249, 115, 22, 0.3)',
        'glow-lg': '0 0 40px rgba(249, 115, 22, 0.4)',
      }
    },
  },
  plugins: [],
}
