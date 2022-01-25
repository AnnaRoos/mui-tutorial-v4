import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LearnMoreBtn from '../buttons/LearnMoreBtn';

const RevolutionBlock = () => {
  const learnBtnConfig = { fontSize: '0.9rem', height: '3rem', width: '9rem' };
  return (
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3">The Revolution</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Visionary insights coupled with cutting-edge technology is a
              recipe for revolution.
            </Typography>
          </Grid>
          <Grid item>
            <LearnMoreBtn config={learnBtnConfig} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RevolutionBlock;
