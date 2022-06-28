/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("./const");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      maxWidth: {
        "4.5xl": "60rem",
        "8xl": "88rem",
        "9xl": "100rem",
      },
      fontFamily: {
        sans: ["Whyte", ...defaultTheme.fontFamily.sans],
        mono: ["GroteskSemi", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        twitter: "rgb(29, 155, 240)",
        discord: "#5865F2",
        night: colors.night,
        ruby: {
          ...colors.ruby,
          1000: "#C62222",
          1400: "#841717",
        },
        honey: {
          25: "#FFFDF7",
          50: "#FFFAEF",
          ...colors.honey
        },
      },
      borderRadius: {
        tag: "0.55rem",
        button: "0.9rem",
        "1.9xl": "15px",
        "2.5xl": "1.25rem",
        "1.5xl": "10px",
      },
      spacing: {
        6.5: "1.65rem",
        7.5: "30px",
        3.25: "0.775rem",
      },
      animation: {
        marquee: "marquee 80s linear infinite",
        marquee2: "marquee2 80s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
