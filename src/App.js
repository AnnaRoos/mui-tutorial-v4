import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import DummyPage from './pages/DummyPage';
import Layout from './components/ui/Layout';

import { pages } from './config/pageConfig';
import { theme } from './Theme';
import HomePage from './pages/HomePage';

function App() {
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

  const navigationHandler = (event, newValue = null) => {
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

  const pageRoutes = pages.slice(1, -1).map((page) => {
    return (
      <Route
        key={page.title}
        exact
        path={page.path}
        element={page.page ? <page.page /> : <DummyPage text={page.title} />}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout
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
        >
          <Routes>
            <Route
              key={'homePage'}
              exact
              path={'/'}
              element={<HomePage navigationHandler={navigationHandler} />}
            />
            {pageRoutes}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
