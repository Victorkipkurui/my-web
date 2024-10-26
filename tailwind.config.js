/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        move: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(100px) translateY(-50px)' },
          '100%': { transform: 'translateX(-100px) translateY(50px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-out forwards',
        slideInRight: 'slideInRight 2s ease-out forwards',
        slideInUp: 'slideInUp 2s ease-out forwards',
        backgroundMove: 'backgroundMove 10s ease-in-out infinite',
        move: 'move 5s ease-in-out infinite',
        rotate: 'rotate 10s linear infinite',
        scale: 'scale 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}