export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fade-in 1s ease-out forwards',
          'zoom-in': 'zoom-in 1s ease-out forwards',
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'zoom-in': {
            '0%': { transform: 'scale(0.5)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        colors: { debugpink: '#ccc' },
        boxShadow: {
            'glow': '0 0 15px rgba(225, 0, 245, 0.6), 0 0 20px rgba(0, 220, 255, 0.5)', // adjust color as needed
        },
      },
    },
    plugins: [],
  };
  