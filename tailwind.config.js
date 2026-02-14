/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: '#121212',
          accent: 'var(--gym-accent)', // Changed to CSS variable for dynamic theming
          surface: '#1e1e1e'
        }
      }
    },
  },
  plugins: [],
}
