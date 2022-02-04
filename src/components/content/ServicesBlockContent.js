import React from 'react';

import Grid from '@material-ui/core/Grid';
import LearnMoreBtn from '../buttons/LearnMoreBtn';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
  },
  subtitle1: {
    margin: '0 0 1rem 0',
  },
  subtitle2: {
    margin: '0 0 1rem 0',
  },
}));

const ServicesBlockContent = ({
  activeIndex,
  icon,
  navigationHandler,
  path,
  selectedIndex,
  selectedMenuItemHandler,
  span = null,
  subtitle1,
  subtitle2,
  title,
}) => {
  const classes = useStyles();

  const spanText = span ? (
    <span className={classes.specialText}>{span}</span>
  ) : null;

  return (
    <>
      <Grid item xl={6} lg={6} md={5}>
        <Typography variant="h4">{title}</Typography>
        <Typography className={classes.subtitle1} variant="subtitle1">
          {subtitle1}
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle1">
          {subtitle2}
          {spanText}
        </Typography>
        <LearnMoreBtn
          size="sm"
          color="blue"
          navigationHandler={navigationHandler}
          selectedMenuItemHandler={selectedMenuItemHandler}
          activeIndex={activeIndex}
          selectedIndex={selectedIndex}
          path={path}
        />
      </Grid>
      <Grid item>
        <img alt={`${title} icon`} src={icon} />
      </Grid>
    </>
  );
};

export default ServicesBlockContent;
