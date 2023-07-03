/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brandRed': '#E3291C',
        'brandBlack': "#1b1b1b",
      },
      dropShadow: {
        'btnShadow': '0px 4px 9px rgba(227, 41, 28, 0.50)',
        'mealShadow': '0px 0px 90px rgba(227, 41, 28, 0.20)',
      },
    },
    
  },
  plugins: [],
}
