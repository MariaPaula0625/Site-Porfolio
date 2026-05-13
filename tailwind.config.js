/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-text) / <alpha-value>)',
        ink: 'rgb(var(--color-bg) / <alpha-value>)',
        night: 'rgb(var(--color-panel) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        violet: 'rgb(var(--color-interactive) / <alpha-value>)',
        electric: 'rgb(var(--color-accent) / <alpha-value>)',
        mint: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgb(var(--color-accent) / 0.22)',
        violet: '0 24px 80px rgb(var(--color-interactive) / 0.14)',
      },
      backgroundImage: {
        mesh: 'var(--mesh-bg)',
      },
    },
  },
  plugins: [],
};
