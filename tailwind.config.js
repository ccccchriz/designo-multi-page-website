/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        site: "69.4375rem",
      },
    },
    fontFamily: {
      primary: ["Jost*", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    fontSize: {
      "heading-s": "1.625rem",
      "heading-m": "2.5rem",
      "heading-l": "3rem",
      "mobile-heading-s": "1.25rem",
      "mobile-heading-m": "1.75rem",
      "mobile-heading-l": "2rem",
      body: "1rem",
      "body-sm": "0.9375rem",
      link: "0.875rem",
      "mobile-link": "1.5rem",
    },
    colors: {
      peach: "hsl(11, 73%, 66%)",
      "light-peach": "hsl(11, 100%, 80%)",
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(210, 17%, 95%)",
      "dark-gray": "hsl(264, 5%, 20%)",
      black: "hsl(270, 3%, 11%)",
    },
    screens: {
      tablet: "36rem",
      desktop: "54rem",
    },
  },
  plugins: [],
};
