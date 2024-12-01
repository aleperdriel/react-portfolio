/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero_bg" : "url('/image1.jpg')",
        "contact_bg" : "url('/contact_bg.png')",
      },
      cursor: {
        'arrow': 'url("/pointer.svg"), auto',
      },
      fontFamily: {
        'bebas' : "Bebas Neue",
      }
    },
  },
  plugins: [],
}

