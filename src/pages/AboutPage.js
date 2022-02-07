import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { introText, historyText } from '../data/aboutData';
import TextImageLargeBlock from '../components/content/TextImageLargeBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem 0 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 3rem 0 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 0 1rem',
    },
  },
  heading: { marginBottom: '5rem' },
  introText: {
    maxWidth: '80rem',
    fontStyle: 'italic',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.4,
    marginBottom: '10rem',
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid className={classes.root} container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h2" align={matchesMD ? 'center' : 'left'}>
          About Us
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Typography className={classes.introText} variant="h4" align="center">
          {introText}
        </Typography>
      </Grid>
      <TextImageLargeBlock
        alt={historyText.alt}
        heading={historyText.heading}
        image={historyText.image}
        position={historyText.position}
        subheading={historyText.subheading}
        text={historyText.text}
      />
    </Grid>
  );
};

export default AboutPage;
