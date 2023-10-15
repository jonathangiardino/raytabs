import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["13px", "16px"],
      },
      animation: {
        "slide-right": "slideRightAndBack 0.3s ease-in-out",
        "fade-in": "fadeIn 0.15s ease-in-out",
      },
      keyframes: {
        slideRightAndBack: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
