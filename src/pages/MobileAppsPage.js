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
import extendAccess from '../assets/extendAccess.svg';
import increaseEngagement from '../assets/increaseEngagement.svg';
import swissKnife from '../assets/swissKnife.svg';

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
        <Typography variant="h4" align={matchesMD ? 'center' : block.position}>
          {block.heading}
        </Typography>
        {block.text.map((para, index) => {
          return (
            <Typography
              key={`${para.slice(0, 5)}-${index}`}
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : block.position}
            >
              {para}
            </Typography>
          );
        })}
      </Grid>
    );
  });

  const iconBlock = [
    {
      alt: 'swiss knife',
      header: 'Extend Functionality',
      image: swissKnife,
      imageWidth: '15rem',
    },
    {
      alt: 'list',
      header: 'Extend Access',
      image: extendAccess,
      imageWidth: '30rem',
    },
    {
      alt: 'notification',
      header: 'Increase Engagement',
      image: increaseEngagement,
      imageWidth: '15rem',
    },
  ].map((icon) => {
    return (
      <HeaderIcon
        key={icon.alt}
        alt={icon.alt}
        header={icon.header}
        image={icon.image}
        imageWidth={icon.imageWidth}
      />
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
          className={classes.blockMargin}
          container
          direction={matchesMD ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems={matchesMD ? 'center' : null}
          spacing={matchesMD ? 10 : 0}
        >
          <Grid item xl lg={4} md={6} sm={7} xs>
            {mobileAppsContent[0]}
          </Grid>
          <Lottie
            animationData={integrationAnimation}
            autoplay
            loop
            style={{ width: '18rem' }}
          />
          <Grid item xl lg={4} md={6} sm={7} xs>
            {mobileAppsContent[1]}
          </Grid>
        </Grid>
        <Grid
          className={classes.blockMargin}
          container
          direction={matchesMD ? 'column' : 'row'}
          justifyContent={matchesMD ? null : 'space-between'}
          spacing={matchesMD ? 8 : 0}
          alignItems={matchesMD ? 'center' : null}
        >
          {iconBlock}
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default MobileAppsPage;
