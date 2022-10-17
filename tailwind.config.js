module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "corious-blue": "#367fa9",
        "light-blue": "#3c8dbc",
      },
      boxShadow: {
        default: "0 6px 12px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
