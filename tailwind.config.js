/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      prodigy: ["Prodigy Sans", "sans-serif"],
    },
    colors: {
      primary: "#BDFF3D",
      secondary: "#FFC727",
      neutral: "#E2EBED",

      success: "#BDFF3D",
      danger: "#FF4C16",
      info: "#00B1F3",
      label: "#26330D",

      // Color style
      // green: "#C3FF4E",
      // yellow: "#FFC727",
      // orange: "#FF4C16",
      // blue: "#00B1F3",

      // Neutral color
      white: "#F7F8FF",
      grey: "#E2EBED",
      dark_grey: "#92988E",
      black: "#26330D",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
