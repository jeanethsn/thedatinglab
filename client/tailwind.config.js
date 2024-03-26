/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-color": "#E94445",
      "pink-ligth": "#F4C9DD",
      yellow: "#F8ED9B",
      "pink-strong": "#E8598E",
      "red-orange": "#DF6761",
      "pink-grey": "#F1DDDA",
      "pink-cream": "#FBF6F3",
      "grey-light": "#E5E6E5",
      "grey-midligth": "#B2B3B2",
      grey: "#808180",
      "grey-dark": "#EED6D9",
      pink: "#EED6D9",
    },
  },
  plugins: [require("flowbite/plugin")],
};
