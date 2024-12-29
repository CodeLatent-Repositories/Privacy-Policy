/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGradient: {
          from: '#1e3a8a', // blue-900
          via: '#4c1d95', // purple-900
          to: '#000000',  // black
        },
        cardBackground: 'rgba(255, 255, 255, 0.1)',
        cardHover: 'rgba(255, 255, 255, 0.2)',
        button: {
          DEFAULT: '#2563eb', // blue-600
          hover: '#1d4ed8',   // blue-700
        },
      },
    },
  },
  plugins: [],
}