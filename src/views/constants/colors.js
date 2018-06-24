import { lighten, darken } from 'polished';

const colors = {
  primary: '#00695c',
  lightPrimary: lighten(0.7, '#00695c'),
  darkPrimary: darken(0.05, '#00695c'),
  error: '#dd2c00',
  lightError: lighten(0.7, '#dd2c00'),
  darkError: darken(0.05, '#dd2c00')
};

export default colors;
