import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import SendBtn from '../buttons/SendBtn';

const useStyles = makeStyles((theme) => ({
  cancelBtn: {
    fontWeight: 400,
  },
  confirmMessageHeading: {
    fontFamily: 'Raleway',
    color: theme.palette.common.arcBlue,
    fontWeight: 'bold',
  },
  marginTop: {
    marginTop: '2rem',
  },
}));

const ContactDialog = ({ children, dialogCloseHandler, open }) => {
  const classes = useStyles();

  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      onClose={dialogCloseHandler}
      open={open}
      PaperProps={{
        style: {
          padding: matchesXS
            ? '1rem 0'
            : matchesSM
            ? '5rem'
            : matchesMD
            ? '5rem 10rem'
            : '5rem 20rem',
        },
      }}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item>
            <Typography
              align="center"
              gutterBottom
              className={classes.confirmMessageHeading}
              variant="h4"
            >
              Confirm Message
            </Typography>
          </Grid>
          {children}
        </Grid>
        <Grid alignItems="center" className={classes.marginTop} container item>
          <Grid item>
            <Button
              className={classes.cancelBtn}
              color="primary"
              onClick={dialogCloseHandler}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <SendBtn></SendBtn>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
