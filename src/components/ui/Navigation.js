import React from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';
import { theme } from './Theme';

const useStyles = makeStyles({
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    '&.Mui-selected': {},
  },
  tabs: {
    marginLeft: 'auto',
  },
});

const Navigation = ({
  navigationHandler,
  value,
  anchorEl,
  openMenuHandler,
}) => {
  const classes = useStyles();

  const pageTabs = pages.slice(0, 5);

  const navigationTabs = pageTabs.map((page) => {
    if (page.title === 'Services') {
      return (
        <Tab
          className={classes.tab}
          aria-owns={anchorEl ? 'services' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onClick={(event) => openMenuHandler(event)}
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
