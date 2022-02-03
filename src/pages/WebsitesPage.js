import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import CTABlock from '../components/content/CTABlock';
import ImageTextSmallBlock from '../components/content/ImageTextSmallBlock';
import ServicesSubPageMainText from '../components/content/ServicesSubPageMainText';

import { websitesBlocks, websitesMainText } from '../data/websitesData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem 10rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem 10rem 1rem',
    },
  },
  blockMargin: { marginBottom: '10rem' },
}));

const WebsitesPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const websitesContent = websitesBlocks.map((data) => {
    return (
      <ImageTextSmallBlock
        alt={data.alt}
        heading={data.heading}
        image={data.image}
        position={data.position}
        text={data.text}
      />
    );
  });

  return (
    <Grid container direction="column">
      <Grid className={classes.root} container direction="column">
        <ServicesSubPageMainText
          backPath="/mobileapps"
          heading="Websites"
          mainText={websitesMainText}
          selectedIndexBack={2}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
        <Grid item>{websitesContent[0]}</Grid>
        <Grid item>{websitesContent[1]}</Grid>
        <Grid item>{websitesContent[2]}</Grid>
        <Grid item>{websitesContent[3]}</Grid>
      </Grid>

      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default WebsitesPage;
