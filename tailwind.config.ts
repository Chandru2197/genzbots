// File: tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
        // Named breakpoints for specific resolutions
        '4k': '3000px',    // Client's specific 4K resolution
        'uhd': '3840px',   // Standard UHD resolution
      },
      colors: {
        primary: "#1e78c1",    // Blue
        secondary: "var(--color-secondary, #f75821)",  // Orange/Red, uses CSS variable if set
        tertiary: "#016082",   // Dark Blue
      },
      fontSize: {
        'label': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 18px, semi-bold
        'desc': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px, normal
        'btn': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // 16px, medium
        'menu': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px, normal 
        // High resolution specific sizes
        '4k-sm': ['1.25rem', { lineHeight: '1.75rem' }],
        '4k-base': ['1.5rem', { lineHeight: '2rem' }],
        '4k-lg': ['1.875rem', { lineHeight: '2.25rem' }],
        '4k-xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        label: '600',
        desc: '400',
        btn: '500',
        menu: '400',
      },
      spacing: {
        '4k-4': '1rem',
        '4k-8': '2rem',
        '4k-16': '4rem',
        '4k-24': '6rem',
      },
      maxWidth: {
        '4k': '80%',
        '4k-container': '4000px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
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
      },
    },
  },
  plugins: [],
}

export default config;