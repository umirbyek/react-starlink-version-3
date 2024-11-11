/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-lg': "url('./assets/images/roam_c_hero_d.webp')",
        'hero-image-md': "url('./assets/images/roam_c_hero_m.webp')",
      },
      height:{
        'image-600': '42rem', // Default size
        'lg-image-600': '47rem', // Large screens
        'md-image-600': '47.5rem', //
      }
    },
  },
  plugins: [],
}

