/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      fontFamily: {
        'agbalumo': ['Agbalumo', 'system-ui'],
        'concert-one': ['Concert One', 'sans-serif'],
        'hammersmith-one': ['Hammersmith One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        Grey: "#A6A6A6",
        Blue: "#004AAD",
        LightBlue: "#E5EDF7",
        White: "#fefffd",
        Background: "#1a1d26",
      },
    },
  },
  plugins: [require("daisyui")],
};
