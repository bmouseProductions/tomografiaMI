/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'neon-pulse': 'neonPulse 3s linear infinite',
      },
      keyframes: {
        neonPulse: {
          '0%': { borderColor: '#00fffb', boxShadow: '0 0 15px #00fffb' },
          '33%': { borderColor: '#0b8785', boxShadow: '0 0 15px #0b8785' },
          '66%': { borderColor: '#097f4a', boxShadow: '0 0 15px #097f4a' },
          '100%': { borderColor: '#044729', boxShadow: '0 0 15px #044729' }
        },
      }
    },
  },
  plugins: [],
}

