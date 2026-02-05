/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        charcoal: "#0b0f17",
        ink: "#0f172a",
        accent: {
          teal: "#2dd4bf",
          purple: "#8b5cf6",
          blue: "#38bdf8",
        },
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(45,212,191,0.2), transparent 60%)",
      },
      boxShadow: {
        soft: "0 20px 45px -30px rgba(15, 23, 42, 0.8)",
      },
    },
  },
  plugins: [],
};
