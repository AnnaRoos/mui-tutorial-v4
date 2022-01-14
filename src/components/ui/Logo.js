import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core//Button';

import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logoButton: {
    padding: 0,
    '&:hover': { backgroundColor: 'transparent' },
  },
  logoImg: {
    height: '8em',
  },
});

const Logo = ({ navigationHandler }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.logoButton}
      component={Link}
      to="/"
      onClick={navigationHandler}
      disableRipple
    >
      <img
        className={classes.logoImg}
        id="logo"
        src={logo}
        alt="Arc Development company logo"
      />
    </Button>
  );
};

export default Logo;
