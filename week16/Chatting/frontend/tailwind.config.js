/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'jakarta' : ['jakarta'],
        "CabinetGrotesk" : ["CabinetGrotesk", 'sans-serif'],
        'interLogo' : ['interLogo', 'sans-serif'],
        'Hoover' : ['Hoover', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

