import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0F380F',
        'forest-light': '#1a4a1a',
        'forest-lighter': '#2a5a2a',
        cream: '#F5F5F0',
        'cream-dim': 'rgba(245, 245, 240, 0.7)',
        'cream-bright': '#FFFFFF',
        accent: '#C4A000',
        'accent-light': '#E6C84D',
        'accent-dark': '#9A7D00',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(196, 160, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(196, 160, 0, 0.4)',
        'retro': '4px 4px 0 rgba(0, 0, 0, 0.3)',
        'retro-lg': '8px 8px 0 rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
        serif: ['var(--font-cooper-black)', 'serif'],
      },
      animation: {
        'grain': 'grain 0.5s steps(10) infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

