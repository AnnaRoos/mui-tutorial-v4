import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import FooterLinks from './FooterLinks';
import FooterLinkBox from './FooterLinkBox';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'absolute',
  },
}));

const FooterNavigation = ({ boxes }) => {
  const classes = useStyles();

  const footerBoxes = [...Array(boxes)].map((_, index) => {
    return (
      <FooterLinkBox key={`linkbox-${index}`}>
        <FooterLinks box={index} />
      </FooterLinkBox>
    );
  });

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="row"
      justifyContent="center"
      spacing={8}
    >
      {footerBoxes}
    </Grid>
  );
};

export default FooterNavigation;
