/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url('./src/assets/Background.png')",
        'shop':"url('./src/assets/Shop.png')",
        'about':"url('./src/assets/About.png')",
        'contact':"url('./src/assets/ContactBackground.png')",
        'footer': "url('./src/assets/Footer.png')"
      }
    },
  },
  plugins: [],
}
