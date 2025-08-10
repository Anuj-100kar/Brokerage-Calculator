export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cool-pattern': "url('/back.jpg')",
      },
      boxShadow: {
        'glow-pink': '0 0 12px rgba(236, 97, 190, 0.8)', // pink-500 glow
      },
    },
  },
  plugins: [],
};
