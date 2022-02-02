import React from 'react';

import Lottie from 'lottie-react';

import Grid from '@material-ui/core/Grid';
import { Typography, useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';
import HeaderIcon from '../components/content/HeaderIcon';
import ServicesSubPageMainText from '../components/content/ServicesSubPageMainText';

import integrationAnimation from '../animations/integrationAnimation/data.json';

import { mobileAppsMainText, mobileAppsBlocks } from '../data/mobileAppsData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem 10rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 10rem 1rem',
    },
  },

  blockMargin: { marginBottom: '10rem' },
}));

const MobileAppsPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const mobileAppsContent = mobileAppsBlocks.map((block) => {
    return (
      <Grid key={block.heading} container direction="column">
        <Typography variant="h4" align={block.position}>
          {block.heading}
        </Typography>
        {block.text.map((para, index) => {
          return (
            <Typography
              key={`${para.slice(0, 5)}-${index}`}
              variant="body1"
              paragraph
              align={block.position}
            >
              {para}
            </Typography>
          );
        })}
      </Grid>
    );
  });

  return (
    <Grid container direction="column">
      <Grid className={classes.root} container direction="column">
        <ServicesSubPageMainText
          backPath="/customsoftware"
          forwardPath="/websites"
          heading="iOS/Android App Development"
          mainText={mobileAppsMainText}
          selectedIndexBack={1}
          electedIndexForward={3}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems={matchesMD ? 'center' : null}
          spacing={matchesMD ? 10 : 0}
        >
          <Grid item xl lg md={6} sm={7} xs>
            {mobileAppsContent[0]}
          </Grid>
          <Lottie
            animationData={integrationAnimation}
            autoplay
            loop
            style={{ width: '18rem' }}
          />
          <Grid item xl lg md={6} sm={7} xs>
            {mobileAppsContent[1]}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default MobileAppsPage;
