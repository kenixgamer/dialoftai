/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      spacing: {
        '54': '54px',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
          sans: ['DM Sans', 'sans-serif'], // Replace default or add as new
        helvetica: [
          "Helvetica Neue",
          "Helvetica",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        bageta: ["Bageta", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
