import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: theme.palette.common.arcBlue,
    borderWidth: '2px',
    borderRadius: '50px',
    height: (config) => config.height,
    width: (config) => config.width,
    color: theme.palette.common.arcBlue,
    textTransform: 'none',
    fontSize: (config) => config.fontSize,
    fontWeight: 'bold',
    '& span': {
      margin: '0 0.5rem 0 0',
    },
  },
}));

const LearnMoreBtn = ({ config }) => {
  const classes = useStyles(config);
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
