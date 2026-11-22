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
            DEFAULT: '#0C1324',
            dark: '#060A14',
            light: '#1A2332',
          },
          accent: {
            yellow: '#FFC107',
            'yellow-light': '#FFD54F',
            teal: '#4DD0E1',
            'teal-light': '#80DEEA',
          }
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        boxShadow: {
          'glow-yellow': '0 0 30px rgba(255, 193, 7, 0.3)',
          'glow-teal': '0 0 30px rgba(77, 208, 225, 0.3)',
        }
      },
    },
    plugins: [],
  }