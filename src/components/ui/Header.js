import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import CTAButton from './CTAButton';
import ElevationScroll from './ElevationScroll';
import Logo from './Logo';
import Navigation from './Navigation';
import TabMenu from './TabMenu';

import { pages } from '../../config/pageConfig';
import { theme } from './Theme';

const useStyles = makeStyles({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
});

const Header = () => {
  const classes = useStyles();

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
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo navigationHandler={navigationHandler} />
            <Navigation
              navigationHandler={navigationHandler}
              value={value}
              anchorEl={anchorEl}
              openMenuHandler={openMenuHandler}
            />
            <CTAButton position={{ margin: '0 50px 0 25px' }} />
            <TabMenu
              id="services"
              anchorEl={anchorEl}
              open={open}
              selectedIndex={selectedIndex}
              value={value}
              closeMenuHandler={closeMenuHandler}
              openMenuHandler={openMenuHandler}
              navigationHandler={navigationHandler}
              selectMenuItemhandler={selectMenuItemhandler}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
