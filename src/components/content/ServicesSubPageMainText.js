import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import ArrowBtn from '../../components/buttons/ArrowBtn';

const useStyles = makeStyles((theme) => ({
  firstBlock: { marginBottom: '10rem' },
  mainTextContainer: { maxWidth: '40rem' },
  arrowLeftContainer: {
    margin: '0.5rem 0.75rem 0 -3.5rem',
  },
  arrowRightContainer: {
    margin: '0.5rem 0 0 0',
  },
}));

const ServicesSubPageMainText = ({
  backPath,
  forwardPath,
  heading,
  mainText,
  selectedIndexBack,
  selectedIndexForward,
  selectedMenuItemHandler,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const mainContent = mainText.map((para) => {
    return (
      <Typography
        key={para.slice(0, 4)}
        align={matchesMD ? 'center' : 'left'}
        variant="body1"
        paragraph
      >
        {para}
      </Typography>
    );
  });

  return (
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
            to={backPath}
            selectedIndex={selectedIndexBack}
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
          <Typography variant="h2" align={matchesMD ? 'center' : 'left'}>
            {heading}
          </Typography>
        </Grid>
        <Grid item>{mainContent}</Grid>
      </Grid>
      <Hidden mdDown>
        <Grid className={classes.arrowRightContainer} item>
          <ArrowBtn
            direction="forward"
            to={forwardPath}
            selectedIndex={selectedIndexForward}
            selectedMenuItemHandler={selectedMenuItemHandler}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default ServicesSubPageMainText;
