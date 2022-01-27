import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import infoBackground from '../../assets/infoBackground.svg';
import LearnMoreBtn from '../buttons/LearnMoreBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    padding: '5rem',
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
  },
  title: {
    color: 'white',
  },
  subtitle2: {
    margin: '0 0 1rem 0',
  },
}));

const InfoBlock = ({ navigationHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      className={classes.root}
      container
      direction={matchesXS ? 'column' : 'row'}
      alignItems="center"
      justifyContent={matchesXS ? 'space-evenly' : 'space-between'}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems={matchesXS ? 'center' : 'flex-start'}
        >
          <Typography className={classes.title} variant="h2">
            About Us
          </Typography>
          <Typography className={classes.subtitle2} variant="subtitle2">
            Let’s get personal.
          </Typography>
          <LearnMoreBtn
            size="sm"
            color="white"
            navigationHandler={navigationHandler}
            path="/about"
            activeIndex={3}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems={matchesXS ? 'center' : 'flex-end'}
        >
          <Typography className={classes.title} variant="h2">
            Contact Us
          </Typography>
          <Typography className={classes.subtitle2} variant="subtitle2">
            Say hello!{' '}
            <span aria-label="waving hand" role="img">
              👋
            </span>
          </Typography>
          <LearnMoreBtn
            size="sm"
            color="white"
            navigationHandler={navigationHandler}
            path="/contact"
            activeIndex={4}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
