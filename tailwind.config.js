/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/app/**/*.ts", "./src/app/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", ...defaultTheme.fontFamily.sans],
      },
      width: {
        'cherry': "10mm",
      },
      height: {
        'cherry': "12.5mm",
        'cherry-lip': "2mm,"
      },

    },
  },
  plugins: [],
};
