module.exports = {
  theme: {
    extend: {
      colors: {
        new: {
          "light-background": "#FFFAEF",
          night: {
            100: "#FAFAFA",
            200: "#E7E8E9",
            300: "#CFD1D4",
            400: "#B7BABE",
            500: "#9FA3A9",
            600: "#70747D",
            700: "#404652",
            800: "#1F2D45",
            900: "#19253A",
            1000: "#172135",
            1100: "#131D2E",
            1200: "#0D1420",
            1300: "#0A111C",
          },
          ruby: {
            100: "#FCE9E9",
            200: "#F8D4D4",
            300: "#F5BEBE",
            400: "#F1A8A8",
            500: "#EE9393",
            600: "#EA7D7D",
            700: "#E76767",
            800: "#E35151",
            900: "#DC2626",
            1000: "#C62222",
            1100: "#841717",
          },
          honey: {
            100: "#FFFDF7",
            200: "#FFFAEF",
            300: "#FEF5DF",
            400: "#FEF0D0",
            500: "#FDEBC0",
            600: "#FDE7B0",
            700: "#FCE2A0",
            800: "#FCDD90",
            900: "#FBD881",
            1000: "#FBD371",
            1100: "#FACE61",
          },
        },
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
};
