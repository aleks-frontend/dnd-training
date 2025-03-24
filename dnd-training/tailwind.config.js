/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Ensure Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        primary: {
          500: "#3b82f6",
          700: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};
