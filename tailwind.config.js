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
          bg: "#F4F6F9",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#D1D5DB",
          "border-dark": "#9CA3AF",
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
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      fontSize: {
        'xs': ['13px', '18px'],
        'sm': ['14.5px', '22px'],
        'base': ['16px', '24px'],
        'lg': ['18.5px', '26px'],
        'xl': ['22px', '30px'],
        '2xl': ['26px', '34px'],
        '3xl': ['32px', '40px'],
      },
      borderRadius: {
        DEFAULT: '3px',
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
      }
    },
  },
  plugins: [],
}
