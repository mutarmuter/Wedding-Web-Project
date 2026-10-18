/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF8F5',
        'warm-cream': '#F2EDE4',
        'card-surface': '#FFFFFF',
        'deep-charcoal': '#1C1B1A',
        'muted-slate': '#5C5854',
        'hairline-warm': '#E5DFD7',
        'warm-espresso': '#3D342E',
        'soft-ochre': '#8C7863',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        arabic: ['"Scheherazade New"', 'Amiri', 'Traditional Arabic', 'serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(28, 27, 26, 0.04)',
        'card': '0 2px 12px -1px rgba(28, 27, 26, 0.05)',
      },
    },
  },
  plugins: [],
}
