import React from 'react';

import Grid from '@material-ui/core/Grid';
import LearnMoreBtn from '../buttons/LearnMoreBtn';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
  },
  subtitle1: {
    margin: '0 0 1rem 0',
  },
  subtitle2: {
    maxWidth: '34rem',
    margin: '0 0 1rem 0',
  },
}));

const ServicesBlockContent = ({
  alt,
  icon,
  title,
  subtitle1,
  subtitle2,
  navigationHandler,
  page,
  span = null,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const spanText = span ? (
    <span className={classes.specialText}>{span}</span>
  ) : null;

  return (
    <>
      <Grid item>
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
          page={page}
        />
      </Grid>
      <Grid item>
        <img alt={alt} src={icon} />
      </Grid>
    </>
  );
};

export default ServicesBlockContent;
