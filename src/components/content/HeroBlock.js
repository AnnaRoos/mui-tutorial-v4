import React from 'react';

import Lottie from 'lottie-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import animationData from '../../animations/landinganimation/data';

import CTABtn from '../buttons/CTABtn';
import LearnMoreBtn from '../buttons/LearnMoreBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem 0 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '3rem 0 0 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0 0 0',
    },
  },
  animation: {
    maxWidth: '50rem',
    minWidth: '20rem',
    margin: '2rem 0 0 10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
    },
  },
  buttonContainer: {
    margin: '2rem 0 0 0',
  },
  heroTextContainer: {
    minWidth: '20rem',
  },
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const learnBtnConfig = { fontSize: '0.9rem', height: '3rem', width: '9rem' };
  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justifyContent="flex-end"
    >
      <Grid className={classes.heroTextContainer} item sm>
        <Typography align="center" variant="h2">
          Bringing West Coast Technology <br /> to the Midwest
        </Typography>

        <Grid
          className={classes.buttonContainer}
          container
          justifyContent="center"
          spacing={matchesXS ? 1 : 3}
        >
          <Grid item>
            <CTABtn />
          </Grid>
          <Grid item>
            <LearnMoreBtn config={learnBtnConfig} />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.animation} item sm>
        <Lottie animationData={animationData} autoplay loop />
      </Grid>
    </Grid>
  );
};

export default Hero;
