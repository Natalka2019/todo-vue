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
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        grey: "#e6ecf3",
        lightGrey: "#cfd6de",
        lightBlue: "#f0f4f9",
        blue: "#558fe6",
      },
    },
  },
  plugins: [],
};
