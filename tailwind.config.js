/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  theme: {
    extend: {
      animation: {
        "loop-scroll-left": "loop-scroll-left 5s linear infinite",
        "loop-scroll-right": "loop-scroll-right 20s linear infinite"
      },
      keyframes: {
        "loop-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(20%)" }
        },
        "loop-scroll-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" }
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui"),require('tailwindcss-animated')],
}

