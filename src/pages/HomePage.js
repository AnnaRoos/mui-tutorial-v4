import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import CTABlock from '../components/content/CTABlock';
import HeroBlock from '../components/content/HeroBlock';
import InfoBlock from '../components/content/InfoBlock';
import RevolutionBlock from '../components/content/RevolutionBlock';
import ServicesBlock from '../components/content/ServicesBlock';

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
}));

const HomePage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Grid item>
        <HeroBlock navigationHandler={navigationHandler} />
      </Grid>
      <Grid item>
        <ServicesBlock
          navigationHandler={navigationHandler}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
      </Grid>
      <Grid item>
        <RevolutionBlock navigationHandler={navigationHandler} />
      </Grid>
      <Grid item>
        <InfoBlock navigationHandler={navigationHandler} />
      </Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
