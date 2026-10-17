/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1D',
          dark: '#070B14',
          card: '#111827',
          border: '#1F293D',
          hover: '#162238',
        },
        crimson: {
          DEFAULT: '#E11D48',
          light: '#F43F5E',
          dark: '#BE123C',
          glow: 'rgba(225, 29, 72, 0.4)',
        },
        gold: {
          DEFAULT: '#FBBF24',
          light: '#FDE68A',
          dark: '#D97706',
          glow: 'rgba(251, 191, 36, 0.4)',
        },
        python: {
          blue: '#306998',
          'blue-light': '#4B8BBE',
          'blue-dark': '#1e486d',
          yellow: '#FFD43B',
          'yellow-light': '#FFE873',
          'yellow-dark': '#E5A914',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -4px rgba(225, 29, 72, 0.45)',
        'glow-gold': '0 0 25px -4px rgba(251, 191, 36, 0.45)',
        'glow-blue': '0 0 25px -4px rgba(48, 105, 152, 0.45)',
        'hyper-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-flow': 'matrixFlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}
