import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import ServicesBlockContent from '../components/content/ServicesBlockContent';

import { pages } from '../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem 0 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 3rem 0 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 0 1rem',
    },
  },
  serviceContainer: {
    margin: '5rem 0 3rem 0',
    '& img': {
      width: '12rem',
    },
  },
}));

const ServicesPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

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
        direction={matchesMD ? 'column' : 'row'}
        justifyContent={
          matchesMD ? 'center' : index === 1 ? 'flex-start' : 'flex-end'
        }
        alignItems={matchesMD ? 'center' : null}
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
      alignItems={matchesMD ? 'center' : null}
    >
      <Grid className={classes.heading} item>
        <Typography variant="h2" align={matchesMD ? 'center' : 'left'}>
          Services
        </Typography>
      </Grid>
      <Grid item>{services}</Grid>
    </Grid>
  );
};

export default ServicesPage;
