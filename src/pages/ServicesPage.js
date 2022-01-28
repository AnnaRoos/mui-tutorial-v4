import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import ServicesBlockContent from '../components/content/ServicesBlockContent';

import { pages } from '../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem 0 0 0',
    padding: '0 3rem 0 3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  serviceContainer: {
    margin: '0 0 3rem 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& img': {
      width: '12rem',
    },
  },
  heading: { marginLeft: '24px' },
}));

const ServicesPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const mobileAppData = pages.filter(
    (page) => page.title === 'iOS/Android Apps'
  );
  const customSoftwareData = pages.filter(
    (page) => page.title === 'Custom Software'
  );
  const websitesData = pages.filter((page) => page.title === 'Websites');

  const services = [
    ...mobileAppData,
    ...customSoftwareData,
    ...websitesData,
  ].map((service, index) => {
    return (
      <Grid
        key={`${service.title}-servicesPage`}
        className={classes.serviceContainer}
        container
        item
        direction={matchesSM ? 'column' : 'row'}
        justifyContent={
          matchesSM ? 'center' : index === 1 ? 'flex-start' : 'flex-end'
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
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems={matchesSM ? 'center' : null}
    >
      <Grid className={classes.heading} item>
        <Typography variant="h2">Services</Typography>
      </Grid>
      <Grid item>{services}</Grid>
    </Grid>
  );
};

export default ServicesPage;
