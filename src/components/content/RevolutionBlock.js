import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import LearnMoreBtn from '../buttons/LearnMoreBtn';

import repeatingBackground from '../../assets/repeatingBackground.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    margin: '5rem 0 0 0',
    backgroundImage: `url(${repeatingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  card: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '6rem',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      width: '100vw',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '3rem 0',
      borderRadius: 0,
    },
  },
}));

const RevolutionBlock = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Visionary insights coupled with cutting-edge technology is a
                recipe for revolution.
              </Typography>
            </Grid>
            <Grid item>
              <LearnMoreBtn />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RevolutionBlock;
