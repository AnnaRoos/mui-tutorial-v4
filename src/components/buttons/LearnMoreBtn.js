import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: (styling) => styling.borderColor,
    borderWidth: '2px',
    borderRadius: '50px',
    height: (styling) => styling.height,
    width: (styling) => styling.width,
    color: (styling) => styling.color,
    textTransform: 'none',
    fontSize: (styling) => styling.fontSize,
    fontWeight: 'bold',
    '& span': {
      margin: '0 0.5rem 0 0',
    },
  },
}));

const LearnMoreBtn = ({ styling = null, arrowStyling = null }) => {
  const theme = useTheme();
  const customStyles = styling
    ? styling
    : {
        color: theme.palette.common.arcBlue,
        borderColor: theme.palette.common.arcBlue,
        fontSize: '0.9rem',
        height: '3rem',
        width: '9rem',
      };
  const classes = useStyles(customStyles);

  return (
    <Button className={classes.root} variant="outlined">
      <span>Learn more</span>
      <ButtonArrow
        fill={arrowStyling ? arrowStyling.color : theme.palette.common.arcBlue}
        height={'1rem'}
        width={'1rem'}
      />
    </Button>
  );
};

export default LearnMoreBtn;
