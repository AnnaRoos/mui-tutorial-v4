import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Hidden, useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import ArrowBtn from '../components/buttons/ArrowBtn';
import CTABlock from '../components/content/CTABlock';
import CustomSoftwareTextImage from '../components/content/CustomSoftwareTextImage';

import {
  customSoftwareBlocks,
  customSoftwareMainText,
} from '../data/customSoftwareData';

import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';
import cash from '../assets/cash.svg';
import HeaderIcon from '../components/content/HeaderIcon';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: { padding: '2rem 5rem 10rem 5rem' },
  firstBlock: { margin: '0 0 10rem 0' },
  secondBlock: { margin: '0 0 10rem 0' },
  thirdBlock: { margin: '0 0 10rem 0' },
  fourthBlock: { margin: '0 0 10rem 0' },
  mainTextContainer: { maxWidth: '40rem' },
  arrowLeftContainer: {
    margin: '0.5rem 0.75rem 0 -3.5rem',
  },
  arrowRightContainer: {
    margin: '0.5rem 0 0 0',
  },
}));

const CustomSoftwarePage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const customSoftwareMainContent = customSoftwareMainText.map((para) => {
    return (
      <Typography key={para.slice(0, 4)} variant="body1" paragraph>
        {para}
      </Typography>
    );
  });

  const customSoftwareContent = customSoftwareBlocks.map((data) => {
    return (
      <CustomSoftwareTextImage
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
    { alt: 'lightbulb', header: 'Save Energy', image: lightbulb },
    { alt: 'stopwatch', header: 'Save Time', image: stopwatch },
    { alt: 'cash', header: 'Save Money', image: cash },
  ].map((icon) => {
    return (
      <HeaderIcon
        key={icon.alt}
        alt={icon.alt}
        header={icon.header}
        image={icon.image}
      />
    );
  });

  return (
    <Grid container direction="column">
      <Grid className={classes.root} container direction="column">
        <Grid
          className={classes.firstBlock}
          item
          container
          direction="row"
          justifyContent={matchesMD ? 'center' : null}
        >
          <Hidden mdDown>
            <Grid className={classes.arrowLeftContainer} item>
              <ArrowBtn
                direction="back"
                to="/services"
                selectedIndex={0}
                selectedMenuItemHandler={selectedMenuItemHandler}
              />
            </Grid>
          </Hidden>

          <Grid
            className={classes.mainTextContainer}
            item
            container
            direction="column"
          >
            <Grid item>
              <Typography variant="h2">Custom Software Development</Typography>
            </Grid>
            <Grid item>{customSoftwareMainContent}</Grid>
          </Grid>
          <Hidden mdDown>
            <Grid className={classes.arrowRightContainer} item>
              <ArrowBtn
                direction="forward"
                to="/mobileapps"
                selectedIndex={2}
                selectedMenuItemHandler={selectedMenuItemHandler}
              />
            </Grid>
          </Hidden>
        </Grid>

        <Grid className={classes.secondBlock} container justifyContent="center">
          {iconBlock}
        </Grid>

        <Grid
          className={classes.thirdBlock}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>{customSoftwareContent[0]}</Grid>
          <Grid item>{customSoftwareContent[1]}</Grid>
        </Grid>
        <Grid
          className={classes.fourthBlock}
          container
          direction="row"
          justifyContent="center"
        >
          <Grid item>{customSoftwareContent[2]}</Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
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
