/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFFF', // hsl(180, 100%, 50%)
          dim: 'rgba(0, 255, 255, 0.1)',
        },
        secondary: '#9933FF', // hsl(270, 100%, 60%)
        accent: '#FF00FF',    // Magents
        dark: {
          bg: '#09090B',      // hsl(240, 10%, 4%)
          card: 'rgba(26, 26, 28, 0.6)', // hsla(240, 10%, 10%, 0.6)
        },
        text: {
          main: '#F2F2F2',
          muted: '#A6A6B3'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #00FFFF, #9933FF)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 255, 255, 0.1)',
        'neon-hover': '0 0 25px rgba(0, 255, 255, 0.3)',
        'neon-strong': '0 0 15px rgba(0, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
