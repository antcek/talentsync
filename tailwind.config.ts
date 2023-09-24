import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      'xl': '1240px',
    },
    colors: {
      contactsColor: 'rgba(0, 0, 0, 0.5)', // #00000080 представляет черный цвет с 50% прозрачностью
    },
    backgroundColor: {
      'rgba-247-247-246': 'rgba(247, 247, 246, 1)',
    },
    fontFamily: {
      'krona': ['Krona One', 'sans-serif'],
      'jost': ['Jost', 'sans-serif'],
      'ttFirs':  ['TTFirs-Bold', 'sans'],
    },
    },
    
  },
  plugins: [],
} satisfies Config;
