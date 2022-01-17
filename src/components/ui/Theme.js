import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const createMuiTheme =
  process.env.NODE_ENV === 'production'
    ? createTheme
    : unstable_createMuiStrictModeTheme;

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export const theme = createMuiTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'black',
    },
    h3: {
      fontFamily: 'Raleway',
      color: arcBlue,
      fontWeight: 'bold',
    },
  },
});
