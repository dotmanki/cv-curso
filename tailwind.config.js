/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'hind-madurai': ['Hind Madurai', 'sans-serif'],
      },
      colors: {
        beige: '#dacbba',
        primary: '#333',
        secondary: '#3a3a3a',
      },
      backgroundImage: {
        'line-decorator': "url('/assets/line.svg')",
        'experience-line': "url('/assets/experience-line.svg')",
        'line-lg': "url('/assets/line-lg.svg')",
      },
      gridTemplateColumns: {
        'main-lg': '16px repeat(11, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
