/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  presets: [require('@treasure-project/tailwind-config')],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 80s linear infinite",
        marquee2: "marquee2 80s linear infinite",
      },
      backgroundPosition: {
        "hero-lg": "10% 0, center"
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
      typography: ({ theme }) => ({
        night: {
          css: {
            '--tw-prose-body': theme('colors.night[800]'),
            '--tw-prose-headings': theme('colors.night[900]'),
            '--tw-prose-lead': theme('colors.night[700]'),
            '--tw-prose-links': theme('colors.night[900]'),
            '--tw-prose-bold': theme('colors.night[900]'),
            '--tw-prose-counters': theme('colors.night[600]'),
            '--tw-prose-bullets': theme('colors.night[400]'),
            '--tw-prose-hr': theme('colors.night[300]'),
            '--tw-prose-quotes': theme('colors.night[900]'),
            '--tw-prose-quote-borders': theme('colors.night[300]'),
            '--tw-prose-captions': theme('colors.night[700]'),
            '--tw-prose-code': theme('colors.night[900]'),
            '--tw-prose-pre-code': theme('colors.night[100]'),
            '--tw-prose-pre-bg': theme('colors.night[900]'),
            '--tw-prose-th-borders': theme('colors.night[300]'),
            '--tw-prose-td-borders': theme('colors.night[200]'),
            '--tw-prose-invert-body': theme('colors.night[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.night[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.night[400]'),
            '--tw-prose-invert-bullets': theme('colors.night[600]'),
            '--tw-prose-invert-hr': theme('colors.night[700]'),
            '--tw-prose-invert-quotes': theme('colors.night[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.night[700]'),
            '--tw-prose-invert-captions': theme('colors.night[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.night[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.night[600]'),
            '--tw-prose-invert-td-borders': theme('colors.night[700]'),
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp"), require('@tailwindcss/typography')],
};
