/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#024CAA", // Bu sizning kerakli rangingiz
        blueM: "#024CAA", // Boshqa rang qo'shish
        orangeM: "#EC8305", // Misol uchun accent rang
      },
      scrollBehavior: ["smooth"],
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          sm: "20px",
          md: "30px",
          lg: "50px",
          xl: "120px",
        },
      },
    },
  },
  plugins: [],
};
