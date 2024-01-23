/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-pattern': "url(/bg-curvy-mobile.svg), linear-gradient(to bottom, hsl(217, 28%, 15%) 3%, hsl(218, 28%, 13%) 5%)",
        'desktop-pattern': "url(/bg-curvy-desktop.svg), linear-gradient(to bottom, hsl(217, 28%, 15%) 10%, hsl(218, 28%, 13%) 12%)"
      },
      backgroundPosition: {
        'mobilepos': "center 16rem",
        'desktoppos': "center 32rem"
      },
      colors:{
        'cl-DarkBlueIntro': 'hsl(217, 28%, 15%)',
        'cl-DarkBlueMain': 'hsl(218, 28%, 13%)',
        'cl-DarkBlueFooter': 'hsl(216, 53%, 9%)',
        'cl-DarkBlueTestimonials': 'hsl(219, 30%, 18%)',
        'cl-Cyan': 'hsl(176, 68%, 64%)',
        'cl-Cyan2': 'hsl(176, 68%, 64%, .5)',
        'cl-Blue': 'hsl(198, 60%, 50%)',
        'cl-Light-Red': 'hsl(0, 100%, 63%)'
      },
      fontFamily:{
        "openSans": "Open Sans",
        "raleway": "Raleway"
      }
    }
  },
  plugins: [],
}