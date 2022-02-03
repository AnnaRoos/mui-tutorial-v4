import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Lottie from 'lottie-react';

const useStyles = makeStyles((theme) => ({
  root: {},
  textContainer: { maxWidth: '20rem' },
  img: {
    width: '25rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
    },
  },
}));

const TextImageSmallBlock = ({
  alt,
  animation,
  heading,
  image,
  position,
  text,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  let imageContent;

  if (image) {
    imageContent = (
      <Grid item>
        <img className={classes.img} alt={alt} src={image} />
      </Grid>
    );
  }

  if (animation) {
    imageContent = (
      <Grid item>
        <Lottie
          animationData={animation}
          autoplay
          loop
          style={{ height: '22rem', width: '15rem' }}
        />
      </Grid>
    );
  }

  const textContent = text.map((paragraph, index) => (
    <Typography
      key={`${paragraph.slice(0, 3)}-${index}`}
      variant="body1"
      paragraph
      align={matchesXS || position === 'center' ? 'center' : position}
    >
      {paragraph}
    </Typography>
  ));

  return (
    <Grid
      container
      item
      direction={matchesXS || position === 'center' ? 'column' : 'row'}
      alignItems={matchesXS || position === 'center' ? 'center' : null}
      spacing={matchesXS ? 2 : 0}
    >
      {position === 'right' || position === 'center' ? imageContent : null}
      <Grid item>
        <Grid className={classes.textContainer} container direction="column">
          <Grid item>
            <Typography
              variant="h4"
              align={matchesXS || position === 'center' ? 'center' : position}
            >
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
export default TextImageSmallBlock;
