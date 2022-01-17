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

  const socialMedia = [
    { name: 'facebook', icon: facebook },
    { name: 'twitter', icon: twitter },
    { name: 'instagram', icon: instagram },
  ];

  const socialMediaIcons = socialMedia.map((icon) => {
    return (
      <Grid
        item
        component={'a'}
        href={`https://www.${icon.name}.com`}
        key={icon.name}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt={`${icon} logo`} className={classes.logo} src={icon.icon} />
      </Grid>
    );
  });

  return (
    <Grid
      className={classes.logoContainer}
      container
      justifyContent="flex-end"
      spacing={2}
    >
      {socialMediaIcons}
    </Grid>
  );
};

export default SocialMedia;
