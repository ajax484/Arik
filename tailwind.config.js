module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },

  theme: {

    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        midnightBlue: '#00355F',
        darkCerulean: '#144973',
        gold: '#EE8B45',
        cream: '#FFEFA9'
      },

      fontFamily: {
        morrisRoman: ["morris-roman", 'san-serif'],
        poppinsRegular: ["poppins", 'san-serif'],
        poppinsMedium: ["poppins-medium", 'san-serif']
      },

      backgroundImage: {
        "CTI": "url('/src/Assets/Img/changingTextImage.webp')",
        "blogBg": "url('/src/Assets/Img/blogBg.webp')",
      },

      zIndex: {
        '10000': '10000'
      }
    },
  },
  plugins: [
    // require('tailwindcss-children'),
  ],
}