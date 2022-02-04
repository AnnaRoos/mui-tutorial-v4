import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';
import TextImageSmallBlock from '../components/content/TextImageSmallBlock';
import HeaderIcon from '../components/content/HeaderIcon';
import ServicesSubPageMainText from '../components/content/ServicesSubPageMainText';

import {
  customSoftwareBlocks,
  customSoftwareMainText,
} from '../data/customSoftwareData';

import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';
import cash from '../assets/cash.svg';

const useStyles = makeStyles((theme) => ({
  root: {
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

const CustomSoftwarePage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const customSoftwareContent = customSoftwareBlocks.map((data) => {
    return (
      <TextImageSmallBlock
        animation={data.animation}
        alt={data.alt}
        heading={data.heading}
        image={data.image}
        position={data.position}
        text={data.text}
      />
    );
  });

  const iconBlock = [
    {
      alt: 'lightbulb',
      header: 'Save Energy',
      image: lightbulb,
      imageWidth: '5rem',
    },
    {
      alt: 'stopwatch',
      header: 'Save Time',
      image: stopwatch,
      imageWidth: '5rem',
    },
    { alt: 'cash', header: 'Save Money', image: cash, imageWidth: '5rem' },
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
          backPath="/services"
          forwardPath="/mobileapps"
          heading="Custom Software Development"
          mainText={customSoftwareMainText}
          selectedIndexBack={0}
          electedIndexForward={2}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
        <Grid
          className={classes.blockMargin}
          container
          direction={matchesSM ? 'column' : 'row'}
          justifyContent={matchesSM ? null : 'center'}
          spacing={matchesSM ? 4 : 0}
          alignItems={matchesSM ? 'center' : null}
        >
          {iconBlock}
        </Grid>

        <Grid
          className={classes.blockMargin}
          container
          direction={matchesMD ? 'column' : 'row'}
          justifyContent={matchesMD ? null : 'space-between'}
          alignItems={matchesMD ? 'center' : null}
        >
          <Grid item>{customSoftwareContent[0]}</Grid>
          <Grid item>{customSoftwareContent[1]}</Grid>
        </Grid>
        <Grid
          className={classes.blockMargin}
          container
          direction="row"
          justifyContent="center"
        >
          <Grid item>{customSoftwareContent[2]}</Grid>
        </Grid>
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          justifyContent={matchesMD ? null : 'space-between'}
          alignItems={matchesMD ? 'center' : null}
        >
          <Grid item>{customSoftwareContent[3]}</Grid>
          <Grid item>{customSoftwareContent[4]}</Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftwarePage;
