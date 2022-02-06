import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';
import ProcessBlock from '../components/content/ProcessBlock';

import { revolutionMainBlocks, processBlocks } from '../data/revolutionData';
import TextImageLargeBlock from '../components/content/TextImageLargeBlock';

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: '2rem' },
  rowContainer: {
    padding: '0 5rem 0 5rem',

    [theme.breakpoints.down('md')]: {
      padding: '0 3rem 0 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem 0 1rem',
    },
  },
  heading: {
    fontFamily: 'Pacifico',
    marginBottom: '5rem',
  },
  processHeading: { marginBottom: '3rem' },
}));

const RevolutionPage = ({ navigationHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const largeTextContent = revolutionMainBlocks.map((block) => {
    return (
      <TextImageLargeBlock
        alt={block.alt}
        animation={block.animation}
        heading={block.heading}
        image={block.image}
        position={block.position}
        text={block.text}
      />
    );
  });

  const processContent = processBlocks.map((block) => {
    return (
      <ProcessBlock
        backgroundColor={block.backgroundColor}
        heading={block.heading}
        text={block.text}
        alt={block.alt}
        image={block.image}
      />
    );
  });

  return (
    <Grid className={classes.root} container direction="column">
      <Grid className={classes.rowContainer} container direction="column">
        <Grid item>
          <Typography
            className={classes.heading}
            variant="h2"
            align={matchesMD ? 'center' : 'left'}
          >
            The Revolution
          </Typography>
        </Grid>
        {largeTextContent}
        <Grid
          className={classes.processHeading}
          container
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Process
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {processContent}
      <Grid className={classes.rowContainer} container></Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default RevolutionPage;
