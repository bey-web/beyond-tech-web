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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          DEFAULT: "#0A0E17",
          800: "#141A26",
          700: "#1E2635",
        },
        paper: "#FFFFFF",
        surface: "#F6F7F9",
        primary: {
          DEFAULT: "#1B3A8A",
          50: "#EDF1FB",
          100: "#DBE3F6",
          600: "#1B3A8A",
          700: "#152E6E",
        },
        accent: {
          DEFAULT: "#D97706",
          50: "#FEF3E2",
          300: "#F5C077",
          500: "#D97706",
          600: "#B45F04",
        },
        muted: "#5B6472",
        border: "#E4E7EC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgb(10 14 23 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(10 14 23 / 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(217 119 6 / 0.15), 0 8px 40px -8px rgb(217 119 6 / 0.35)",
        "glow-primary": "0 0 0 1px rgb(27 58 138 / 0.15), 0 8px 40px -8px rgb(27 58 138 / 0.45)",
        card: "0 1px 2px rgb(10 14 23 / 0.04), 0 12px 32px -12px rgb(10 14 23 / 0.12)",
        "card-hover": "0 1px 2px rgb(10 14 23 / 0.04), 0 24px 48px -16px rgb(10 14 23 / 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
