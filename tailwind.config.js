module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#334155', // color oscuro
        secondary: '#38bdf8', // color claro
      },
    },
  },
  plugins: [],
}
