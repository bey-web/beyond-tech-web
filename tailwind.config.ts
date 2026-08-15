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
          500: "#D97706",
          600: "#B45F04",
        },
        muted: "#5B6472",
        border: "#E4E7EC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
