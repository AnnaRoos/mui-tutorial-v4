import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import ServicesBlockContent from './ServicesBlockContent';

import customSoftwareIcon from '../../assets/customSoftwareIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5rem 0 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem 0 1rem',
    },
  },
  serviceContainer: {
    margin: '12rem 0 0 0',
  },
}));

const ServicesBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      title: 'Custom Software Development',
      subtitle1: 'Save Energy. Save Time. Save Money.',
      subtitle2: 'Complete digital solutions, from investigation to',
      span: 'celebration.',
      icon: customSoftwareIcon,
      placement: 'flex-start',
    },
    {
      title: 'iOS/Android App Development',
      subtitle1: 'Extend Functionality. Extend Access. Increase Engagement.',
      subtitle2:
        'Integrate your web experience or create a standalone app with either mobile platform.',
      icon: customSoftwareIcon,
      placement: 'flex-end',
    },
    {
      title: 'Website Development',
      subtitle1: 'Reach More. Discover More. Sell more.',
      subtitle2: 'Optimized for Search Engines, built for speed.',
      icon: customSoftwareIcon,
      placement: 'flex-start',
    },
  ].map((service) => {
    return (
      <Grid
        key={`${service.title}-landingPage`}
        className={classes.serviceContainer}
        container
        item
        direction="row"
        justifyContent={matchesSM ? 'center' : service.placement}
      >
        <ServicesBlockContent
          title={service.title}
          subtitle1={service.subtitle1}
          subtitle2={service.subtitle2}
          span={service.span}
          icon={service.icon}
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
