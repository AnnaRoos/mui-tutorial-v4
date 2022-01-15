import React from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    '&.Mui-selected': {},
  },
  tabs: {
    marginLeft: 'auto',
  },
}));

const Navigation = ({
  anchorEl,
  navigationHandler,
  openMenuHandler,
  value,
}) => {
  const classes = useStyles();

  const navigationTabs = pages
    .filter((page) => (page.tabItem ? page : null))
    .map((page) => {
      if (page.title === 'Services') {
        return (
          <Tab
            className={classes.tab}
            aria-controls={anchorEl ? 'services-menu' : undefined}
            aria-haspopup={anchorEl ? true : undefined}
            onMouseOver={(event) => openMenuHandler(event)}
            label={page.title}
            key={page.title}
            component={Link}
            to={page.path}
          />
        );
      } else {
        return (
          <Tab
            className={classes.tab}
            label={page.title}
            key={page.title}
            component={Link}
            to={page.path}
          />
        );
      }
    });

  return (
    <Tabs
      className={classes.tabs}
      value={value}
      onChange={navigationHandler}
      indicatorColor="primary"
    >
      {navigationTabs}
    </Tabs>
  );
};

export default Navigation;
