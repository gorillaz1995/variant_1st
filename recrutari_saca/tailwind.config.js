/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        bleu_de_france: {
          DEFAULT: "#3988EA",
          100: "#061b35",
          200: "#0b3569",
          300: "#11509e",
          400: "#166bd2",
          500: "#3988ea",
          600: "#60a0ee",
          700: "#88b8f2",
          800: "#b0d0f7",
          900: "#d7e7fb",
        },
        polynesian_blue: {
          DEFAULT: "#104C95",
          100: "#030f1e",
          200: "#061e3b",
          300: "#092d59",
          400: "#0c3c76",
          500: "#104c95",
          600: "#166bd2",
          700: "#438feb",
          800: "#81b4f2",
          900: "#c0daf8",
        },
        yale_blue: {
          DEFAULT: "#0D3F7D",
          100: "#030d19",
          200: "#051932",
          300: "#08264b",
          400: "#0a3364",
          500: "#0d3f7d",
          600: "#1461c0",
          700: "#3586ea",
          800: "#78aff1",
          900: "#bcd7f8",
        },
        picton_blue: {
          DEFAULT: "#2FAAF3",
          100: "#032437",
          200: "#06486e",
          300: "#0a6ca5",
          400: "#0d90dc",
          500: "#2faaf3",
          600: "#59bcf5",
          700: "#83cdf8",
          800: "#acdefa",
          900: "#d6eefd",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
      },
    },
    fontFamily: {
      custom_1: ["custom_1", "sans-serif"],
      custom_2: ["custom_2", "sans-serif"],
      custom_3: ["custom_3", "sans-serif"],
    },
  },
  plugins: [],
};
