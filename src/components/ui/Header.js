import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import CTABtn from '../buttons/CTABtn';
import DrawerNavigation from '../navigation/DrawerNavigation';
import ElevationScroll from '../hoc/ElevationScroll';
import Logo from '../images/Logo';
import TabNavigation from '../navigation/TabNavigation';
import TabMenu from '../navigation/TabMenu';
import ToolbarMargin from '../helpers/ToolbarMargin';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = ({
  anchorEl,
  closeMenuHandler,
  navigationHandler,
  openDrawer,
  openMenu,
  openMenuHandler,
  selectedIndex,
  selectedMenuItemHandler,
  toggleDrawerHandler,
  value,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const tabMenuOptions = {
    ariaOwns: anchorEl ? 'services-menu' : undefined,
    ariaHaspopup: anchorEl ? true : undefined,
    onMouseOver: (event) => openMenuHandler(event),
  };

  const tabs = (
    <>
      <TabNavigation
        navigationHandler={navigationHandler}
        tabMenuOptions={tabMenuOptions}
        value={value}
      />
      <CTABtn
        navigationHandler={navigationHandler}
        position={{ margin: '0 50px 0 25px' }}
      />
      <TabMenu
        anchorEl={anchorEl}
        closeMenuHandler={closeMenuHandler}
        id="services-menu"
        navigationHandler={navigationHandler}
        open={openMenu}
        openMenuHandler={openMenuHandler}
        selectedIndex={selectedIndex}
        selectedMenuItemHandler={selectedMenuItemHandler}
        value={value}
      />
    </>
  );

  const drawer = (
    <>
      <DrawerNavigation
        navigationHandler={navigationHandler}
        toggleDrawerHandler={toggleDrawerHandler}
        open={openDrawer}
        value={value}
      />
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Logo navigationHandler={navigationHandler} />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;
