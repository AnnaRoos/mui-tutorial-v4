import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import DummyPage from './pages/DummyPage';
import Layout from './components/ui/Layout';

import { pages } from './config/pageConfig';
import { theme } from './Theme';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const navigationHandler = (event, activeIndex) => {
    setActiveIndex(activeIndex);
  };

  const selectedMenuItemHandler = (index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  useEffect(() => {
    pages.forEach((page) => {
      if (
        window.location.pathname === page.path &&
        activeIndex !== page.activeIndex
      ) {
        setActiveIndex(page.activeIndex);
        if (page.selectedIndex && page.selectedIndex !== selectedIndex) {
          setSelectedIndex(page.selectedIndex);
        }
      }
    });
  }, [activeIndex, selectedIndex]);

  const pageRoutes = pages.slice(2, -1).map((page) => {
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
          activeIndex={activeIndex}
        >
          <Routes>
            <Route
              exact
              path={'/'}
              element={
                <HomePage
                  navigationHandler={navigationHandler}
                  selectedMenuItemHandler={selectedMenuItemHandler}
                />
              }
            />
            <Route
              exact
              path={'/services'}
              element={
                <ServicesPage
                  navigationHandler={navigationHandler}
                  selectedMenuItemHandler={selectedMenuItemHandler}
                />
              }
            />
            {pageRoutes}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
