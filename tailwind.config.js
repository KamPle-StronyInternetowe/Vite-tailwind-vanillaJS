/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["montserrat", "sans-serif"],
      },
      colors: {
        "custom-blue": "#2185D5",
        "custom-dark": "#3A4750",
        "custom-darker": "#20262E",
        "custom-light": "#F3F3F3",
      },
      keyframes: {
        customBounce: {
          "0%": { transform: "translate(-50%,-10%)" },
          "50%": { transform: "translate(-50%,25%)" },
          "100%": { transform: "translate(-50%,-10%)" },
        },
        customPing: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".5", width: "80px" },
          "100%": { opacity: "1" },
        },
        customShow: {
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        customBounce: "customBounce 1.7s ease-in-out infinite",
        customPing: "customPing 1.7s ease-in-out infinite",
        customShow: "customShow .5s .5s forwards",
      },
    },
  },
  plugins: [],
};
