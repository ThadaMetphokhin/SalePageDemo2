/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        // เปลี่ยน 'YourFontName' เป็นชื่อฟอนต์ที่คุณโหลดมา เช่น 'Anuphan'
        sans: ['Prompt', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}