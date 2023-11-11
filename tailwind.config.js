/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: "#FF5500",
        paleOrange: "#FED6C6",
        veryDarkBlue: "#1B1E34",
        darkGrayishBlue: "#3B426A",
        grayishBlue: "#A0AFC0",
        lightGrayishBlue: "#F0F5FC",
        blackLightbox: "rgba(0, 0, 0, 0.75)", // 75% opacity for lightbox background
      },
    },
    screens: {
      xs: "0px",
      sm: "500px",
      md: "800px",
      lg: "1024px",
    },
  },
  plugins: [],
};
