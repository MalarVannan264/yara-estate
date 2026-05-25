/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': 'var(--color-bg)',
        'brand-surface': 'var(--color-surface)',
        'brand-panel': 'var(--color-panel)',
        'brand-gold': 'var(--color-gold)',
        'brand-gold-soft': 'var(--color-gold-soft)',
        'brand-text': 'var(--color-text)',
        'brand-muted': 'var(--color-muted)',
        'brand-border': 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      boxShadow: {
        luxe: '0 28px 80px rgba(38, 26, 18, 0.1)',
        gold: '0 20px 45px rgba(200, 168, 107, 0.22)',
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'gold-glow':
          'radial-gradient(circle at top, rgba(200, 168, 107, 0.18), transparent 40%)',
        'hero-vignette':
          'linear-gradient(90deg, rgba(29, 27, 25, 0.8) 0%, rgba(29, 27, 25, 0.35) 44%, rgba(29, 27, 25, 0.08) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
