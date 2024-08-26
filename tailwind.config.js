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
          "url('https://img.freepik.com/foto-gratis/fondo-blanco-sucio-cemento-natural-o-textura-antigua-piedra-como-pared-patron-retro_1258-28331.jpg?t=st=1724522629~exp=1724526229~hmac=614d2499ee2fb04d73f92d2e762a2aa09a6306550f38bd8ba51c3696df452f07&w=740')",
      },
    },
  },
  plugins: [require("daisyui")],
};
