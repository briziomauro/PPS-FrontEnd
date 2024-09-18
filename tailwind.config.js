/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        slideInLeft: "slideInLeft 2s ease-in-out forwards",
        slideInRight: "slideInRight 2s ease-in-out forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        grungeBg:
          "url('https://media.istockphoto.com/id/1320330053/es/foto/textura-de-fondo-de-papel-de-cuadr%C3%ADcula-punteada-patr%C3%B3n-de-repetici%C3%B3n-sin-costuras.jpg?s=2048x2048&w=is&k=20&c=JyUM5sxE6C60iWxBER_YeI-lsbzDUknzBUzVXeMzeyg=')",
      },
    },
  },
  plugins: [require("daisyui")],
};
