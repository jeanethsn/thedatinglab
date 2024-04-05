/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-color": "#E94445",
      "pink-ligth": "#F4C9DD",
      "yellow": "#F8ED9B",
      "pink-strong": "#E8598E",
      "red-orange": "#DF6761",
      "pink-grey": "#F1DDDA",
      "pink-cream": "#FBF6F3",
      "grey-light": "#E5E6E5",
      "grey-midligth": "#B2B3B2",
      "grey": "#808180",
      "grey-dark": "#51494E",
      "pink": "#EED6D9",
      "pink-peach": "#E27A8C",
      "white-text": "#FFFFFF",
      "pink-grey-bg": "#EDE8EC",
    },
    fontFamily: {
      nunito: ["var(--font-nunito)"],
      madi: ["var(--font-madi)"],
    },
    screens: {
      small: "400px",
      lg: "930px",
      ol: "1400px",
      xxl: "1600px",
    },
  },
  plugins: [],
});
