import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import infoBackground from '../../assets/infoBackground.svg';
import LearnMoreBtn from '../buttons/LearnMoreBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    padding: '5rem',
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));

const InfoBlock = () => {
  const classes = useStyles();

  const learnBtnStyling = {
    color: 'white',
    borderColor: 'white',
    fontSize: '0.7rem',
    height: '2.5rem',
    width: '8rem',
  };

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Grid container direction="column">
          <Typography>About Us</Typography>
          <Typography>Let’s get personal.</Typography>
          <LearnMoreBtn
            styling={learnBtnStyling}
            arrowStyling={{ color: 'white' }}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-end">
          <Typography>Contact Us</Typography>
          <Typography>Say hello!</Typography>
          <LearnMoreBtn
            styling={learnBtnStyling}
            arrowStyling={{ color: 'white' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
