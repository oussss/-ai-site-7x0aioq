/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",
        secondary: "#F4E4C1",
        accent: "#2C1810",
        neutral: {
          50: "#FAF9F6",
          100: "#F5F0E6",
          200: "#EFECD9",
          300: "#E8E0C9",
          400: "#D9D0B3",
          500: "#C7B89C",
          600: "#A8937E",
          700: "#8A7564",
          800: "#695B4A",
          900: "#4A3D32"
        },
        semantic: {
          success: "#228B22",
          error: "#DC143C",
          warning: "#FF8C00",
          info: "#4169E1"
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lora", "serif"]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}