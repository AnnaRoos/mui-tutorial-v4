import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  textContainer: {
    maxWidth: '20rem',
  },
}));

const CustomSoftwareTextImage = ({ alt, heading, image, position, text }) => {
  const classes = useStyles();
  const imageContent = (
    <Grid item>
      <img alt={alt} src={image} style={{ width: '15rem' }} />
    </Grid>
  );
  const textContent = text.map((paragraph) => (
    <>
      <Typography variant="body1" style={{ textAlign: position }}>
        {paragraph}
      </Typography>
      <br />
    </>
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
