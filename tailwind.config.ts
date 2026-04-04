import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      fontSize: {
        'sm':   ['16px', { lineHeight: '1.9', letterSpacing: '0.04em' }],
        'base': ['18px', { lineHeight: '1.9', letterSpacing: '0.04em' }],
        'lg':   ['20px', { lineHeight: '1.9', letterSpacing: '0.04em' }],
        'xl':   ['22px', { lineHeight: '1.8', letterSpacing: '0.03em' }],
        '2xl':  ['28px', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        '3xl':  ['36px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      colors: {
        primary:   '#2E7D52',
        accent:    '#F57C00',
        bg:        '#FAFAF7',
        'text-main': '#1A1A1A',
        link:      '#1A5E9E',
        highlight: '#FFF176',
        'summary-bg':     '#E8F5E9',
        'summary-border': '#2E7D52',
      },
    },
  },
  plugins: [],
}
export default config
