/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0084ff',
        'light-bg': '#f0f7ff',
        'light-card': '#e3f2fd',
        'text-dark': '#1e3a5f',
        'text-gray': '#5c7a99',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 132, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 132, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
