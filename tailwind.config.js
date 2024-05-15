/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'primary': ['Lemon', 'sans-serif'],
      'secondary': ['Philosopher', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#002349',
        'secondary': '#00675B', // #4B9CD3 
      },
    },
  },
  plugins: [],
}

