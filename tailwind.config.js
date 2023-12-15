/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '390px',
      // => @media (max-width: 390px) { ... }

      'laptop': '1024px',
      // => @media (max-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (max-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

