/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Poppins': ["Poppins", "Sans-serif"]
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('src/assets/images/secondaryHero.svg')",
        "primary-hero-image": "url('src/assets/images/primaryHero.svg')"
      }
    },
  },
  plugins: [],
}

