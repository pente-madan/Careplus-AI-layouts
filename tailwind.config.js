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
          DEFAULT: '#C94234',
          hover: '#b03b2f',
          foreground: '#ffffff',
        },
        red: {
          50: '#FFF5F5',
          600: '#C94234',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          900: '#0f172a',
        },
        teal: {
          50: '#f0fdfa',
          600: '#0d9488',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb',
        },
        emerald: {
          500: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'base': '0.625rem',
        'lg': '0.875rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'md': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'lg': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'xl': '0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04)',
        '2xl': '0 25px 50px rgba(0,0,0,0.15)',
        'glow-white': '0 0 20px rgba(255,255,255,0.50)',
        'glow-primary': '0 0 30px rgba(201,66,52,0.15)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
        'image': '700ms',
      },
    },
  },
  plugins: [],
}
