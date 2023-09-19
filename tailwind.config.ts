/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#EBB200",
        dark: "#4E3D09",
        gray: "#716F6B",
      },
    },
  },
  // plugins: [require("@tailwindcss/typography")],
  plugins: [],
};
