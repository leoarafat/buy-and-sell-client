/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4a7887",
        
"secondary": "#F000B8",
// "secondary": "#FEF9f6",
        
"accent": "#F2E9E3",
        
"neutral": "#000000",
        
"base-100": "#ffffff",
"base-200": "#4a7887",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
      {
dark: {
secondary: "#1F2937",
"base-100": "#1F2937",
neutral: "#fff",
"base-200": "#1F2937",
"accent": "#1F2937",
},
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
