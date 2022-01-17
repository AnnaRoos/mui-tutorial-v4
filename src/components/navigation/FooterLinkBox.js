import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  linkBox: { margin: '3em' },
}));

const FooterLinkBox = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.linkBox}>
      <Grid container direction="column" spacing={2}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FooterLinkBox;
