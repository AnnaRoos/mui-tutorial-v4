import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HeaderIcon = ({ alt, header, image }) => {
  return (
    <Grid item>
      <Grid container item direction="column">
        <Grid item>
          <Typography variant="h4">{header}</Typography>
          <Grid item>
            <img alt={alt} src={image} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderIcon;
