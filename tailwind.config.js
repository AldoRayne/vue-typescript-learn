module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thin: ["Inter Thin", "sans-serif"],
        regular: ["Inter Regular", "sans-serif"],
        bold: ["Inter Bold", "sans-serif"],
      },
      colors: {
        coriousBlue: "#367fa9",
        lightBlue: "#3c8dbc",
        cinnabar: "#dd4b39",
      },
      boxShadow: {
        default: "0 6px 12px rgba(0, 0, 0, 0.18)",
      },
      transitionProperty: {
        width: "width",
        marginLeft: "margin-left",
      },
    },
  },
};
