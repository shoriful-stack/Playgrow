/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: "'Jost', serif",
      },
      colors: {
        primary: "#DB915E",
        secondary: "#F7F3F0",
      },
    },
  },
  plugins: [],
}

