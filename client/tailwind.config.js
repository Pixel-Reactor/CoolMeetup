/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: { fontFamily: {
      Lora: ['Lora', "sans-serif"],
      // Add more custom font families as needed
    },
    animation: {
      'bounce-slow': 'bounce 7s linear infinite',
    }},
  },
  plugins: [],
}

