// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Whyte", ...defaultTheme.fontFamily.sans],
        mono: ["GroteskSemi", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        night: {
          100: "#E7E8E9",
          200: "#CFD1D4",
          300: "#B7BABE",
          400: "#9FA3A9",
          500: "#888C93",
          600: "#70747D",
          700: "#404652",
          800: "#282F3D",
          900: "#101827",
        },
        ruby: {
          100: "#FCE9E9",
          200: "#F8D4D4",
          300: "#F5BEBE",
          400: "#F1A8A8",
          500: "#EE9393",
          600: "#EA7D7D",
          700: "#E76767",
          800: "#E03C3C",
          900: "#DC2626",
          1400: "#841717",
        },
        honey: {
          25: "#FFFDF7",
          50: "#FFFAEF",
          100: "#FEF5DF",
          200: "#FEF0D0",
          300: "#FDEBC0",
          400: "#FDE7B0",
          500: "#FCE2A0",
          600: "#FCDD90",
          700: "#FBD881",
          800: "#FBD371",
          900: "#FACE61",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
