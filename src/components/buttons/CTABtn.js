import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: '3rem',
    width: '9rem',
    margin: (position) => position.margin,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CTAButton = ({ navigationHandler, position }) => {
  const classes = useStyles(position);
  return (
    <Button
      className={classes.root}
      component={Link}
      color="secondary"
      disableElevation
      onClick={(event) => navigationHandler(event, 5)}
      to={'/estimate'}
      variant="contained"
    >
      Free Estimate
    </Button>
  );
};

export default CTAButton;
