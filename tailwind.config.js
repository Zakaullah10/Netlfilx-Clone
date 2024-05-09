/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xxs: "2px",
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        tech: "540px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
