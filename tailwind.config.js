/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "repo-from": "#111729",
      "repo-to": "#1D1B48",
      "search-border": "#3662E3",
      tag: "#20293A",
      "app-bg": "#364153",
      "secondary-text": "#4A5567",
      "main-text": "#CDD5E0",
    },
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "app-bg": "url('./assets/hero-image-github-profile.png')",
      },
    },
  },
  plugins: [],
};
