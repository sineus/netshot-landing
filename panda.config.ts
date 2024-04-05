import { defineConfig } from "@pandacss/dev";
import { colors, globalCss, textStyles } from "./src/theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  importMap: "@styled-system",

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          body: { value: "var(--font-sf-pro)" },
          heading: { value: "var(--font-sf-pro)" },
        },
        colors,
      },
    },
  },

  lightningcss: true,

  // The output directory for your css system
  outdir: "styled-system",
});
