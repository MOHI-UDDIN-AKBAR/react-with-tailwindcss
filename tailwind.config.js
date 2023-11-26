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
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      boxShadow: {
        lg: "0px 0px 6px 3px rgba(0, 0, 0, 0.06),0px 2px 5px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
};
