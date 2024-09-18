/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "light-gray-1": "#e5e5e5",
        "brand-color-50": "#f0f9ff",
        "brand-color-100": "#e0f2fe",
        "brand-color-200": "#bae6fd",
        "brand-color-300": "#7dd3fc",
        "brand-color-400": "#38bdf8",
        "brand-color-500": "#0ea5e9",
        "brand-color-600": "#0284c7",
        "brand-color-700": "#0369a1",
        "brand-color-800": "#075985",
        "brand-color-900": "#0c4a6e",
      },
    },
    screens: {
      smallTab: "640px",
      largeTab: "768px",
      largeTabHorizontal: "1250px",
      largeScreen: "1200px",
    },
  },
  plugins: [],
};
