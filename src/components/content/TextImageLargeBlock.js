import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Lottie from 'lottie-react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '5rem',
  },
  textContainer: {
    maxWidth: '40rem',
  },
  img: {
    maxWidth: '40rem',
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
      <Grid item lg>
        <img className={classes.img} alt={alt} src={image} />
      </Grid>
    );
  }

  if (animation) {
    imageContent = (
      <Grid
        item
        container
        lg
        justifyContent={matchesMD ? 'center' : 'flex-end'}
      >
        <Lottie
          animationData={animation}
          autoplay
          loop
          style={{ maxWidth: '40rem', margin: 0 }}
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
      className={classes.root}
      container
      item
      direction={matchesMD ? 'column' : 'row'}
      alignItems="center"
    >
      {position === 'right' || matchesMD ? imageContent : null}

      <Grid
        className={classes.textContainer}
        container
        item
        direction="column"
        lg
      >
        <Grid item>
          <Typography
            variant="h4"
            gutterBottom
            align={matchesMD ? 'center' : position}
          >
            {heading}
          </Typography>
        </Grid>
        <Grid item>{textContent}</Grid>
      </Grid>

      {position === 'left' && !matchesMD ? imageContent : null}
    </Grid>
  );
};
export default TextImageLargeBlock;
