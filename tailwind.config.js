/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'base' : '#FAF8FF',
        'nav' : '#8685EF',
        'txt' : '#FFFFFF',
        'etc' : '#E3E0F3'
      }
    }
  },
  plugins: [],
};
