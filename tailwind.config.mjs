/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0e0f12',
          800: '#15171c',
          700: '#1c1f26',
          600: '#262a33',
          500: '#353945',
        },
        accent: {
          400: '#d4916a',
          500: '#c17a4a',
          600: '#a86538',
        },
        meta: {
          400: '#7aa8be',
          500: '#5b8fa8',
        },
        ink: '#e8eaed',
        'ink-body': '#d6dae1',
        'ink-muted': '#aeb3bd',
        surface: '#15171c',
        'surface-raised': '#1c1f26',
      },
      fontFamily: {
        sans: ['Hubot Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: ['text-ink', 'text-ink-body', 'text-ink-muted', 'bg-surface', 'bg-surface-raised', 'hover:text-ink'],
};
