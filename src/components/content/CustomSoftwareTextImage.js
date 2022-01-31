import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import Lottie from 'lottie-react';

const useStyles = makeStyles((theme) => ({
  root: {},
  textContainer: {
    maxWidth: '20rem',
  },
  img: { width: '25rem' },
  animation: {
    maxWidth: '20rem',
  },
}));

const CustomSoftwareTextImage = ({
  alt,
  animation,
  heading,
  image,
  position,
  text,
}) => {
  const classes = useStyles();

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
      <Grid className={classes.animation} item>
        <Lottie animationData={animation} autoplay loop />
      </Grid>
    );
  }

  const textContent = text.map((paragraph, index) => (
    <Typography
      key={`${paragraph.slice(0, 3)}-${index}`}
      variant="body1"
      style={{ textAlign: position }}
      paragraph
    >
      {paragraph}
    </Typography>
  ));

  return (
    <Grid
      className={classes.root}
      container
      direction={position === 'center' ? 'column' : 'row'}
      alignItems={
        position === 'left'
          ? 'flex-start'
          : position === 'right'
          ? 'flex-end'
          : 'center'
      }
    >
      {position === 'right' || position === 'center' ? imageContent : null}
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems={
            position === 'left'
              ? 'flex-start'
              : position === 'right'
              ? 'flex-end'
              : 'center'
          }
        >
          <Grid item>
            <Typography variant="h4" style={{ textAlign: position }}>
              {heading}
            </Typography>
          </Grid>
          <Grid className={classes.textContainer} item>
            {textContent}
          </Grid>
        </Grid>
      </Grid>

      {position === 'left' ? imageContent : null}
    </Grid>
  );
};
export default CustomSoftwareTextImage;
