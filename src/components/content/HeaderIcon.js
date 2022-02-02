import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HeaderIcon = ({ alt, header, image }) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      spacing={2}
      md={3}
      lg={3}
      xl={3}
    >
      <Grid item>
        <Typography variant="h4">{header}</Typography>
      </Grid>
      <Grid item>
        <img alt={alt} src={image} />
      </Grid>
    </Grid>
  );
};

export default HeaderIcon;
