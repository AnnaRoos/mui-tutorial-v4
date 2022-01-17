import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    position: 'absolute',
    marginTop: '-4rem',
    width: '100vw',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '-3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3rem',
      right: '1rem',
    },
  },
  logo: {
    height: '2rem',
    width: '2rem',
    [theme.breakpoints.down('xs')]: {
      height: '1.5rem',
      width: '1.5rem',
    },
  },
}));

const SocialMedia = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.logoContainer}
      container
      justifyContent="flex-end"
      spacing={2}
    >
      <Grid
        item
        component={'a'}
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="facebook logo" className={classes.logo} src={facebook} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="twitter logo" className={classes.logo} src={twitter} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="instagram logo" className={classes.logo} src={instagram} />
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
