import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ServicesBlock = () => {
  return (
    <Grid container direction="column">
      <Grid container item justifyContent="flex-start">
        <Grid item>
          <Typography>Custom Software Development</Typography>
        </Grid>
      </Grid>
      <Grid container item justifyContent="flex-end">
        <Grid item>
          <Typography>iOS/Android App Development</Typography>
        </Grid>
      </Grid>
      <Grid container item justifyContent="flex-start">
        <Grid item>
          <Typography>Website Development</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesBlock;
