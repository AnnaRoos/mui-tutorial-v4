import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';
import TextImageLargeBlock from '../components/content/TextImageLargeBlock';

import { introText, historyText, teamText } from '../data/aboutData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem 10rem 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 3rem 10rem 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 5rem 1rem',
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
    [theme.breakpoints.down('md')]: {
      marginBottom: '5rem',
    },
  },
  history: {
    maxWidth: '40rem',
  },
  avatar: {
    margin: '2rem 0 3rem 0',

    width: '20rem',
    height: '20rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
      height: '15rem',
    },
  },
  img: {
    maxWidth: '25rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '15rem',
    },
  },
  teamText2: {
    maxWidth: '40rem',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
}));

const AboutPage = ({ navigationHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const teamText2 = (
    <Grid className={classes.teamText2} item lg>
      <Typography variant="body1" align="center" paragraph>
        {teamText.text[2]}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        {teamText.text[3]}
      </Typography>
    </Grid>
  );

  return (
    <Grid container direction="column">
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
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              {teamText.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" paragraph>
              {teamText.text[0]}
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {teamText.text[1]}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.avatar}
              alt="Zachary Reece, founder"
              src={teamText.founderImg}
            />
          </Grid>

          <Grid
            container
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : null}
          >
            <Hidden lgUp>{teamText2}</Hidden>
            <Grid
              container
              item
              direction="column"
              alignItems={matchesMD ? 'center' : 'flex-start'}
              lg
            >
              <Grid item>
                <img
                  className={classes.img}
                  src={teamText.imgLeft}
                  alt="yearbook article"
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  {teamText.captionLeft}
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdDown>{teamText2}</Hidden>
            <Grid
              item
              container
              direction="column"
              lg
              alignItems={matchesMD ? 'center' : 'flex-end'}
            >
              <Grid item>
                <img
                  className={classes.img}
                  src={teamText.imgRight}
                  alt="cute dog"
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  {teamText.captionRight}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default AboutPage;
