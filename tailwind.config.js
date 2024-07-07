/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: '#eeeeee',
        accent: '#ffc639',
        secondary: '#1e1e1e',
        dark: '#222831',
        ungu: '#6e4f9d',
        putih: '#ffffff',
        cream: '#FEFDED',
        red: '#FA7070',
        background: '#f0f2f5',
        biru: '#4164b2',
        abu: '#444',
        abu1: '#e4e6eb',
        abu2: '#18212d',
        abu3: '#101924'
      }
    }
  },
  plugins: [],
};
