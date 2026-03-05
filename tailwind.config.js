/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fefdf8',
        ink: '#1c1c1c',
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
