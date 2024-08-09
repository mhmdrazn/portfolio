import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
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
            },
          },
        },
      })
  ],
};
export default config;
