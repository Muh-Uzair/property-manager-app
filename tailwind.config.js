/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "light-gray-1": "#e5e5e5",
        "brand-color-400": "#38bdf8",
        "brand-color-500": "#0ea5e9",
        "brand-color-600": "#0284c7",
        "brand-color-700": "#0369a1",
      },
    },
  },
  plugins: [],
};
