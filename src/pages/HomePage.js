import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import HeroBlock from '../components/content/HeroBlock';
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

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Grid item>
        <HeroBlock />
      </Grid>
      <Grid item>
        <ServicesBlock />
      </Grid>
    </Grid>
  );
};

export default HomePage;
