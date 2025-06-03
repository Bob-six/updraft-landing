import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"
import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    // your paths
    "./src/**/*.{ts,tsx,astro}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          "50%": {
            backgroundPosition: "350% 50%, 350% 50%",
          },
          "100%": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
    "--white": "rgb(255 255 255)",
    "--black": "rgb(0 0 0)",
    "--transparent": "transparent",
  })
}

export default config
