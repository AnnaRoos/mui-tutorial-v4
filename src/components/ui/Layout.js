import React, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import { pages } from '../../config/pageConfig';

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [value, setValue] = useState(0);

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

  const navigationHandler = (event, newValue) => {
    if (event.target.id === 'logo') {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  const selectedMenuItemHandler = (index) => {
    console.log(index);
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

  return (
    <>
      <Header
        anchorEl={anchorEl}
        closeMenuHandler={closeMenuHandler}
        navigationHandler={navigationHandler}
        openDrawer={openDrawer}
        openMenu={openMenu}
        openMenuHandler={openMenuHandler}
        selectedIndex={selectedIndex}
        selectedMenuItemHandler={selectedMenuItemHandler}
        toggleDrawerHandler={toggleDrawerHandler}
        value={value}
      />
      {children}
      <Footer
        navigationHandler={navigationHandler}
        selectedMenuItemHandler={selectedMenuItemHandler}
      />
    </>
  );
};

export default Layout;
