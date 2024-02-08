/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
       extend: {
       colors:{
        customBlue: '#1F1CCC',
        customBlack: '#0D0A26',
        customGrey: '#BBBBBB',
        customDarkGrey:'#455163',
        customBlack1: '#171718',
        customGrey1:'#ACACAC',
        customBlueishBlack: '#0D0A26',
        customBlue1:'#212A86', 
        customRed1:'#6D260D',  
        customBlue2:'#2D2797',  
        customPurple1:'#096486', 
      },
      fontFamily: {
        'sans': ['Exo 2', 'sans-serif'],
         customExo: ['Exo 2', "sans-serif"],
         'exo': ['Exo 2', 'sans-serif'],
         customex: ['Exo 2',"sans-serif"], 
      },
     fontWeight: {
        '1000': '1000',
      }
  },
  plugins: [],
}
}


