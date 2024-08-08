/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.(vue,js,ts,jsx,tsx)"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#04082e',
          dark: '#634e4e',
          medium: '#cle6f7',
          accent1: '#7a0f3e',
          accent2: '#efasl2',
        },
      },
    },
  },
  plugins: [],
}

