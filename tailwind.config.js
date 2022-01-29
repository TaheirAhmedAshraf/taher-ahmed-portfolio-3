const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "#ECF0EE",
        "background-dark": "#212428",

        "primary-light": "#FF3E6C",
        "primary-dark": "#DD1343",

        "dark-800": "#1F2937",
        "light-800": "#ECF0EE",

        "dark-400": "#4b5563",
        "light-400": "#BEBEBE",

        "dark-200": "#9ca3af",
      },
    },
    container: {
      ...defaultTheme.container,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      shadow1: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
      shadow2: "5px 5px 5px #1C1E22, -5px -5px 5px #1C1E22",
      shadow3: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
    },
  },
  plugins: [],
  darkMode: "class",
};
