/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "slide-bck-left": "slide-bck-left 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715)    both",
        "slide-bck-right": "slide-bck-right 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715)   both"
      },
      keyframes: {
        "slide-bck-left": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "slide-bck-right": {
          "0%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
}
