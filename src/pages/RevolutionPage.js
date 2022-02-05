import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';

import { revolutionMainBlocks } from '../data/revolutionData';
import TextImageLargeBlock from '../components/content/TextImageLargeBlock';

const useStyles = makeStyles((theme) => ({
  root: {},
  firstBlock: {
    padding: '2rem 5rem 10rem 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 3rem 10rem 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 10rem 1rem',
    },
  },

  blockMargin: { marginBottom: '10rem' },
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

  return (
    <Grid className={classes.root} container direction="column">
      <Grid className={classes.firstBlock} container direction="column">
        <Grid item>
          <Typography variant="h2" align={matchesMD ? 'center' : 'left'}>
            The Revolution
          </Typography>
        </Grid>
        {largeTextContent}
      </Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default RevolutionPage;
