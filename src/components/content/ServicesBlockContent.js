import React from 'react';

import Grid from '@material-ui/core/Grid';
import LearnMoreBtn from '../buttons/LearnMoreBtn';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    maxWidth: '30rem',
    margin: '0 2rem 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '0 0 2rem 0',
    },
  },
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
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const spanText = span ? (
    <span className={classes.specialText}>{span}</span>
  ) : null;

  return (
    <>
      <Grid
        className={classes.textContainer}
        container
        direction="column"
        alignItems={matchesMD ? 'center' : 'flex-start'}
      >
        <Typography variant="h4" align={matchesMD ? 'center' : 'left'}>
          {title}
        </Typography>
        <Typography
          className={classes.subtitle1}
          variant="subtitle1"
          align={matchesMD ? 'center' : 'left'}
        >
          {subtitle1}
        </Typography>
        <Typography
          className={classes.subtitle2}
          variant="subtitle1"
          align={matchesMD ? 'center' : 'left'}
        >
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
