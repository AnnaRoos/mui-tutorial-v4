import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core//Button';

import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoButton: {
    padding: 0,
    '&:hover': { backgroundColor: 'transparent' },
  },
  logoImg: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
}));

const Logo = ({ navigationHandler }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.logoButton}
      component={Link}
      to="/"
      onClick={(event) => navigationHandler(event, 0)}
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
