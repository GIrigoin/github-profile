/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "repo-from": "#111729",
      "repo-to": "#1D1B48",
      "search-border": "#3662E3",
      tag: "#20293A",
      "color-bg": "#364153",
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
      fontSize: {
        large: "2rem",
        title: "1.25rem",
        body: "1rem",
        small: "0.75rem",
      },
    },
  },
  plugins: [],
};
