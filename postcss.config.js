// postcss.config.js

const tailwind = require('tailwindcss')

module.exports = () => ({
  plugins: [tailwind('./tailwind.js')],
})