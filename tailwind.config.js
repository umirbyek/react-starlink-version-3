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
        'roam_illustriation1-image-lg': "url('./assets/images/roam_illustriation1_d.webp')",
        'roam_illustriation1-image-md': "url('./assets/images/roam_illustriation1_d.webp')",
        'roam_c_feature5_d-image-lg': "url('./assets/images/roam_c_feature5_d.webp')",
        'roam_c_feature5_m-image-md': "url('./assets/images/roam_c_feature5_m.webp')",
        'roam_illustriation2_d': "url('./assets/images/roam_illustriation2_d.webp')",
        'roam_collapse_m': "url('./assets/images/roam_collapse_m.jpg')",
        'roam_collapse_d': "url('./assets/images/roam_collapse_d.jpg')",
        'roam_b_weather_m': "url('./assets/images/roam_b_weather_m.webp')",
        'roam_b_hardware_d': "url('./assets/images/roam_b_hardware_d.webp')",
        'roam_b_weather_d': "url('./assets/images/roam_b_weather_d.webp')",
      },
      height:{
        'sm-image-600': '43rem', // Default size
        'lg-image-600': '49rem', // Large screens
        'md-image-600': '48rem', //
      }
    },
  },
  plugins: [],
}

