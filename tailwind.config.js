/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#1D242B',
      'green': '#BFCDBF'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Crimson Text', 'serif'],
    },
  },
  plugins: [],
}
