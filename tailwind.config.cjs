//import {COLORS} from "@utils";
const {COLORS} = require("./src/shared/utils") ;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.{js,ts,jsx,tsx}",

    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins"],
      'sans': ["Inter" ],
    },
    extend: {
      colors: {
        ...COLORS,
      }
    },
  },
  plugins: [],
}
