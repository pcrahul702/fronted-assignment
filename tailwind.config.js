module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        'custom-blue': '#005EB8', 
        'custom-white':'#FFFFFF',
        'custom-hover':'#003d80'
        
      },
      fontSize: {

        'custom-xs': '0.75rem',  // 12px
        'custom-sm': '0.875rem', // 14px
        'custom-md': '1.125rem', // 18px
        'custom-lg': '1.5rem',   // 24px
        'custom-xl': '2rem',     // 32px
        'custom-2xl': '2.5rem',  // 40px
        'custom-3xl': '3rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Lato', 'sans-serif'], // Add Roboto and Lato fonts
      },
    },
  },
  plugins: [],
  
};
