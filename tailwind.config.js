/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E2E8F0",
          "border-dark": "#94A3B8",
          navy: {
            DEFAULT: "#1B365D",
            hover: "#142947",
            dark: "#0F2139",
            light: "#F0F4F8",
            muted: "#2C4D79"
          },
          slate: {
            DEFAULT: "#475569",
            light: "#64748B",
            lighter: "#94A3B8",
            dark: "#334155"
          },
          green: {
            DEFAULT: "#166534",
            bg: "#F0FDF4",
            border: "#86EFAC",
            text: "#14532D"
          },
          amber: {
            DEFAULT: "#B45309",
            bg: "#FFFBEB",
            border: "#FCD34D",
            text: "#92400E"
          },
          red: {
            DEFAULT: "#991B1B",
            bg: "#FEF2F2",
            border: "#FCA5A5",
            text: "#7F1D1D"
          },
          blue: {
            DEFAULT: "#1D4ED8",
            bg: "#EFF6FF",
            border: "#BFDBFE",
            text: "#1E40AF"
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', '"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace']
      },
      fontSize: {
        '2xs': ['11px', '16px'],
        'xs': ['12.5px', '18px'],
        'sm': ['14px', '21px'],
        'base': ['15.5px', '24px'],
        'lg': ['17.5px', '26px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '38px'],
      },
      borderRadius: {
        DEFAULT: '4px',
        'xs': '2px',
        'sm': '3px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      }
    },
  },
  plugins: [],
}
