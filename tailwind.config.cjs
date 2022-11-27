/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url('/public/static/imgaes/Background.png')",
        'shop':"url('/public/static/imgaes/Shop.png')",
        'about':"url('/public/static/imgaes/About.png')",
        'contact':"url('/public/static/imgaes/ContactBackground.png')",
        'footer': "url('/public/static/imgaes/Footer.png')"
      }
    },
  },
  plugins: [],
}
