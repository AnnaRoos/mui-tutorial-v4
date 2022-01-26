import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({
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
  children,
}) => {
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
