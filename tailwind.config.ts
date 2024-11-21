import type { Config } from 'tailwindcss';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: 'class', // Use dark mode based on class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite', // Shimmer animation
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite', // Scroll animation
        'accordion-down': 'accordion-down 0.2s ease-out', // Accordion down animation
        'accordion-up': 'accordion-up 0.2s ease-out', // Accordion up animation
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Tailwind CSS Animate plugin
    addVariablesForColors, // Custom plugin to add CSS variables for colors
  ],
};

// Custom plugin to convert Tailwind color palette to CSS variables
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
