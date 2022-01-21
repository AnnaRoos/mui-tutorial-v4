import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/phone.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  emailIcon: {
    verticalAlign: 'bottom',
  },
});

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item spacing={1}>
        <Grid item>
          <img alt="phone icon" src={phoneIcon} />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <a href="tel:+46 08 00 00 00">+46 08 00 00 00</a>
          </Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item>
          <img alt="email icon" className={classes.emailIcon} src={emailIcon} />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <a href="mailto:person@emailprovider.com">
              person@emailprovider.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactInfo;
