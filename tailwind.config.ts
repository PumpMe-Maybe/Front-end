import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        overlayHide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        modalSlideIn: {
          from: {
            transform: "translateX(-50%) translateY(0%) scale(0.8)",
            opacity: "0",
          },
          to: {
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            opacity: "1",
          },
        },
        modalSlideDown: {
          from: {
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            opacity: "1",
          },
          to: {
            transform: "translateX(-50%) translateY(0%) scale(0.95)",
            opacity: "0",
          },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayHide: "overlayHide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        modalSlideIn: "modalSlideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        modalSlideDown: "modalSlideDown 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
