/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(19) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
      
    },
    screens: {
      'sm':  '640px',
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md':  '768px',
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg':  '1024px',
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'xl': {'min': '1536px'},
    }
    },
  plugins: []
  ,
}

