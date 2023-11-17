/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-cyan-blue": "#F5F7FA",
        "dark-cyan-blue": "#2E3C4F",
        "alice-blue": "#EDF0F2",
        "pale-aqua": "#CCD7EC",
        "blue-blue": "#575F80",
        "dark-blue": "#102136",
        "light-blue": "#E9ECEF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
