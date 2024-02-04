/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/style.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "var(--pale-blue)",
        "bright-blue": "var(--bright-blue)",
        "very-pale-blue": "var(--very-pale-blue)",
        "desaturated-blue": "var(--desaturated-blue)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        "red-hat": ["var(--red-hat-display)", "sans-serif"],
      },
      boxShadow: {
        "css-scan-73":
          "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
        "css-scan-80": "rgba(0, 0, 0, 0.2) 0px 40px 40px -7px",
        "css-scan-12":
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
};
