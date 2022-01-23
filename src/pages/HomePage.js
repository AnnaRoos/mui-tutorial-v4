import React from 'react';

import Lottie from 'lottie-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import animationData from '../animations/landinganimation/data';

import CTABtn from '../components/buttons/CTABtn';
import LearnMoreBtn from '../components/buttons/LearnMoreBtn';

const useStyles = makeStyles((theme) => ({
  root: {},
  animation: {
    maxWidth: '50rem',
    minWidth: '21rem',
    margin: '2rem 0 0 1rem',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          alignItems="center"
          container
          direction="row"
          justifyContent="flex-end"
        >
          <Grid item sm>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>

            <Grid container justifyContent="center">
              <Grid item>
                <CTABtn position={{ margin: '0 1rem 0 0' }} />
              </Grid>
              <Grid item>
                <LearnMoreBtn />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.animation} item sm>
            <Lottie animationData={animationData} autoplay loop />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
