import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70rem',
    backgroundColor: (props) => props.backgroundColor,
    padding: '5rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem',
      height: '80rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3rem 1rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100rem',
    },
  },
  textContainer: {
    maxWidth: '20rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '40rem',
      marginBottom: '5rem',
    },
  },
  heading: { color: 'black' },
  para: { color: 'white' },
  img: {
    maxWidth: '50rem',
    maxHeight: '50rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '40rem',
      maxHeight: '40rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
      maxHeight: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '20rem',
      maxHeight: '30rem',
    },
  },
}));

const ProcessBlock = (props) => {
  const { alt, heading, image, text } = props;
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const textContent = text.map((para) => {
    return (
      <Grid item>
        <Typography
          className={classes.para}
          variant="body1"
          paragraph
          align={matchesMD ? 'center' : 'left'}
        >
          {para}
        </Typography>
      </Grid>
    );
  });
  return (
    <Grid
      className={classes.root}
      container
      direction={matchesMD ? 'column' : 'row'}
      alignItems={matchesMD ? 'center' : null}
    >
      <Grid
        className={classes.textContainer}
        container
        item
        direction="column"
        lg
      >
        <Grid item>
          <Typography
            className={classes.heading}
            variant="h4"
            gutterBottom
            align={matchesMD ? 'center' : 'left'}
          >
            {heading}
          </Typography>
        </Grid>
        {textContent}
      </Grid>
      <Grid container item justifyContent="center" alignItems="center" lg>
        <Grid item>
          <img className={classes.img} alt={alt} src={image} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProcessBlock;
