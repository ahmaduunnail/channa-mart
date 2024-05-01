/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        prodigy: ["Prodigy Sans", "sans-serif"],
      },
      colors: {
        // Color theme
        primary: "#BDFF3D",
        secondary: "#FFC727",
        neutral: "#E2EBED",

        success: "#BDFF3D",
        danger: "#FF4C16",
        info: "#00B1F3",
        label: "#26330D",
        
        //Custom colors
        // orange: "#FF4C16",
        // blue: "#00B1F3",
        white: "#F7F8FF",
        dark_grey: "#92988E",
        black: "#26330D"
      },
    },
  },
  plugins: [],
};
