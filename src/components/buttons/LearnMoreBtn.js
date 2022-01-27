import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: (buttonStyle) => buttonStyle.buttonColor.borderColor,
    borderWidth: '2px',
    borderRadius: '50px',
    height: (buttonStyle) => buttonStyle.buttonSize.height,
    width: (buttonStyle) => buttonStyle.buttonSize.width,
    color: (buttonStyle) => buttonStyle.buttonColor.color,
    textTransform: 'none',
    fontSize: (buttonStyle) => buttonStyle.buttonSize.fontSize,
    fontWeight: 'bold',
    '& span': {
      margin: '0 0.5rem 0 0',
    },
  },
}));

const LearnMoreBtn = ({
  size = 'lg',
  color = 'blue',
  navigationHandler,
  selectedMenuItemHandler = null,
  path = '/',
  activeIndex,
  selectedIndex = null,
}) => {
  const theme = useTheme();

  const buttonSize =
    size === 'lg'
      ? {
          fontSize: '0.9rem',
          height: '3rem',
          width: '9rem',
        }
      : { fontSize: '0.7rem', height: '2.5rem', width: '8rem' };

  const buttonColor =
    color === 'blue'
      ? {
          color: theme.palette.common.arcBlue,
          borderColor: theme.palette.common.arcBlue,
        }
      : {
          color: 'white',
          borderColor: 'white',
        };

  const buttonStyle = { buttonSize, buttonColor };

  const classes = useStyles(buttonStyle);

  const learnBtnClickHandler = (event, activeIndex, selectedIndex = null) => {
    navigationHandler(event, activeIndex);
    if (selectedIndex) selectedMenuItemHandler(selectedIndex);
  };

  return (
    <Button
      className={classes.root}
      component={Link}
      to={path}
      variant="outlined"
      onClick={(event) =>
        learnBtnClickHandler(event, activeIndex, selectedIndex)
      }
    >
      <span>Learn more</span>
      <ButtonArrow
        fill={color === 'blue' ? theme.palette.common.arcBlue : 'white'}
        height={'1rem'}
        width={'1rem'}
      />
    </Button>
  );
};

export default LearnMoreBtn;
