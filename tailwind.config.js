/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    cursor: {
      'copyx': 'url(./src/assets/cursor-copy.png), default',
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '481px',
      // => @media (min-width: 768px) { ... }

      'lg': '641px',
      // => @media (min-width: 1024px) { ... }

      'xl': '961px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1025px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1281px'
    }
  },
  plugins: [],
}

