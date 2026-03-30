import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          900: "#4c1121",
          800: "#62162a",
          700: "#7d1d35",
          600: "#9b2545",
          200: "#f5b0c4",
          100: "#fce4ec",
          50: "#fef1f5",
        },
        surface: {
          DEFAULT: "#fafaf9",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-noto-serif)",
          "var(--font-amiri)",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-manrope)",
          "var(--font-cairo)",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 2px 20px rgba(76,17,33,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        btn: "0 4px 20px rgba(155,37,69,0.4)",
        modal:
          "0 24px 80px rgba(76,17,33,0.2), 0 8px 24px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
