/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)'],
        jacquarda: ['"Jacquarda Bastarda 9"', 'serif'], 
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        project: 'rgb(var(--project))',
        accent: 'rgb(var(--accent))',
        accent2: 'rgb(var(--accent2))',

      },
      animation: {
        "slide-down": "slideDown 1s ease-in-out forwards",
        "slide-up": "slideUp 1s ease-in-out forwards",

      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
