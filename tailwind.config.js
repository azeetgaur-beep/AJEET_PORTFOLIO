/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        ink: '#1C1C1E',
        sage: '#7C9E7A',
        dust: '#C4A882',
        muted: '#9A9A8A',
        surface: '#F2EFE9'
      },
      fontFamily: {
        display: ['"MADE Saonara"', 'Cinzel', 'Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
