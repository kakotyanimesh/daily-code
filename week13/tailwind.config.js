/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // define where we are going to write tailwind css
  ],
  theme: {
    extend: {
      fontFamily : {
        jeFont : ['jeFont', 'sans-serif']
      }
    },
  },
  plugins: [],
};
