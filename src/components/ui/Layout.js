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
  toggleDrawerHandler,
  activeIndex,
  children,
  selectedMenuItemHandler,
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
        toggleDrawerHandler={toggleDrawerHandler}
        activeIndex={activeIndex}
        selectedMenuItemHandler={selectedMenuItemHandler}
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
