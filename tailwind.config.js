/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'color-oscuro': '#303030',
        'color-medio-1': '#8F8F8E',
        'color-medio-2': '#74746C',
        'color-claro-1': '#E8E7E7',
        'color-claro-2': '#B8B8B7',
        'color-claro-3': '#AFADA2',
      },
      borderRadius: {
        'large': '50px',
      },

    }
  },

}
