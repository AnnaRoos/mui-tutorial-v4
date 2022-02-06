import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60rem',
    backgroundColor: (props) => props.backgroundColor,
    padding: '5rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  textContainer: {
    maxWidth: '20rem',
  },
  heading: { color: 'black' },
  para: { color: 'white' },
  imgContainer: {
    alignSelf: 'center',
  },
}));

const ProcessBlock = (props) => {
  const { alt, heading, image, text } = props;
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const textContent = text.map((para) => {
    return (
      <Grid item>
        <Typography className={classes.para} variant="body1" paragraph>
          {para}
        </Typography>
      </Grid>
    );
  });
  return (
    <Grid className={classes.root} container direction="row">
      <Grid
        className={classes.textContainer}
        container
        item
        direction="column"
        lg
      >
        <Grid item>
          <Typography className={classes.heading} variant="h4" gutterBottom>
            {heading}
          </Typography>
        </Grid>
        {textContent}
      </Grid>
      <Grid
        container
        item
        className={classes.imgContainer}
        lg
        justifyContent="center"
      >
        <img alt={alt} src={image} />
      </Grid>
    </Grid>
  );
};

export default ProcessBlock;
