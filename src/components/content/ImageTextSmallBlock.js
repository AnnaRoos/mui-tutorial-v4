import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  textContainer: { maxWidth: '30rem' },
  imageContainer: { maxWidth: '25rem' },
  img: {
    width: '20rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
    },
  },
}));

const ImageTextSmallBlock = ({ alt, heading, image, position, text }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const textContent = text.map((paragraph, index) => (
    <Typography
      key={`${paragraph.slice(0, 3)}-${index}`}
      variant="body1"
      paragraph
      align={matchesXS ? 'center' : 'left'}
    >
      {paragraph}
    </Typography>
  ));
  return (
    <Grid
      container
      justifyContent={position === 'left' ? 'flex-start' : 'flex-end'}
      alignItems="center"
    >
      <Grid
        className={classes.imageContainer}
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4" align="left">
            {heading}
          </Typography>
        </Grid>
        <Grid item>
          <img className={classes.img} alt={alt} src={image} />
        </Grid>
      </Grid>
      <Grid className={classes.textContainer} item>
        {textContent}
      </Grid>
    </Grid>
  );
};

export default ImageTextSmallBlock;
