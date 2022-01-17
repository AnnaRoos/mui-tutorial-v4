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

const FooterNavigation = ({
  boxes,
  navigationHandler,
  selectedMenuItemHandler,
}) => {
  const classes = useStyles();

  const footerBoxes = [...Array(boxes)].map((_, index) => {
    return (
      <FooterLinkBox key={`linkbox-${index + 1}`}>
        <FooterLinks
          box={index + 1}
          navigationHandler={navigationHandler}
          selectedMenuItemHandler={selectedMenuItemHandler}
        />
      </FooterLinkBox>
    );
  });

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="row"
      justifyContent="center"
      spacing={4}
    >
      {footerBoxes}
    </Grid>
  );
};

export default FooterNavigation;
