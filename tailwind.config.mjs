// tailwind.config.cjs
/* eslint-disable-next-line @typescript-eslint/no-require-imports */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("light", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          // generates rules like:
          // .light .light\:bg-white { background-color: white; }
          return `.light .${e(`light${separator}${className}`)}`;
        });
      });
    }),
  ],
};
