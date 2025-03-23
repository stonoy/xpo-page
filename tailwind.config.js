/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#71a3c1",
        secondary: "#612163",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#71a3c1",
        "secondary": "#612163",
          "accent": "#EC4899",
          "neutral": "#374151",
          "base-100": "#ffffff",
          "info": "#3B82F6",
          "success": "#22C55E",
          "warning": "#F97316",
          "error": "#EF4444",
        },
      },
    ],
  }
}