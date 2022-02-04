import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import ContactForm from '../components/forms/ContactForm';
import ContactInfo from '../components/content/ContactInfo';
import ContactDialog from '../components/modals/ContactDialog';
import SendBtn from '../components/buttons/SendBtn';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import CTABlock from '../components/content/CTABlock';

const useStyles = makeStyles((theme) => ({
  root: {},
  airplane: {
    marginLeft: '1rem',
  },
  cta: {
    height: '100%',
  },
  contactContainer: {
    color: theme.palette.common.arcBlue,
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
      marginBottom: '5rem',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  contactHeading: {
    fontFamily: 'Raleway',
    color: theme.palette.common.arcBlue,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  emailIcon: {
    verticalAlign: 'bottom',
  },
  margin: {
    marginTop: '2rem',
  },
  maxWidth: {
    maxWidth: '20rem',
  },
  messageInput: {
    '& .MuiInput-root': {
      border: `2px solid ${theme.palette.common.arcBlue}`,
      borderRadius: 5,
      margin: '1rem 0 0 0',
      paddingLeft: '0.5rem',
    },
    '& .Mui-error': {
      border: `2px solid red`,
    },
    '& .MuiFormHelperText-root': {
      border: 'none',
    },
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

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const inputBlurHandler = (event) => {
    let valid;
    switch (event.target.id) {
      case 'name':
        valid = enteredName.length > 0;
        if (!valid) {
          setNameError(true);
        }
        break;
      case 'email':
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          enteredEmail
        );
        if (!valid) {
          setEmailError(true);
        }
        break;
      case 'phone':
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          enteredPhone
        );
        if (!valid) {
          setPhoneError(true);
        }
        break;
      case 'message':
        valid = enteredMessage.length > 0;
        if (!valid) {
          setMessageError(true);
        }
        break;
      default:
        break;
    }
  };

  const inputChangeHandler = (event) => {
    if (event.target.id === 'name') {
      setEnteredName(event.target.value);
    }
    if (event.target.id === 'email') {
      setEnteredEmail(event.target.value);
    }
    if (event.target.id === 'phone') {
      setEnteredPhone(event.target.value);
    }
    if (event.target.id === 'message') {
      setEnteredMessage(event.target.value);
    }
  };

  const inputFocusHandler = (event) => {
    if (event.target.id === 'name') {
      setNameError(false);
    }
    if (event.target.id === 'email') {
      setEmailError(false);
    }
    if (event.target.id === 'phone') {
      setPhoneError(false);
    }
    if (event.target.id === 'message') {
      setMessageError(false);
    }
  };

  const sendBtnClickHandler = () => {
    setDialogIsOpen(true);
  };

  const dialogCloseHandler = () => {
    setDialogIsOpen(false);
  };

  const textFieldData = [
    {
      error: nameError,
      helper: 'your name',
      id: 'name',
      label: 'Name',
      onBlur: inputBlurHandler,
      onChange: inputChangeHandler,
      onFocus: inputFocusHandler,
      value: enteredName,
    },
    {
      error: emailError,
      helper: 'a valid email adress',
      id: 'email',
      label: 'Email',
      onBlur: inputBlurHandler,
      onChange: inputChangeHandler,
      onFocus: inputFocusHandler,
      value: enteredEmail,
    },
    {
      error: phoneError,
      helper: 'a valid phone number',
      id: 'phone',
      label: 'Phone',
      onBlur: inputBlurHandler,
      onChange: inputChangeHandler,
      onFocus: inputFocusHandler,
      value: enteredPhone,
    },
    {
      className: classes.messageInput,
      error: messageError,
      helper: 'your message',
      id: 'message',
      inputProps: {
        disableUnderline: true,
      },
      label: null,
      multiline: true,
      onBlur: inputBlurHandler,
      onChange: inputChangeHandler,
      onFocus: inputFocusHandler,
      placeholder: 'Write your message',
      rows: 7,
      value: enteredMessage,
    },
  ];

  const enteredInputs = [
    enteredName,
    enteredPhone,
    enteredEmail,
    enteredMessage,
  ];

  const inputErrors = [nameError, phoneError, emailError, messageError];

  const sendButtonDisabled =
    enteredInputs.some((input) => input.length === 0) ||
    inputErrors.some((inputError) => inputError === true);

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

          <Grid className={classes.margin} container direction="column">
            <ContactInfo />
          </Grid>

          <Grid
            className={classes.margin}
            container
            direction="column"
            item
            spacing={1}
          >
            <ContactForm form={textFieldData} />
          </Grid>

          <Grid
            className={classes.margin}
            item
            container
            justifyContent="center"
          >
            <SendBtn
              disabled={sendButtonDisabled}
              sendBtnClickHandler={sendBtnClickHandler}
            />
          </Grid>
        </Grid>
      </Grid>
      <ContactDialog
        dialogCloseHandler={dialogCloseHandler}
        open={dialogIsOpen}
      >
        <ContactForm form={textFieldData} />
      </ContactDialog>

      <Grid className={classes.cta} item md={7} lg={8} xl={9}>
        <CTABlock fixed={false} />
      </Grid>
    </Grid>
  );
};

export default Contact;
