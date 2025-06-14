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
        colors: {
          debugpink: '#ccc',
          slaty: '#1b1b1e', 
          'slaty-300': '#1f1f1f', 
          'slaty-200': '#2b2b2b', 
          'slaty-100': '#303030', 
          
        },
        boxShadow: {
            'glow': '1px 1px 20px #464646', // adjust color as needed
        },
        fontFamily: {
          wallpoet: ['"Wallpoet"', 'cursive'],
          sans: ['Inter', 'cursive'],
          poppins: ['Poppins', 'cursive'],
          orbitron: ['Orbitron', 'cursive'],
          roboto: ['Roboto', 'cursive'],
          jura: ['"Jura"', 'cursive'],
          kode: ['"Kode Mono"', 'cursive'],
        },
      },
    },
    plugins: [],
  };
  