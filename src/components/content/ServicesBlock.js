import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import ServicesBlockContent from './ServicesBlockContent';

import customSoftwareIcon from '../../assets/customSoftwareIcon.svg';
import mobileIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5rem 0 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  serviceContainer: {
    margin: '10rem 0 0 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

const ServicesBlock = ({ navigationHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      title: 'Custom Software Development',
      subtitle1: 'Save Energy. Save Time. Save Money.',
      subtitle2: 'Complete digital solutions, from investigation to ',
      span: 'celebration.',
      icon: customSoftwareIcon,
      alt: 'Customsoftare icon',
      justify: 'flex-start',
      page: '/customsoftware',
    },
    {
      title: 'iOS/Android App Development',
      subtitle1: 'Extend Functionality. Extend Access. Increase Engagement.',
      subtitle2:
        'Integrate your web experience or create a standalone app with either mobile platform.',
      icon: mobileIcon,
      alt: 'Mobile app icon',
      justify: 'flex-end',
      page: '/mobileapps',
    },
    {
      title: 'Website Development',
      subtitle1: 'Reach More. Discover More. Sell more.',
      subtitle2: 'Optimized for Search Engines, built for speed.',
      icon: websiteIcon,
      alt: 'website development icon',
      justify: 'flex-start',
      page: '/websites',
    },
  ].map((service) => {
    return (
      <Grid
        key={`${service.title}-landingPage`}
        className={classes.serviceContainer}
        container
        item
        direction="row"
        justifyContent={matchesSM ? 'center' : service.justify}
        spacing={6}
        xs
      >
        <ServicesBlockContent
          title={service.title}
          subtitle1={service.subtitle1}
          subtitle2={service.subtitle2}
          span={service.span}
          icon={service.icon}
          navigationHandler={navigationHandler}
          page={service.page}
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
