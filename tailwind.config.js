/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Dark Teal/Green (Premium Barbershop)
        'primary': {
          '50': '#e6f8f5',
          '100': '#b3ede0',
          '200': '#80e1cb',
          '300': '#4dd5b6',
          '400': '#1ac9a1',
          '500': '#006b54', // Main dark teal/green
          '600': '#005643',
          '700': '#003e32',
          '800': '#002621',
          '900': '#000f0a',
        },
        'accent': {
          '50': '#fffbf0',
          '100': '#ffefcc',
          '200': '#ffe399',
          '300': '#ffd766',
          '400': '#ffcb33',
          '500': '#d4af37', // Premium Gold
          '600': '#b8941f',
          '700': '#8b7017',
          '800': '#5e4c0f',
          '900': '#302800',
        },
        'neutral': {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#0a0a0a',
        },
        // Legacy colors for compatibility
        'primary-black': '#0a0a0a',
        'primary-dark': '#006b54',
        'primary-gray': '#737373',
        'primary-light': '#ffffff',
        'accent-gold': '#d4af37',
        'accent-orange': '#006b54',
        'text-primary': '#ffffff',
        'text-secondary': '#a3a3a3',
        'text-light': '#525252',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
