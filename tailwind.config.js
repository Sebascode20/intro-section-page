/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html",
    "./js/main.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 100vmax hsl(0, 0%, 8%)'
      }
    },
    colors: {
      'Almost-White': ' hsl(0, 0%, 98%)',
      'Medium-Gray': 'hsl(0, 0%, 41%)',
      'Almost-Black': 'hsl(0, 0%, 8%)',
    },
    fontFamily: {
      'Epilogue': 'Epilogue, sans-serif',
    }
  },
  plugins: [],
}

