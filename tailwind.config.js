/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0E2A47", deep: "#081B2F", soft: "#1B3D5E" },
        paper: "#F5F4F0",
        ink: "#101A2B",
        muted: "#5B6676",
        hairline: "#E2E0D8",
        signal: { DEFAULT: "#F2A516", ink: "#7A4E00", soft: "#FCEBC3" },
        whatsapp: { DEFAULT: "#1A9E4F", hover: "#158540" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 1px 2px rgba(14,42,71,0.06), 0 8px 24px -12px rgba(14,42,71,0.18)",
      },
    },
  },
  plugins: [],
};
