import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

const useStyles = makeStyles((theme) => ({
  backgroundImg: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    height: '40rem',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid container direction="column" item lg={3} justifyContent="center">
        <Grid item>
          <Typography variant="h3" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.arcBlue }}
          >
            We're waiting.
          </Typography>
        </Grid>

        <Grid container item spacing={1}>
          <Grid item>
            <img alt="phone icon" src={phoneIcon} />
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: theme.palette.common.arcBlue }}
            >
              +46 08 00 00 00
            </Typography>
          </Grid>
        </Grid>

        <Grid container item spacing={1}>
          <Grid item>
            <img
              alt="email icon"
              src={emailIcon}
              style={{ verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: theme.palette.common.arcBlue }}
            >
              person@emailprovider.com
            </Typography>
          </Grid>
        </Grid>
        <Grid comtainer item>
          <Grid item>
            <TextField id="name" label="Name"></TextField>
          </Grid>
          <Grid item>
            <TextField id="email" label="Email"></TextField>
          </Grid>
          <Grid item>
            <TextField id="phone" label="Phone"></TextField>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.backgroundImg} container item lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
