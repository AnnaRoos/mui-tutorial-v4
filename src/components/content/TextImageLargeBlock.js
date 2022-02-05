import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Lottie from 'lottie-react';

const useStyles = makeStyles((theme) => ({
  root: {},
  textContainer: {
    maxWidth: '50%',
  },
  img: {
    width: '100%',
  },
}));

const TextImageLargeBlock = ({
  alt,
  animation,
  heading,
  image,
  position,
  text,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  let imageContent;

  if (image) {
    imageContent = (
      <Grid item xl={6} lg={6}>
        <img className={classes.img} alt={alt} src={image} />
      </Grid>
    );
  }

  if (animation) {
    imageContent = (
      <Grid item lg={6}>
        <Lottie
          animationData={animation}
          autoplay
          loop
          style={{ width: '100%' }}
        />
      </Grid>
    );
  }

  const textContent = text.map((paragraph, index) => (
    <Typography
      key={`${paragraph.slice(0, 3)}-${index}`}
      variant="body1"
      paragraph
      align={matchesMD ? 'center' : position}
    >
      {paragraph}
    </Typography>
  ));

  return (
    <Grid
      container
      item
      direction={matchesMD ? 'column' : 'row'}
      alignItems={'center'}
      spacing={4}
    >
      {position === 'right' ? imageContent : null}
      <Grid item xl={6} lg={6}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" align={matchesMD ? 'center' : position}>
              {heading}
            </Typography>
          </Grid>
          <Grid item>{textContent}</Grid>
        </Grid>
      </Grid>

      {position === 'left' ? imageContent : null}
    </Grid>
  );
};
export default TextImageLargeBlock;
