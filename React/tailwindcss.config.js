/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif","su"],
        timeline: ['var(--timeline-fonts-sans)'],

      },
      colors: {
        primaryText: "rgb(24, 13, 7)",
      },
    },
  },
  plugins: [],
};
