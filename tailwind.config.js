/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'momiji-red': '#8B0000',
        'momiji-orange': '#C2410C',
        'momiji-gold': '#D4A84B',
        'momiji-brown': '#3D2914',
        'maple-accent': '#B91C1C',
        amber: '#D97706',
        bark: '#78350F',
        paper: '#FAF8F5',
        stone: '#57534E',
        mist: '#F5F3FF',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
