import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float-down": "floatDown 1.5s ease-in-out infinite",
        pulse: "pulse 1.5s ease-in-out infinite",
        "shuffle-right": "shuffleRight 0.35s ease-out forwards",
        "shuffle-left": "shuffleLeft 0.35s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
        shuffleRight: {
          "0%": { opacity: "0", transform: "translateX(70px) rotate(2deg) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg) scale(1)" },
        },
        shuffleLeft: {
          "0%": { opacity: "0", transform: "translateX(-70px) rotate(-2deg) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
