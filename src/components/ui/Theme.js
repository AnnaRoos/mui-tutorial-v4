import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

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
      color: grey[300],
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'black',
    },
  },
});
