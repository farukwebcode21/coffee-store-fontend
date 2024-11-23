/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/images/Rectangle 2.png')",
        popularItem: "url('./src/assets/images/more/1.png')",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
