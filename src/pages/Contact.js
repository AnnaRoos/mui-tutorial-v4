import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import SendMsgBtn from '../components/buttons/SendMsgBtn';

import background from '../assets/background.jpg';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  airplane: {
    marginLeft: '1rem',
  },
  backgroundImg: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    height: '45rem',
  },
  contactHeading: {
    fontFamily: 'Raleway',
    color: theme.palette.common.arcBlue,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  formContainer: {
    color: theme.palette.common.arcBlue,
  },
  messageInput: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    borderRadius: 5,
    paddingLeft: '0.5rem',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const inputChangeHandler = (event) => {
    if (event.target.id === 'name') setEnteredName(event.target.value);
    if (event.target.id === 'email') setEnteredEmail(event.target.value);
    if (event.target.id === 'phone') setEnteredPhone(event.target.value);
    if (event.target.id === 'message') setEnteredMessage(event.target.value);
  };

  const textFieldData = [
    { id: 'name', label: 'Name', value: enteredName },
    { id: 'email', label: 'Email', value: enteredEmail },
    { id: 'phone', label: 'Phone', value: enteredPhone },
  ];

  const textFields = textFieldData.map((input) => {
    return (
      <Grid item>
        <TextField
          fullWidth
          id={input.id}
          label={input.label}
          onChange={(event) => inputChangeHandler(event)}
          value={input.value}
        ></TextField>
      </Grid>
    );
  });

  return (
    <Grid container direction="row">
      <Grid
        alignItems="center"
        className={classes.formContainer}
        container
        direction="column"
        item
        justifyContent="center"
        lg={4}
        style={{
          marginBottom: matchesMD ? '5rem' : 0,
          marginTop: matchesSM ? '3rem' : matchesMD ? '5rem' : 0,
        }}
        xl={3}
      >
        <Grid item>
          <Grid container item direction="column">
            <Typography
              align={matchesMD ? 'center' : 'left'}
              className={classes.contactHeading}
              variant="h3"
            >
              Contact Us
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'left'}
              className={classes.waiting}
              variant="body1"
            >
              We're waiting.
            </Typography>
          </Grid>

          <Grid container item spacing={1} style={{ marginTop: '2rem' }}>
            <Grid item>
              <img alt="phone icon" src={phoneIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.contactInfo} variant="body2">
                +46 08 00 00 00
              </Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={1} style={{ marginBottom: '1rem' }}>
            <Grid item>
              <img
                alt="email icon"
                src={emailIcon}
                style={{ verticalAlign: 'bottom' }}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.contactInfo} variant="body2">
                person@emailprovider.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            item
            spacing={1}
            style={{ marginBottom: '1rem', maxWidth: '20rem' }}
          >
            {textFields}
          </Grid>

          <Grid item style={{ marginBottom: '1rem', maxWidth: '20rem' }}>
            <TextField
              className={classes.messageInput}
              fullWidth
              id="message"
              InputProps={{ disableUnderline: true }}
              multiline
              onChange={(event) => inputChangeHandler(event)}
              placeholder="Write your message"
              rows={10}
              value={enteredMessage}
            ></TextField>
          </Grid>
          <Grid item container justifyContent="center">
            <SendMsgBtn />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className={classes.backgroundImg}
        container
        item
        lg={8}
        xl={9}
      ></Grid>
    </Grid>
  );
};

export default Contact;
