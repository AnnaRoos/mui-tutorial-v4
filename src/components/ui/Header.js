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

  const navigationHandler = (event, newValue) => {
    if (event.target.id === 'logo') {
      setValue(0);
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

  useEffect(() => {
    pages.forEach((page, index) => {
      if (window.location.pathname === page.path && value !== index) {
        setValue(index);
      }
    });
  }, [value]);

  const menuOptions = ['Custom SoftWare', 'Mobile Apps', 'Websites'];

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
              options={menuOptions}
              open={open}
              openMenuHandler={openMenuHandler}
              closeMenuHandler={closeMenuHandler}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
