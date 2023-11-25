/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
        "noto-Sans": ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        logoColor: "rgb(255 100 82)",
      },
      backgroundColor: {
        primary: "rgb(232, 98, 84)",
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
};
