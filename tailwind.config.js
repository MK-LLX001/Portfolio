/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotosansLao: ['Noto Sans Lao', 'sans-serif'],
      },
      colors: {
        grey: '#F3F3F3',
        'dark-grey': '#6B6B6B',
        dark: '#1E201E',
        purple: "#8B46FF",
      Primary: "#186F65",
      Secondary: "#FF4081",
      "Secondary Dark": "#ce3447",
      },
    },
  },
  plugins: [],
};

