const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({ addComponents }) {
      const fadeTransition = {
        ".fade-enter-active, .fade-leave-active": {
          transition: "opacity 500ms ease-out",
        },
        ".fade-enter-from, .fade-leave-to": {
          opacity: "0",
        },
        ".fade-enter-active": {
          transitionDelay: "500ms",
        },
      };

      const slideFadeTransition = {
        ".slide-fade-enter-active, .slide-fade-leave-active": {
          transition: "all 500ms ease-out",
        },
        ".slide-fade-enter-from, .slide-fade-leave-to ": {
          transform: "translateX(-20px)",
          opacity: "0",
        },
        ".slide-fade-enter-active": {
          transitionDelay: "500ms",
        },
      };

      addComponents(fadeTransition, slideFadeTransition);
    }),
  ],
};
