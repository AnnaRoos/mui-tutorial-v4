import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import CTAButton from '../buttons/CTAButton';
import ElevationScroll from './ElevationScroll';
import Logo from '../images/Logo';
import Navigation from '../navigation/TabNavigation';
import TabMenu from '../navigation/TabMenu';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const navigationHandler = (event, newValue) => {
    const menuItemsIds = pages
      .filter((page) => (page.menuItem ? page : null))
      .map((page) => `menuItem-${page.title}`);
    if (event.target.id === 'logo') {
      setValue(0);
    } else if (menuItemsIds.includes(event.target.id)) {
      setValue(1);
    } else {
      setValue(newValue);
    }
  };

  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const selectMenuItemhandler = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  useEffect(() => {
    pages
      .filter((page) => (page.tabItem ? page : null))
      .forEach((page, index) => {
        if (window.location.pathname === page.path && value !== index) {
          setValue(index);
        }
      });
    pages
      .filter((page) => (page.menuItem ? page : null))
      .forEach((page, index) => {
        if (window.location.pathname === page.path && value !== 1) {
          setValue(1);
          setSelectedIndex(index);
        }
      });
  }, [value]);

  const tabs = (
    <>
      <Navigation
        anchorEl={anchorEl}
        openMenuHandler={openMenuHandler}
        navigationHandler={navigationHandler}
        value={value}
      />
      <CTAButton position={{ margin: '0 50px 0 25px' }} />
      <TabMenu
        anchorEl={anchorEl}
        closeMenuHandler={closeMenuHandler}
        id="services-menu"
        navigationHandler={navigationHandler}
        open={open}
        openMenuHandler={openMenuHandler}
        selectedIndex={selectedIndex}
        selectMenuItemhandler={selectMenuItemhandler}
        value={value}
      />
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo navigationHandler={navigationHandler} />
            {matches || tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
