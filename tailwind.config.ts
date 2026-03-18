import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E63000',
          50:  '#FFF0EB',
          100: '#FFD5C7',
          200: '#FFAA8F',
          500: '#FF4500',
          600: '#E63000',
          700: '#C22800',
          800: '#9E2000',
          900: '#7A1800',
        },
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
