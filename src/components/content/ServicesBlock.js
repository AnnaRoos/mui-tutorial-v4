import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import ServicesBlockContent from './ServicesBlockContent';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  root: {},
  serviceContainer: {
    margin: (position) => position.margin,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

const ServicesBlock = ({
  navigationHandler,
  selectedMenuItemHandler,
  middlePlacement,
  topBottomPlacement,
  position,
}) => {
  const classes = useStyles(position);
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
            matchesSM
              ? 'center'
              : index === 1
              ? middlePlacement
              : topBottomPlacement
          }
          spacing={6}
          xs
        >
          <ServicesBlockContent
            title={service.title}
            subtitle1={service.servicesBlock.subtitle1}
            subtitle2={service.servicesBlock.subtitle2}
            span={service.servicesBlock.span}
            icon={service.servicesBlock.icon}
            navigationHandler={navigationHandler}
            selectedMenuItemHandler={selectedMenuItemHandler}
            path={service.path}
            activeIndex={service.activeIndex}
            selectedIndex={service.selectedIndex}
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
