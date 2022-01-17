import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import airplane from '../assets/send.svg';
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
  messageInput: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    borderRadius: 5,
    margin: '3rem 0 1rem 0',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

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

        <Grid container direction="column" item spacing={3}>
          <Grid item>
            <TextField
              id="name"
              label="Name"
              onChange={(event) => inputChangeHandler(event)}
              value={enteredName}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Email"
              onChange={(event) => inputChangeHandler(event)}
              value={enteredEmail}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              id="phone"
              label="Phone"
              onChange={(event) => inputChangeHandler(event)}
              value={enteredPhone}
            ></TextField>
          </Grid>
        </Grid>

        <Grid item>
          <TextField
            className={classes.messageInput}
            InputProps={{ disableUnderline: true }}
            id="message"
            multiline
            onChange={(event) => inputChangeHandler(event)}
            placeholder="Write your message"
            rows={10}
            value={enteredMessage}
          ></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained">
            Send Message <img alt="paper plane" src={airplane} />
          </Button>
        </Grid>
      </Grid>

      <Grid className={classes.backgroundImg} container item lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
