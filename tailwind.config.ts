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
        burgundy: {
          950: "#2d0a12",
          900: "#4c1121",
          800: "#62162a",
          700: "#7d1d35",
          600: "#9b2545",
          500: "#b83056",
          400: "#d94d73",
          300: "#e88aa5",
          200: "#f5b0c4",
          100: "#fce4ec",
          50: "#fef1f5",
        },
        surface: {
          DEFAULT: "#fafaf9",
          low: "#f5f5f4",
          card: "#ffffff",
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
      fontSize: {
        "display-lg": [
          "clamp(2.5rem,5vw,4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.8rem,3.5vw,2.8rem)",
          { lineHeight: "1.15" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.8" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      backdropBlur: {
        xl: "24px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "scale-in":
          "scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.88)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "silk-btn": "linear-gradient(135deg, #4c1121 0%, #9b2545 100%)",
        "hero-gradient":
          "linear-gradient(160deg, #2d0a12 0%, #4c1121 50%, #62162a 100%)",
        "card-hover": "linear-gradient(135deg, #fef1f5 0%, #fce4ec 100%)",
      },
      boxShadow: {
        card: "0 2px 20px rgba(76,17,33,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "card-lg":
          "0 8px 40px rgba(76,17,33,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        btn: "0 4px 20px rgba(155,37,69,0.4)",
        modal:
          "0 24px 80px rgba(76,17,33,0.2), 0 8px 24px rgba(0,0,0,0.12)",
        nav: "0 4px 30px rgba(76,17,33,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
