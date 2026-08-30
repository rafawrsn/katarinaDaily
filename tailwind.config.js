/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EDE8DF',
          50: '#FBFAF7',
          100: '#F5F2EC',
          200: '#EDE8DF',
          300: '#E0D9CB',
          400: '#CFC5B2',
        },
        secondary: {
          DEFAULT: '#9F7866',
          50: '#F7F2EF',
          100: '#EFE4DD',
          200: '#DBC9BC',
          300: '#C2A08C',
          400: '#B38976',
          500: '#9F7866',
          600: '#8A6453',
          700: '#705345',
          800: '#564036',
          900: '#3B2C25',
        },
        dark: {
          DEFAULT: '#000000',
          soft: '#1A1A1A',
          muted: '#2B2B2B',
        },
      },
      fontFamily: {
        heading: ['"Hatton"', 'serif'],
        body: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.2em',
        'wide-lg': '0.15em',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
