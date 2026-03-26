/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2B26',
          dark: '#172C47',
        },
        accent: {
          DEFAULT: '#46C162',
          muted: '#346845',
        },
        brand: {
          'forest-dark': '#0A2B26',
          navy: '#172C47',
          'forest-medium': '#1E493A',
          'forest-light': '#346845',
          'bright-green': '#46C162',
          slate: '#707D88',
          red: '#ED3E49',
        },
        gray: {
          50: '#FAFBFC',
          100: '#F1F3F4',
          200: '#CDD2D7',
          300: '#A9B1BA',
          400: '#85909D',
          500: '#677080',
          600: '#515963',
          700: '#3A4046',
          800: '#252A2E',
          900: '#161A1D',
        },
      },
      fontFamily: {
        alegreya: ['Alegreya', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
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
