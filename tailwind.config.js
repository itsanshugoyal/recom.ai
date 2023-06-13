/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  backgroundImage: { 'booksbg': "url('/public/img/booksbg.png')" },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
