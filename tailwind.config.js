/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        polarNight: {
          nord0: "#2e3440",
          nord1: "#3b4252",
          nord2: "#434c5e",
          nord3: "#4c566a",
        },
        snowStorm: {
          nord4: "#d8dee9",
          nord5: "#e5e9f0",
          nord6: "#eceff4",
        },
        frost: {
          nord7: "#8fbcbb",
          nord8: "#88c0d0",
          nord9: "#81a1c1",
          nord10: "#5e81ac",
        },
        aurora: {
          nord11: "#bf616a",
          nord12: "#d08770",
          nord13: "#ebcb8b",
          nord14: "#a3be8c",
          nord15: "#b48ead",
        },
    
      },
      fontFamily: {
        'rubik': ["Rubik", "sans-serif"],
      },
      animation: {
        "loop-scroll-left": "loop-scroll-left 5s linear infinite",
        "loop-scroll-right": "loop-scroll-right 20s linear infinite",
        "bg-fade": "bg-fade linear infinite",
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
        "bg-fade": {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "current" }
        },
        
      }
    },
  },
  daisyui: {
    themes: [
      {
        nordDark: {
          "color-scheme": "dark",
          "primary": "#88c0d0", //nord8
          // "primary-content": "", //
          "secondary": "#8fbcbb", //nord7
          // "secondary-content": "", //
          "accent": "#81a1c1", //nord9
          // "accent-content": "", //
          "neutral": "#5e81ac", //nord10
          "neutral-content": "#e5e9f0", //nord4
          "base-100": "#2e3440", //nord0
          "base-200": "#3b4252", //nord1
          "base-300": "#434c5e", //nord2
          "base-content": "#d8dee9", //nord4
          "info": "#b48ead", //nord15
          // "info-content": "", //
          "success": "#a3be8c", //nord14
          // "success-content": "", //
          "warning": "#ebcb8b", //nord13
          // "warning-content": "", //
          "error": "#bf616a", //nord11
          // "error-content": "", //
        },
        nordLight: {
          "color-scheme": "dark",
          "primary": "#88c0d0", //nord8
          // "primary-content": "", //
          "secondary": "#8fbcbb", //nord7
          // "secondary-content": "", //
          "accent": "#81a1c1", //nord9
          // "accent-content": "", //
          "neutral": "#5e81ac", //nord10
          "neutral-content": "#e5e9f0", //nord4
          "base-100": "#d8dee9", //nord0
          "base-200": "#e5e9f0", //nord1
          "base-300": "#eceff4", //nord2
          "base-content": "#2e3440", //nord6
          "info": "#b48ead", //nord15
          // "info-content": "", //
          "success": "#a3be8c", //nord14
          // "success-content": "", //
          "warning": "#ebcb8b", //nord13
          // "warning-content": "", //
          "error": "#bf616a", //nord11
          // "error-content": "", //
        },
      },
      "light",
      "dark",
    ],
    darkTheme: "nordDark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui"),require('tailwindcss-animated')],
}

