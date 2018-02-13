import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['700']
    },
    {
      name: 'Source Sans Pro',
      styles: ['300', '300i', '400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Oswald', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
  headerColor: '#999900',
  bodyColor: '#796969'
});

export default typography;
