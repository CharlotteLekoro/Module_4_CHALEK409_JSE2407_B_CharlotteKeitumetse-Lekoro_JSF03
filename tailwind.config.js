/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.(vue,js,ts,jsx,tsx)"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ef8686',
          dark: '#cc0000',
          medium: '#a44e40',
          accent1: '#7a0f3e',
          accent2: '#efasl2',
        },
      },
    },
  },
  plugins: [],
}

