/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090B',
          950: '#050507',
          900: '#08090B',
          800: '#0F1014',
          700: '#141519',
          600: '#1A1C22',
        },
        charcoal: {
          DEFAULT: '#141519',
          light: '#22252C',
        },
        metallic: {
          light: '#E2E4E9',
          DEFAULT: '#BFC3C9',
          dark: '#85888E',
          silver: '#D1D5DB',
        },
        luxury: {
          white: '#F4F3EF',
          offwhite: '#EAE8E3',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(191, 195, 201, 0.35)',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', '"Syne"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'widest-xl': '0.35em',
        'widest-2xl': '0.5em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      }
    },
  },
  plugins: [],
}
