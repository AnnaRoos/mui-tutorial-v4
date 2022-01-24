import React from 'react';

import Grid from '@material-ui/core/Grid';
import LearnMoreBtn from '../buttons/LearnMoreBtn';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    margin: '0 0 0 3rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
  },
  subtitle1: {
    margin: '1rem 0 0 0',
  },
  subtitle2: {
    maxWidth: '34rem',
  },
}));

const ServicesBlockContent = ({ icon, title, subtitle1, subtitle2, span }) => {
  const classes = useStyles();

  const learnBtnConfig = {
    fontSize: '0.7rem',
    height: '2.5rem',
    width: '8rem',
  };

  return (
    <>
      <Grid item>
        <Typography variant="h4">{title}</Typography>
        <Typography className={classes.subtitle1} variant="subtitle1">
          {subtitle1}
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle1">
          {subtitle2} <span className={classes.specialText}>{span}</span>
        </Typography>
        <LearnMoreBtn config={learnBtnConfig} />
      </Grid>
      <Grid item>
        <img alt="custom software icon" className={classes.icon} src={icon} />
      </Grid>
    </>
  );
};

export default ServicesBlockContent;
