import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import ServicesBlock from '../components/content/ServicesBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem 0 0 0',
    padding: '0 3rem 0 3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  heading: { marginLeft: '24px' },
}));

const ServicesPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems={matchesSM ? 'center' : null}
    >
      <Grid className={classes.heading} item>
        <Typography variant="h2">Services</Typography>
      </Grid>
      <Grid item>
        <ServicesBlock
          navigationHandler={navigationHandler}
          selectedMenuItemHandler={selectedMenuItemHandler}
          middlePlacement="flex-start"
          topBottomPlacement="flex-end"
          position={{ margin: '0 0 3rem 0' }}
        />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
