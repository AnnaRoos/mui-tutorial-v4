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
    maxWidth: '60rem',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '40rem',
    },
  },
  img: {
    maxWidth: '60rem',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '40rem',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '20rem',
    },
  },
  subheading: {
    fontWeight: 700,
    fontStyle: 'italic',
  },
}));

const TextImageLargeBlock = ({
  alt,
  animation = null,
  heading,
  image = null,
  position,
  subheading = null,
  text,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  let subheadingContent;
  if (subheading) {
    subheadingContent = (
      <Grid item>
        <Typography
          className={classes.subheading}
          variant="body1"
          gutterBottom
          align={matchesMD ? 'center' : position}
        >
          {subheading}
        </Typography>
      </Grid>
    );
  }

  let imageContent;
  if (image) {
    imageContent = (
      <Grid item container lg justifyContent="center">
        <img className={classes.img} alt={alt} src={image} />
      </Grid>
    );
  }
  if (animation) {
    imageContent = (
      <Grid item container lg justifyContent="center">
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
        {subheadingContent}
        <Grid item>{textContent}</Grid>
      </Grid>

      {position === 'left' && !matchesMD ? imageContent : null}
    </Grid>
  );
};
export default TextImageLargeBlock;
