import React from 'react';

import Grid from '@material-ui/core/Grid';

const FooterLinkBox = ({ children }) => {
  return (
    <Grid item>
      <Grid container direction="column">
        {children}
      </Grid>
    </Grid>
  );
};

export default FooterLinkBox;
