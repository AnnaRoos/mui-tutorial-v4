import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import CTAButton from '../buttons/CTAButton';
import DrawerNavigation from '../navigation/DrawerNavigation';
import ElevationScroll from '../hoc/ElevationScroll';
import Logo from '../images/Logo';
import TabNavigation from '../navigation/TabNavigation';
import TabMenu from '../navigation/TabMenu';
import ToolbarMargin from '../helpers/ToolbarMargin';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [value, setValue] = useState(0);

  const navigationHandler = (event, newValue) => {
    if (event.target.id === 'logo') {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const toggleDrawerHandler = () => {
    setOpenDrawer((prev) => !prev);
  };

  const selectMenuItemhandler = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  useEffect(() => {
    pages.forEach((page) => {
      if (
        window.location.pathname === page.path &&
        value !== page.activeIndex
      ) {
        setValue(page.activeIndex);
        if (page.selectedIndex && page.selectedIndex !== selectedIndex) {
          setSelectedIndex(page.selectedIndex);
        }
      }
    });
  }, [value, selectedIndex]);

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
      <CTAButton
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
        selectMenuItemhandler={selectMenuItemhandler}
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
