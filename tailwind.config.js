/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1B2A4E',
        brandGold: '#C0A16B',
        brandBeige: '#F1EFEA',
        brandGray: '#505050',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
      },
      maxWidth: {
        'container': '1240px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      padding: {
        'section': '64px',
      },
    },
  },
  plugins: [],
} 