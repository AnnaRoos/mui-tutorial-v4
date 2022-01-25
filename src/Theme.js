import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const createMuiTheme =
  process.env.NODE_ENV === 'production'
    ? createTheme
    : unstable_createMuiStrictModeTheme;

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

export const theme = createMuiTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
      arcGrey: arcGrey,
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
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1.75rem',
      color: arcBlue,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: '1.25rem',
      color: arcGrey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: grey[500],
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
