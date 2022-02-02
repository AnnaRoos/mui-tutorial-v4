import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import CTABtn from '../buttons/CTABtn';
import LearnMoreBtn from '../buttons/LearnMoreBtn';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    padding: '5rem',
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
  },
  textContainer: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subtitle2: {
    margin: '0 0 1rem 0',
  },
}));

const CTABlock = ({ navigationHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      className={classes.root}
      container
      direction={matchesSM ? 'column' : 'row'}
      alignItems="center"
      justifyContent={matchesSM ? 'space-evenly' : 'space-between'}
    >
      <Grid item>
        <Grid className={classes.textContainer} container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography className={classes.subtitle2} variant="subtitle2">
              Take advantage of the 21st century.
            </Typography>
            <LearnMoreBtn
              size="sm"
              color="blue"
              navigationHandler={navigationHandler}
              path="/revolution"
              activeIndex={2}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.ctaBtn} item>
        <CTABtn navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default CTABlock;
