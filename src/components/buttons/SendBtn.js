import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import airplane from '../../assets/send.svg';

const useStyles = makeStyles((theme) => ({
  airplane: {
    marginLeft: '1rem',
  },
  sendBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: '50px',
    height: '3rem',
    width: '12rem',
    '&:hover': {
      backgroundColor: theme.palette.common.arcOrange,
    },
    [theme.breakpoints.down('sm')]: {
      height: '2.5rem',
      width: '11rem',
    },
  },
}));

const SendBtn = ({ disabled, sendBtnClickHandler }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.sendBtn}
      disabled={disabled}
      onClick={sendBtnClickHandler}
      variant="contained"
    >
      Send Message
      <img alt="paper plane" className={classes.airplane} src={airplane} />
    </Button>
  );
};

export default SendBtn;
