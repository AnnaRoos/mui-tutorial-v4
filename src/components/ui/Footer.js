import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/footerAdornment.svg';
import FooterNavigation from '../navigation/FooterNavigation';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
}));

const Footer = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <FooterNavigation
        boxes={5}
        navigationHandler={navigationHandler}
        selectedMenuItemHandler={selectedMenuItemHandler}
      />
      <img
        alt="black decorative slash"
        className={classes.adornment}
        src={footerAdornment}
      />
    </footer>
  );
};

export default Footer;
