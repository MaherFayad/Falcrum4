/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      colors: {
        dark: {
          colors: {
            background: "#E9ECEA",
          },
        },
        light: {
          colors: {
            background: "#E9ECEA",
          },
        },
      },
      
    },
  },
  plugins: [],
}
