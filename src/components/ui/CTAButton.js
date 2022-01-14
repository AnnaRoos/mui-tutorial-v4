import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import { theme } from './Theme';

const useStyles = makeStyles({
  ctaButton: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: '45px',
    minWidth: '150px',
    margin: (position) => position.margin,
  },
});

const CTAButton = ({ position }) => {
  const classes = useStyles(position);
  return (
    <Button className={classes.ctaButton} variant="contained" color="secondary">
      Free Estimate
    </Button>
  );
};

export default CTAButton;
