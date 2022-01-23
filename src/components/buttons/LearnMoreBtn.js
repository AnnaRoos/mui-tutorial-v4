import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: theme.palette.common.arcBlue,
    borderWidth: '2px',
    borderRadius: '50px',
    height: '3rem',
    width: '9rem',
    color: theme.palette.common.arcBlue,
    textTransform: 'none',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    '& span': {
      margin: '0 0.5rem 0 0',
    },
  },
}));

const LearnMoreBtn = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Button className={classes.root} variant="outlined">
      <span>Learn more</span>
      <ButtonArrow
        fill={theme.palette.common.arcBlue}
        height={'1rem'}
        width={'1rem'}
      />
    </Button>
  );
};

export default LearnMoreBtn;
