/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D1117',
        'secound-color':'#161B22',
        'light-text':"8B949E",
        "text-color":"#ffff",
      },
    },
  },
  plugins: [],
}