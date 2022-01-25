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
  span = null,
}) => {
  const classes = useStyles();

  const learnBtnStyling = {
    fontSize: '0.7rem',
    height: '2.5rem',
    width: '8rem',
  };

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
        <LearnMoreBtn styling={learnBtnStyling} />
      </Grid>
      <Grid item>
        <img alt={alt} src={icon} />
      </Grid>
    </>
  );
};

export default ServicesBlockContent;
