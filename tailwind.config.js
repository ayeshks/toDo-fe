/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-background':"url('/src/assets/bg-react.jpg')"
      }
    },
  },
  plugins: [],
}

