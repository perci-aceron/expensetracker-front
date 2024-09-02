// src/styles/theme.js
import { extendTheme } from '@chakra-ui/react';
import { radioTheme } from './radioTheme';
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints: {
    base: '320px',
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    xxl: '2560px',
  },
  colors: {
    green: '#0EF387',
    alphaGreen: '#4DC274',
    percentage: '#02B15A',
    percentageBox: '#02B15A26',
    black: '#0C0D0D',
    alphaBlack: '#0C0D0D99',
    totalBlack: '#171719',
    blackish: '#11101C',
    alphaBlackish: '#11101C80',
    white: '#FAFAFA',
    alphaWhite: '#FAFAFA66', //250, 250, 250, 0.40 FAFAFA 40%
    afiftyWhite: '#FAFAFA80', //250, 250, 250, 0.50
    darkWhite: '#FAFAFA33', //250, 250, 250, 0.20
    gray: '#29292B',
    red: '#E74A3B',
  },
  html: {
    fonts: {
      fontFamily: 'SuisseIntl-Regular, Roboto, sans-serif',
      fontSize: '16px',
    },
    bgGradient: 'linear(to right, #02B15A 20%, #4DC274 50%, #FAFAFA 80%)',
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        maxWidth: '100%',
      },
    },
  },
  components: {
    Radio: radioTheme,
  },
});

export default theme;
