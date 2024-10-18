/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#DB8F8FFF",
        lightGray: "#F1F3F4",
        customRed1:"#8C3232FF",
      },
    },
  },
  plugins: [],
};
