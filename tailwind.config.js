/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/app/**/*.ts", 
    "./src/app/**/*.html"
  ],
  theme: {
    colors: {
      'cutty-sark': {
        '50': '#f4f7f7',
        '100': '#e3e9ea',
        '200': '#cad5d7',
        '300': '#a4b7bc',
        '400': '#789198',
        '500': '#5d767d',
        '600': '#556a72',
        '700': '#455359',
        '800': '#3d484d',
        '900': '#363e43',
        '950': '#21272b',
      },
      'aquamarine': {
        '50': '#e9fff7',
        '100': '#caffea',
        '200': '#9bffdb',
        '300': '#73fbd3',
        '400': '#1becb5',
        '500': '#00d4a0',
        '600': '#00ad84',
        '700': '#008b6d',
        '800': '#006d57',
        '900': '#005949',
        '950': '#00332b',
      },
      'white':'#ffffff',
      'black':"#000000"
     
    },
    extend: {
      fontFamily: {
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': ["0.6rem", "0.8rem"]
      },
      width: {
        'cherry': "10mm",
      },
      height: {
        'cherry': "12.5mm",
        'cherry-lip': "2mm"
      },

    },
  },
  plugins: [],
};
