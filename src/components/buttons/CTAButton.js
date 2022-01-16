import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ctaButton: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: '45px',
    minWidth: '150px',
    margin: (position) => position.margin,
  },
}));

const CTAButton = ({ navigationHandler, position }) => {
  const classes = useStyles(position);
  return (
    <Button
      className={classes.ctaButton}
      component={Link}
      onClick={(event) => navigationHandler(event)}
      to={'/estimate'}
      variant="contained"
      color="secondary"
    >
      Free Estimate
    </Button>
  );
};

export default CTAButton;
