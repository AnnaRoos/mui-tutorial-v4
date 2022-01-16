import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';

import DrawerList from './DrawerList';
import ToolbarMargin from '../helpers/ToolbarMargin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    ...theme.typography.tab,
    color: 'white',
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: 'black',
  },
}));

const DrawerNavigation = ({
  navigationHandler,
  toggleDrawerHandler,
  open,
  value,
}) => {
  /*   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   */ const classes = useStyles();
  return (
    <>
      <SwipeableDrawer
        /*         disableBackdropTransition={!iOS}
        disableDiscovery={iOS} */
        anchor={'right'}
        classes={{ paper: classes.drawer }}
        open={open}
        onClose={toggleDrawerHandler}
        onOpen={toggleDrawerHandler}
      >
        <ToolbarMargin />
        <DrawerList
          navigationHandler={navigationHandler}
          toggleDrawerHandler={toggleDrawerHandler}
          value={value}
        />
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={toggleDrawerHandler}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default DrawerNavigation;
