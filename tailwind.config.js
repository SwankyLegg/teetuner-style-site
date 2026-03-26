/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'merriweather-sans': ['Merriweather Sans', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.2', fontWeight: '700' }],      // 64px - Hero/Display text
        'h1': ['3rem', { lineHeight: '1.25', fontWeight: '700' }],         // 48px - Main headings
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],       // 36px - Section headings
        'h3': ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }],       // 28px - Subsection headings
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],        // 24px - Card headings
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],       // 20px - Small headings
        'lead': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],     // 20px - Lead paragraphs
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        // 16px - Body text
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],   // 14px - Small text
        'xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],       // 12px - Extra small text
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
} 