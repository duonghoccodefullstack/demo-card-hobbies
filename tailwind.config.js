/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/shadcn/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "be" : ["Be Vietnam Pro", 'sans-serif']
      },
      lineHeight: {
        "title" : "46.75px"
      },
      backgroundColor: {
        "button_gift" :"#FF4D00"
      }

    },
  },
  plugins: [],
}

