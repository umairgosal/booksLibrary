    /** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')
const tailwind_theme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...tailwind_theme.fontFamily.sans],
        mono: ['Victor Mono', ...tailwind_theme.fontFamily.mono],
        // or name them
        // 'victor-mono': ['Victor Mono'],
        // poppins: ['Poppins'],
      },
    },
  },
  
  daisyui: {
    themes: true,
  },

  plugins: [typography, daisyui],
}
