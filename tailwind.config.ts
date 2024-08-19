import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      colors: {
        black: "#121212",
        green: "#60D07F",
        purple: "#735CFF",
        blue: "#7BC0FF",
      },
      backgroundImage: {
        "gradient-glass": 'linear-gradient(89deg, rgba(246, 246, 246, 0.10) -23.92%, rgba(255, 255, 255, 0.20) 98.88%)',
        "gradient-text": 'linear-gradient(90deg, #7BC0FF -7.7%, #725CFF 78.62%)',
        "gradient-button": 'linear-gradient(89deg, rgba(246, 246, 246, 0.10), rgba(255, 255, 255, 0.20))',
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  darkMode: "class",
  
  plugins: [
      nextui({
        themes: {
          "purple-dark": {
            extend: "dark", // <- inherit default values from dark theme
            colors: {
              background: "#121212",
              foreground: "#121212",
              primary: {
                50: "#121212",
                100: "#121212",
                200: "#121212",
                300: "#121212",
                400: "#121212",
                500: "#121212",
                600: "#121212",
                700: "#121212",
                800: "#121212",
                900: "#121212",
                DEFAULT: "#121212",
                foreground: "#121212",
              },
              focus: "#121212",
            },
            layout: {
              disabledOpacity: "0.3",
              radius: {
                small: "4px",
                medium: "6px",
                large: "8px",
              },
              borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
              },
              textShadow: {
                'glow': '0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
              },
            },
          },
        },
      }), addVariablesForColors, 
      function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
        addUtilities({
          '.text-glow': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          },
        });
      },
  ], 
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
