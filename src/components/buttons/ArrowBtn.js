import React from 'react';

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';

const useStyles = makeStyles((theme) => ({
  arrowBtn: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const ArrowBtn = ({
  direction = 'forward',
  selectedMenuItemHandler,
  selectedIndex,
  to,
}) => {
  const arrow = direction === 'back' ? backArrow : forwardArrow;
  const classes = useStyles();
  return (
    <IconButton
      className={classes.arrowBtn}
      component={Link}
      to={to}
      onClick={() => selectedMenuItemHandler(selectedIndex)}
    >
      <img alt={`${direction}arrow`} src={arrow} />
    </IconButton>
  );
};

export default ArrowBtn;
