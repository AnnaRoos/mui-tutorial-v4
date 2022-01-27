import React from 'react';

import Grid from '@material-ui/core/Grid';

import ServicesBlock from '../components/content/ServicesBlock';

const ServicesPage = ({ navigationHandler, selectedMenuItemHandler }) => {
  return (
    <Grid>
      <ServicesBlock
        navigationHandler={navigationHandler}
        selectedMenuItemHandler={selectedMenuItemHandler}
      />
    </Grid>
  );
};

export default ServicesPage;
