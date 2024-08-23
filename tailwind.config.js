/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'grungeBg': "url('https://img.freepik.com/vector-gratis/pared-pincel-grunge-amarillo-negro_1409-2955.jpg?t=st=1724443495~exp=1724447095~hmac=7dd4e6f53b1c61a83de8f393eba60409b29a594064cd7529569c0745b9c6e675&w=1380')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

