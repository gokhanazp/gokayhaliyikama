/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A192F", // Koyu lacivert
          light: "#112240",
        },
        accent: {
          DEFAULT: "#D4AF37", // Altın sarısı
          light: "#F4D03F",
        },
        secondary: {
          DEFAULT: "#E6F1FF", // Temiz mavi/beyaz
          light: "#F0F7FF",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
