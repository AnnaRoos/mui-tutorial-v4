import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import SendMsgBtn from '../components/buttons/SendMsgBtn';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';

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
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  contactContainer: {
    color: theme.palette.common.arcBlue,
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
      marginBottom: '5rem',
    },
  },
  contactHeading: {
    fontFamily: 'Raleway',
    color: theme.palette.common.arcBlue,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  margin: {
    marginTop: '1rem',
  },
  maxWidth: {
    maxWidth: '20rem',
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
        className={classes.contactContainer}
        container
        direction="column"
        item
        justifyContent="center"
        md={5}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container item direction="column">
            <Typography
              align={matchesSM ? 'center' : 'left'}
              className={classes.contactHeading}
              variant="h3"
            >
              Contact Us
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'left'}
              className={classes.waiting}
              variant="body1"
            >
              We're waiting.
            </Typography>
          </Grid>

          <Grid className={classes.margin} container item spacing={1}>
            <Grid item>
              <img alt="phone icon" src={phoneIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.contactInfo} variant="body2">
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
              <Typography className={classes.contactInfo} variant="body2">
                person@emailprovider.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            className={[classes.margin, classes.maxWidth]}
            container
            direction="column"
            item
            spacing={1}
          >
            {textFields}
          </Grid>

          <Grid className={[classes.margin, classes.maxWidth]} item>
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
          <Grid
            className={classes.margin}
            item
            container
            justifyContent="center"
          >
            <SendMsgBtn />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className={classes.backgroundImg}
        container
        item
        md={7}
        lg={8}
        xl={9}
      ></Grid>
    </Grid>
  );
};

export default Contact;
