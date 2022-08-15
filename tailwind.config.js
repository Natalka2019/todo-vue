/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/main.js",
  ],
  theme: {
    extend: {
      sm: "370px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
