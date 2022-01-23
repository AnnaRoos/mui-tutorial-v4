import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: theme.palette.common.arcBlue,
    borderRadius: '50px',
    height: '3rem',
    minWidth: '9rem',
    color: theme.palette.common.arcBlue,
    textTransform: 'none',
    fontSize: theme.typography.body1.fontSize,
  },
}));

const LearnMoreBtn = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Button className={classes.root} variant="outlined">
      Learn more
      <ButtonArrow
        fill={theme.palette.common.arcBlue}
        height={'1rem'}
        width={'1.5rem'}
      />
    </Button>
  );
};

export default LearnMoreBtn;
