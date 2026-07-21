/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#FBF8F1',
        'brand-green': '#96C254',
        'brand-dark': '#3E2723',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'cursive': ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
