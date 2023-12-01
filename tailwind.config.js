/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Poppins': ["Poppins", "Sans-serif"]
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/images/secondaryHero.svg')",
        "primary-hero-image": "url('./assets/images/primaryHero.svg')"
      }
    },
  },
  plugins: [],
}

