/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'gray-primary': '#F8F8FB',
        'gray-secondary': '#C6C9CC',
        'gray-alternative': '#EFF2F7',
        'accent-orange': '#F58220',
        'accent-purple': '#1F4A7C',
      },
    },
  },
  plugins: [],
}
