import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
