/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #FF5733, #4834d4)",
        "custom-gradient-2": "linear-gradient(to right, #90cdf4, #805ad5)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      let allColors = {};
      let colors = theme("colors");

      for (let color in colors) {
        if (typeof colors[color] === "object") {
          for (let shade in colors[color]) {
            allColors[`${color}-${shade}`] = colors[color][shade];
          }
        } else {
          allColors[color] = colors[color];
        }
      }

      const colorVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": colorVars,
      });
    }),
    addVariablesForColors,
  ],
};

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors(options) {
  const addBase = options.addBase;
  const theme = options.theme;

  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
