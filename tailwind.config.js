/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  presets: [require("@treasure-dev/tailwind-config")],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "100rem",
      },
      borderRadius: {
        tag: "0.55rem",
        "1.9xl": "15px",
        "2.5xl": "1.25rem",
        "1.5xl": "10px",
      },
      colors: {
        "tr-green": "#4FC74F",
        "tr-blue": "#28A0F0",
        partner: {
          background: "#020228",
        },
      },
      backgroundImage: {
        "gradient-partner-hero":
          "linear-gradient(104deg, #020228 55.79%, #396AF3 115.73%)",
        "gradient-partner-placeholder":
          "linear-gradient(156deg, #001348 74.03%, #396AF3 167.04%)",
        "gradient-landing-hero":
          "linear-gradient(270deg, rgba(13, 20, 32, 0.00) 48.68%, rgba(13, 20, 32, 0.65) 100%)",
        "gradient-landing-bridgeworld":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 51.04%, rgba(0, 0, 0, 0.20) 100%)",
        "gradient-create-shiny":
          "radial-gradient(258.32% 208.99% at 2.98% 6.37%, #FEC99D 0%, #FEE6B7 20%, #9FFFEF 39.5%, #78D3F4 58.5%, #58B6FD 79%, #7370CB 100%)",
      },
      animation: {
        marquee: "marquee 80s linear infinite",
        marquee2: "marquee2 80s linear infinite",
        "marquee-left": "marquee-left 80s linear infinite",
        "marquee-left2": "marquee-left2 80s linear infinite",
        marquee3: "marquee3 var(--marquee-duration) linear infinite",
        "fade-in": "fade-in 0.5s linear forwards",
        "move-up-down": "move-up-down 4s ease-in-out infinite",
        "move-up-down2": "move-up-down2 5s ease-in-out .5s infinite",
        stretch: "stretch-animation 3s linear infinite",
        pulse2: "pulse2 1s none infinite",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
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
        marquee3: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-left2": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        "move-up-down": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-32px)" },
          "100%": { transform: "translateY(0)" },
        },
        "move-up-down2": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
          "100%": { transform: "translateY(0)" },
        },
        "stretch-animation": {
          "0%": { width: "100%" },
          "50%": { width: "1000%" },
          "100%": { width: "100%" },
        },
        pulse2: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      typography: ({ theme }) => ({
        night: {
          css: {
            "--tw-prose-body": theme("colors.night[800]"),
            "--tw-prose-headings": theme("colors.night[900]"),
            "--tw-prose-lead": theme("colors.night[700]"),
            "--tw-prose-links": theme("colors.night[900]"),
            "--tw-prose-bold": theme("colors.night[900]"),
            "--tw-prose-counters": theme("colors.night[600]"),
            "--tw-prose-bullets": theme("colors.night[400]"),
            "--tw-prose-hr": theme("colors.night[300]"),
            "--tw-prose-quotes": theme("colors.night[900]"),
            "--tw-prose-quote-borders": theme("colors.night[300]"),
            "--tw-prose-captions": theme("colors.night[700]"),
            "--tw-prose-code": theme("colors.night[900]"),
            "--tw-prose-pre-code": theme("colors.night[100]"),
            "--tw-prose-pre-bg": theme("colors.night[900]"),
            "--tw-prose-th-borders": theme("colors.night[300]"),
            "--tw-prose-td-borders": theme("colors.night[200]"),
            "--tw-prose-invert-body": theme("colors.night[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.night[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.night[400]"),
            "--tw-prose-invert-bullets": theme("colors.night[600]"),
            "--tw-prose-invert-hr": theme("colors.night[700]"),
            "--tw-prose-invert-quotes": theme("colors.night[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.night[700]"),
            "--tw-prose-invert-captions": theme("colors.night[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.night[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.night[600]"),
            "--tw-prose-invert-td-borders": theme("colors.night[700]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
