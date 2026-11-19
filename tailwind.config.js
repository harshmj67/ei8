/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Override Tailwind's default "blue" with our brand steel-teal
        // (matches the "E" in the Ei8 logo). All existing blue-* classes
        // across the app will now use these brand-tinted shades.
        blue: {
          50:  '#f0f7f9',
          100: '#d9eaf0',
          200: '#b3d5e1',
          300: '#7eb3c7',
          400: '#4a8da6',
          500: '#2a7395',
          600: '#23687F', // primary brand (buttons, links, accents)
          700: '#1d5266',
          800: '#1a4452',
          900: '#163745',
        },
        // Emerald accent (matches the "8" in the logo)
        brand: {
          accent:      '#29CC83',
          'accent-2':  '#10B981',
          mint:        '#7CE0C0',
          dark:        '#0F2A33',
        },
      },
    },
  },
  plugins: [],
};




