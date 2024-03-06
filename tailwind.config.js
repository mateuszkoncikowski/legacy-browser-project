import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#000000", // Replace with actual hex color
        input: "#FFFFFF", // Replace with actual hex color
        ring: "#FF0000", // Replace with actual hex color
        background: "#CCCCCC", // Replace with actual hex color
        foreground: "#333333", // Replace with actual hex color
        primary: {
          DEFAULT: "#0000FF", // Replace with actual hex color
          foreground: "#FFFFFF", // Replace with actual hex color
        },
        secondary: {
          DEFAULT: "#00FF00", // Replace with actual hex color
          foreground: "#000000", // Replace with actual hex color
        },
        destructive: {
          DEFAULT: "#FF0000", // Replace with actual hex color
          foreground: "#FFFFFF", // Replace with actual hex color
        },
        muted: {
          DEFAULT: "#999999", // Replace with actual hex color
          foreground: "#FFFFFF", // Replace with actual hex color
        },
        accent: {
          DEFAULT: "#FF9900", // Replace with actual hex color
          foreground: "#000000", // Replace with actual hex color
        },
        popover: {
          DEFAULT: "#CCCCCC", // Replace with actual hex color
          foreground: "#333333", // Replace with actual hex color
        },
        card: {
          DEFAULT: "#FFFFFF", // Replace with actual hex color
          foreground: "#000000", // Replace with actual hex color
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};
