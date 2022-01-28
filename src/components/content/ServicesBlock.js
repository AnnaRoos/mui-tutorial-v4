import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import ServicesBlockContent from './ServicesBlockContent';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5rem 0 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  serviceContainer: {
    margin: '8rem 0 0 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

const ServicesBlock = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const services = pages
    .filter((page) => page.servicesBlock)
    .map((service, index) => {
      return (
        <Grid
          key={`${service.title}-landingPage`}
          className={classes.serviceContainer}
          container
          item
          direction={matchesSM ? 'column' : 'row'}
          justifyContent={
            matchesSM ? 'center' : index === 1 ? 'flex-end' : 'flex-start'
          }
          spacing={6}
          xs
        >
          <ServicesBlockContent
            activeIndex={service.activeIndex}
            icon={service.servicesBlock.icon}
            navigationHandler={navigationHandler}
            path={service.path}
            selectedIndex={service.selectedIndex}
            selectedMenuItemHandler={selectedMenuItemHandler}
            span={service.servicesBlock.span}
            subtitle1={service.servicesBlock.subtitle1}
            subtitle2={service.servicesBlock.subtitle2}
            title={service.title}
          />
        </Grid>
      );
    });

  return (
    <Grid className={classes.root} container direction="column">
      {services}
    </Grid>
  );
};

export default ServicesBlock;
