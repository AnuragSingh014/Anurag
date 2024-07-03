/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgb(18,8,33)',
      },
      fontFamily: {
        customFont: ['"Pacifico"', "cursive"],
        // Add more custom font families as needed
      },
      backgroundImage: {
        'message-bg': "url('/assets/Message.jpg')",
      },
    },
  },
  plugins: [],
}

