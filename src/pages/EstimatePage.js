import React from 'react';

import Lottie from 'lottie-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core';

import estimateAnimation from '../animations/estimateAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  root: {},
  questionTitle: { fontWeight: 300 },
}));

const EstimatePage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid container item direction="column">
        <Grid item>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item>
          <Lottie
            animationData={estimateAnimation}
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid item>
          <Typography
            className={classes.questionTitle}
            align="center"
            gutterBottom
            variant="h2"
          ></Typography>
        </Grid>
        <Grid container item></Grid>
      </Grid>
    </Grid>
  );
};

export default EstimatePage;
