/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          hover: 'var(--primary-hover)',
          dark: 'var(--primary-dark)',
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: 'var(--primary-color)',
          600: 'var(--primary-color)',
          700: 'var(--primary-dark)',
          900: '#0c4a6e',
        },
        accent: 'var(--accent-color)',
        custom: {
          text: 'var(--text-color)',
          bg: 'var(--background-color)',
        }
      },
      fontFamily: {
        'heading': 'var(--font-heading)',
        'body': 'var(--font-body)',
        'accent': 'var(--font-accent)',
        'sans': 'var(--font-body)',
        'serif': 'var(--font-accent)',
      },
    },
  },
  plugins: [],
}