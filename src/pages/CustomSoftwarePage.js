import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import CTABlock from '../components/content/CTABlock';
import CustomSoftwareTextImage from '../components/content/CustomSoftwareTextImage';

import { customSoftwareData } from '../data/customSoftwareData';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CustomSoftwarePage = ({ navigationHandler, selectedMenuItemHandler }) => {
  const classes = useStyles();

  const customSoftwareContent = customSoftwareData.map((data) => {
    return (
      <CustomSoftwareTextImage
        heading={data.heading}
        text={data.text}
        image={data.image}
        position={data.position}
      />
    );
  });

  return (
    <Grid container direction="column">
      <Grid item lg={5}>
        <Typography variant="h2">Custom Software Development</Typography>
        <Typography variant="body1">
          Whether we’re replacing old software or inventing new solutions, Arc
          Development is here to help your business tackle technology.
          <br />
          <br />
          Using regular commercial software leaves you with a lot of stuff you
          don’t need, without some of the stuff you do need, and ultimately
          controls the way you work. Without using any software at all you risk
          falling behind competitors and missing out on huge savings from
          increased efficiency.
          <br />
          <br />
          Our custom solutions are designed from the ground up with your needs,
          wants, and goals at the core. This collaborative process produces
          finely tuned software that is much more effective at improving your
          workflow and reducing costs than generalized options.
          <br />
          <br />
          We create exactly what you what, exactly how you want it.
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>{customSoftwareContent[0]}</Grid>
        <Grid item>{customSoftwareContent[1]}</Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Grid item>{customSoftwareContent[2]}</Grid>
      </Grid>
      <Grid item>
        <CTABlock navigationHandler={navigationHandler} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftwarePage;
