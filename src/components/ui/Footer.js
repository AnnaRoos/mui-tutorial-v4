import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';

import FooterNavigation from '../navigation/FooterNavigation';
import SocialMedia from '../images/SocialMedia';

import footerAdornment from '../../assets/footerAdornment.svg';

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
      <Hidden mdDown>
        <FooterNavigation
          boxes={5}
          navigationHandler={navigationHandler}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
      </Hidden>

      <img
        alt="black decorative slash"
        className={classes.adornment}
        src={footerAdornment}
      />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
